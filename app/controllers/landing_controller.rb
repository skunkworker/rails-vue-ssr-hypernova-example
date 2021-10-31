class LandingController < ApplicationController
  def index
    @todo_items = [
      TodoItem.new(name: "One item", due_at: 1.hour.from_now),
      TodoItem.new(name: "A second item", due_at: 2.hour.from_now),
      TodoItem.first
    ]

    @todo_item = TodoItem.new(name: "Foobar", due_at: 1.hour.from_now)
  end
end
