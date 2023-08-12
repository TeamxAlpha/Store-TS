import React, { useEffect, useState } from 'react';

interface Category {
  id: number;
  name: string;
}

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then(response => response.json())
      .then(data => {
        console.log("fetched categories", data)
        const fetchedCategories: Category[] = data || [];
        setCategories(fetchedCategories);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div>
      <h1 className='cat'>Categories</h1>
        <ul className="Categories-List">
          {categories.map(category => (
            <button className='category-button' key={category.id}>{category.name}</button>
          ))}
        </ul>
    </div>
  );
};

export default CategoryList;
