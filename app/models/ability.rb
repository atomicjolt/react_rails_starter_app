class Ability
  include CanCan::Ability

  def initialize(user, account)
    # Define abilities for the passed in user here. For example:
    #
    #   user ||= User.new # guest user (not logged in)
    #   if user.admin?
    #     can :manage, :all
    #   else
    #     can :read, :all
    #   end
    #
    # The first argument to `can` is the action you are giving the user
    # permission to do.
    # If you pass :manage it will apply to every action. Other common actions
    # here are :read, :create, :update and :destroy.
    #
    # The second argument is the resource the user can perform the action on.
    # If you pass :all it will apply to every resource. Otherwise pass a Ruby
    # class of the resource.
    #
    # The third argument is an optional hash of conditions to further filter the
    # objects.
    # For example, here the user can only update published articles.
    #
    #   can :update, Article, :published => true
    #
    # See the wiki for details:
    # https://github.com/CanCanCommunity/cancancan/wiki/Defining-Abilities

    user ||= User.new # guest user (not logged in)

    basic(user, account)
    admin(user, account) if user.admin
    account_admin(user, account) if account && user.account_id == account.id && user.admin
    super_admin(user) if user.super_admin

  end

  def basic(user, account)
    can :manage, User, id: user.id
  end

  def admin(user, account)
    can :manage, :all
  end

  def account_admin(user, account)
    can :update, Account, id: account.id
  end

  def super_admin(user)
    can :read, Account
    can :update, Account
  end
end
