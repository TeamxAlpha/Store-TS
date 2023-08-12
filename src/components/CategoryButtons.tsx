// import React, { useState } from 'react';

// interface Category {
//   id: number;
//   name: string;
// }

// interface CategoryButtonsProps {
//   categories: Category[];
//   onCategorySelect: (categoryId: number) => void;
// }

// const CategoryButtons: React.FC<CategoryButtonsProps> = ({ categories, onCategorySelect }) => {
//   return (
//     <div>
//       <h2>Categories</h2>
//       {categories.map(category => (
//         <button key={category.id} onClick={() => onCategorySelect(category.id)}>
//           {category.name}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default CategoryButtons;
