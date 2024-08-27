// src/components/ProductCard.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image || 'placeholder-image.jpg'}
        alt={product.productName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Company: {product.company}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {product.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Discount: {product.discount}%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Availability: {product.availability ? 'In Stock' : 'Out of Stock'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
