# frozen_string_literal: true

class CreatePolls < ActiveRecord::Migration[6.1]
  def change
    create_table :polls do |t|
      t.string :value

      t.timestamps
    end
  end
end
