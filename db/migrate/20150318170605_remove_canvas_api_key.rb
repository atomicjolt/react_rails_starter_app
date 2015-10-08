class RemoveCanvasApiKey < ActiveRecord::Migration
  def change
    remove_column :accounts, :canvas_api_key
  end
end
