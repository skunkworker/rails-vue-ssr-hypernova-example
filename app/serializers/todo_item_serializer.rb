class TodoItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :due_at
end
