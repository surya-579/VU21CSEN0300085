import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/api';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (!product) return <div>Product not found.</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{product.name}</h1>
      <img 
        src={product.image || 'placeholder-image.jpg'} 
        alt={product.name} 
        style={{ width: '100%', height: 'auto', marginBottom: '20px' }} 
      />
      <p><strong>Company:</strong> {product.company}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Rating:</strong> {product.rating}</p>
      <p><strong>Discount:</strong> {product.discount}%</p>
      <p><strong>Availability:</strong> {product.availability ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
};

export default ProductDetailPage;
