import  { useState, useCallback } from 'react';
import GetProductsButton from './GetProductsButton';


interface Product {
  id: number;
  title: string;
  price: number;
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <GetProductsButton onFetchProducts={fetchProducts} />
      
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;