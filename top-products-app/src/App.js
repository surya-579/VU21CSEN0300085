// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
