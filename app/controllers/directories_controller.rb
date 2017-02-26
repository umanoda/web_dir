class DirectoriesController < ApplicationController

  # root page
  def view
    root = Directory.find_by_parent_id(nil)
    @directories = Directory.where(parent_id: [nil, root.id]).group_by(&:parent_id)
  end

  # Get recursively
  def index
    @directories = Directory.includes(:items)
    @directories = @directories.group_by(&:parent_id)
  end

  # only json
  def show
    dir_id = params[:id]
    @directory = if dir_id == 'root'
                   Directory.where(parent_id: nil).take
                 else
                   Directory.find(dir_id)
                 end
    render json: {
      id: @directory.id,
      directories: @directory.children,
      items: @directory.items,
    }
  end

  def create
    parent = Directory.find(params[:parent_id])
    directory = Directory.new(name: 'new dir', parent: parent)

    if directory.save
      redirect_to directories_path
    else
      redirect_to directories_path
    end
  end

  def update
  end

  def destroy
  end
end
