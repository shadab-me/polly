class AddUserIdToVotes < ActiveRecord::Migration[6.1]
  def change
    add_column :votes, :user_id, :string
    add_column :votes, :poll_id, :string
    add_column :votes, :option_id, :string
    add_foreign_key :votes, :users, column: :user_id, on_delete: :cascade
    add_foreign_key :votes, :polls, column: :poll_id, on_delete: :cascade
    add_foreign_key :votes, :options, column: :option_id, on_delete: :cascade

  end
end
