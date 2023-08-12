import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  images: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => {
          console.log('Fetched data:', data);
          const fetchedProducts: Product[] = data || [];
          setProducts(fetchedProducts);
          setLoading(false);
      })
      .catch(error => {
          console.error('Error fetching products:', error);
          setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className='pdt'>Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          <div className='product-list'>
            {products.map(product => (
              <ol key={product.id}>
                <h2 className='product-title'>{product.title}</h2>
                <img className='product-image' alt='picformimage' src={product.images}></img>
                <h4>Price: ${product.price}</h4>
              </ol>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default ProductList;
