class Permission < ApplicationRecord
  belongs_to :user
  belongs_to :role

  def self.by_nil_or_context(context_id)
    where(context_id: [context_id, nil])
  end
end
