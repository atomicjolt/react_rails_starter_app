module Concerns
  module Paging
    extend ActiveSupport::Concern

    included do
      before_action :setup_will_paginate
    end

    def setup_paging
      @page = (params[:page] || 1).to_i
      @page = 1 if @page < 1
      @per_page = (params[:per_page] || (::Rails.env=='test' ? 1 : 40)).to_i
    end

    def set_will_paginate_string
      # Because I18n.locale are dynamically determined in ApplicationController,
      # it should not put in config/initializers/will_paginate.rb
      WillPaginate::ViewHelpers.pagination_options[:previous_label] = "previous"
      WillPaginate::ViewHelpers.pagination_options[:next_label] = "next"
    end

    def setup_will_paginate
      setup_paging
      set_will_paginate_string
    end

  end
end