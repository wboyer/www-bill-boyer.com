class DemosController < ApplicationController
  def index
    @demos = Demo.all
  end

  def create
    raise 'not in production!' if ENV["RAILS_ENV"] == 'production'

    @demo = Demo.new(params.require(:demo).permit(:url, :title, :short_desc, :long_desc, :img, :script))
    if @demo.save
      redirect_to @demo
    else
      render 'new'
    end
  end

  def show
    @demo = Demo.find(params[:id])
  end

  def edit
    @demo = Demo.find(params[:id])
  end

  def update
    raise 'not in production!' if ENV["RAILS_ENV"] == 'production'

    @demo = Demo.find(params[:id])
   
    if @demo.update(params[:demo].permit(:title, :short_desc, :long_desc, :img, :script))
      redirect_to @demo
    else
      render 'edit'
    end
  end

  def destroy
    raise 'not in production!' if ENV["RAILS_ENV"] == 'production'

    @demo = Demo.find(params[:id])
    @demo.destroy
   
    redirect_to demos_path
  end
end
