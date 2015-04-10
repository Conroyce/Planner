class TodosController < ApplicationController
  def index
    @todos = Todo.all
  end  

  def create
    @todo = Todo.find(todo_params)
  end  

  def destroy
    @todo = Todo.delete(params["id"])
  end
  
  def todo_params
    @todo = params.require(:todo).permit(:task,:date,:user)
  end  
end
