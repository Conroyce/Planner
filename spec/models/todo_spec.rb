require 'rails_helper'

RSpec.describe Todo, type: :model do
  it "creates a todo" do
    todo = Todo.create!(task: "Clean Room", user: 1)
  
    expect(todo.task).to eq("Clean Room")
  end  
end
