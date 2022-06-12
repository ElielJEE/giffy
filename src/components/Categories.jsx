import React from 'react';
import CategoriesItem from './CategoriesItem'
import CategoriesData from '../Data/CategoriesData.json'
import '../Styles/Categories.css'

export default function Categories() {
  const categories = CategoriesData.categories;

  return (
    <div className="categories-container">
      {
        categories.map(({ id, address, name }) =>
          <CategoriesItem
            key={id}
            keyword={address}
            title={name}
          />
        )
      }
    </div>
  )
}