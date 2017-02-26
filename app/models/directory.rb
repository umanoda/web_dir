class Directory < ApplicationRecord
  has_many :items, dependent: :destroy
  has_many :children, class_name: self, foreign_key: :parent_id, dependent: :destroy
  belongs_to :parent, class_name: self, optional: true
end
