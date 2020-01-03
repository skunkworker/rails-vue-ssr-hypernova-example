class CreateTodoItems < ActiveRecord::Migration[6.0]
  def change
    create_table :todo_items do |t|
      t.string :name
      t.datetime :due_at

      t.timestamps
    end
  end
end
