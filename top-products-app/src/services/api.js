// src/services/api.js
export const fetchProducts = async (companyName, categoryName, top = 10, minPrice = 1, maxPrice = 10000) => {
  // Instead of an API call, we return the test data directly
  return [
    {
      "productName": "Laptop 1",
      "price": 2236,
      "rating": 4.7,
      "discount": 63,
      "availability": "yes"
    },
    {
      "productName": "Laptop 13",
      "price": 1244,
      "rating": 4.5,
      "discount": 45,
      "availability": "out-of-stock"
    },
    {
      "productName": "Laptop 3",
      "price": 9102,
      "rating": 4.44,
      "discount": 98,
      "availability": "out-of-stock"
    },
    {
      "productName": "Laptop 11",
      "price": 2652,
      "rating": 4.12,
      "discount": 78,
      "availability": "yes"
    },
    {
      "productName": "Laptop 4",
      "price": 1258,
      "rating": 3.8,
      "discount": 33,
      "availability": "yes"
    },
    {
      "productName": "Laptop 13",
      "price": 8686,
      "rating": 3.22,
      "discount": 24,
      "availability": "out-of-stock"
    },
    {
      "productName": "Laptop 14",
      "price": 92545,
      "rating": 5.0,
      "discount": 56,
      "availability": "yes"
    },
    {
      "productName": "Laptop 1",
      "price": 2059,
      "rating": 2.7,
      "discount": 21,
      "availability": "yes"
    },
    {
      "productName": "Laptop 10",
      "price": 7145,
      "rating": 4.0,
      "discount": 15,
      "availability": "yes"
    },
    {
      "productName": "Laptop 19",
      "price": 14194,
      "rating": 2.6,
      "discount": 30,
      "availability": "out-of-stock"
    }
  ];
};
