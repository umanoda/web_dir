class CreateDirectories < ActiveRecord::Migration[5.0]
  def change
    create_table :directories do |t|
      t.string :name
      t.integer :parent_id

      t.timestamps
    end
    add_index :directories, :parent_id
    Directory.create!(name: '/')
  end
end
