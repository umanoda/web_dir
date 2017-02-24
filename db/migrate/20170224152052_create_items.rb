class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :subject
      t.string :content
      t.references :directory

      t.timestamps
    end
  end
end
