class CreateDirectories < ActiveRecord::Migration[5.0]
  def change
    create_table :directories do |t|
      t.string :name
      t.boolean :is_root

      t.timestamps
    end
    Directory.create(name: '/', is_root: true)
  end
end
