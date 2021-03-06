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

  def edit
    @todo = Todo.find(params[:id])
  end  

  def update
    @todo = Todo.find(params[:id])
    @todo.update(todo_params)
    render json: @todo
  end  

  def destroy
    @todo = Todo.delete(params[:id])
    render json: @todo
  end
  
  def todo_params
    @todo = params.require(:todo).permit(:task,:date,:user,:completed)
  end  
end
