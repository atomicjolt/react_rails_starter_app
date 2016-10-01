# From http://eng.flipp.com/breakpoints-a-ruby-class-for-testing-race-conditions/
# Fail the spec if any thread throws an error
::Thread.abort_on_exception = true

# Class that can run a thread until a given breakpoint.
class Breakpoints

  class << self
    attr_accessor :main_thread
    attr_accessor :breakpoints

    # Add breakpoints around a method to a class. This can be passed into
    # the run_until method.
    # @param klass [Class] the class to add breakpoints to.
    # @param method [Symbol] the method to add breakpoints around.
    def add_breakpoints(klass, method)
      return if klass.respond_to?("_before_breakpoint_#{method}")
      klass.send(:alias_method, :"_before_breakpoint_#{method}", method)
      klass.send(:define_method, method) do |*args|
        Breakpoints.break(:"before_#{method}")
        ret_val = self.send(:"_before_breakpoint_#{method}", *args)
        Breakpoints.break(:"after_#{method}")
        ret_val
      end
    end

    # Break the current thread if the breakpoint is set.
    # @param breakpoint [Symbol]
    def break(breakpoint)
      if ::Thread.current[:breakpoints] &&
        ::Thread.current[:breakpoints].include?(breakpoint)
          ::Thread.current[:breakpoints_reached] << breakpoint
          self.main_thread.run
          ::Thread.stop
      end
    end
  end

  class Thread
    # Create a thread to run later.
    def initialize(&block)
      @block_to_run = block
    end

    # Continue a thread to stop at the next breakpoint or finish running.
    def finish
      if @thread
        unless @thread.alive?
          breakpoints = @thread[:breakpoints] || []
          breakpoints_reached = @thread[:breakpoints_reached] || []
          missed_breakpoints = breakpoints - breakpoints_reached
          if missed_breakpoints.any?
            raise "Breakpoint(s) #{missed_breakpoints.to_a.join(', ')}" +
              "not reached!"
          end
        end
        @thread.wakeup
        ::Thread.stop
      else
        run_until(nil)
      end
    end

    # Run the thread until it reaches the given breakpoint.
    # @param breakpoint [Symbol]
    def run_until(breakpoint=nil)
      Breakpoints.main_thread = ::Thread.current
      if breakpoint && @thread
        @thread[:breakpoints] ||= Set.new
        @thread[:breakpoints_reached] ||= Set.new
        @thread[:breakpoints] << breakpoint
        self.finish
        return
      end

      @thread ||= ::Thread.new do
        if breakpoint
          ::Thread.current[:breakpoints] ||= Set.new
          ::Thread.current[:breakpoints_reached] ||= Set.new
          ::Thread.current[:breakpoints] << breakpoint
          begin
            @block_to_run.call
            unless ::Thread.current[:breakpoints_reached].include?(breakpoint)
              raise "Breakpoint #{breakpoint} not reached!"
            end
          end
        else
          @block_to_run.call
        end
        # return control back to main thread
        Breakpoints.main_thread.run
      end
      ::Thread.stop
    end
  end
end