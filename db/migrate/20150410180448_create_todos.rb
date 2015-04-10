class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :task
      t.date :date
      t.integer :user

      t.timestamps
    end
  end
end
