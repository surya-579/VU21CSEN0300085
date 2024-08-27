// src/pages/AllProductsPage.js
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Call the mock API to fetch products
    fetchProducts("AMZ", "Laptop", 10, 1, 10000).then(data => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
