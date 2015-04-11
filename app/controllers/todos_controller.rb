class TodosController < ApplicationController
  def index
    @todos = Todo.all
    render json: @todos
  end  

  def show
    @todo = Todo.find(params[:id])
    render json: @todo
  end  

  def create
    @todo = Todo.create(todo_params)
    render json: @todo
  end  

  def destroy
    @todo = Todo.delete(params[:id])
    render json: @todo
  end
  
  def todo_params
    @todo = params.require(:todo).permit(:task,:date,:user)
  end  
end
