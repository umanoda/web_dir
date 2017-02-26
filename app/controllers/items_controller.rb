class ItemsController < ApplicationController
  def create
    directory = Directory.find(params[:directory_id])
    item = Item.new(subject: 'new item', directory: directory)

    if item.save
      render json: ['ok']
    else
      render json: ['error']
    end
  end

  def update
  end

  def destroy
  end
end
