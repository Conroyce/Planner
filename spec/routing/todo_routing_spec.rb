require 'rails_helper'

RSpec.describe "routing to todo", :type => :routing do
  it "routes /todos to todos#index" do
    expect(:get => "/todos").to route_to(
      :controller => "todos",
      :action => "index"
    )
  end   
end