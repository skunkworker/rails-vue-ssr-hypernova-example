class LandingController < ApplicationController
  def index
    @todo_item = TodoItem.first
  end
end