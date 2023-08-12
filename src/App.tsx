import React from 'react';
import './App.css';
import ProductList from './components/ProductItem';
import CategoryList from './components/CategoryList';


const App: React.FC = () => {
  return (
    <>
    <div className='hero'>
      <h1 className='store-name'>Emumba Store</h1>
      <h3 className='slogan'>"Shop 'til you drop! Find everything you need and more."</h3>
    </div>
    <div className='container'>
      <CategoryList />
      <ProductList />
     
    </div>
    </>
  );
};

export default App;
