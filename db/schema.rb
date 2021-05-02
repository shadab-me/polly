# frozen_string_literal: true

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20_210_412_040_919) do
  create_table 'options', force: :cascade do |t|
    t.string 'value'
    t.integer 'poll_id', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['poll_id'], name: 'index_options_on_poll_id'
  end

  create_table 'polls', force: :cascade do |t|
    t.string 'value'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.integer 'user_id'
  end

  create_table 'users', force: :cascade do |t|
    t.string 'name', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.string 'email', null: false
    t.string 'password_digest', null: false
    t.string 'authentication_token'
    t.index ['email'], name: 'index_users_on_email', unique: true
  end

  create_table 'votes', force: :cascade do |t|
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.integer 'user_id'
    t.integer 'poll_id'
    t.integer 'option_id'
  end

  add_foreign_key 'options', 'polls'
  add_foreign_key 'polls', 'users', on_delete: :cascade
  add_foreign_key 'votes', 'options', on_delete: :cascade
  add_foreign_key 'votes', 'polls', on_delete: :cascade
  add_foreign_key 'votes', 'users', on_delete: :cascade
end
