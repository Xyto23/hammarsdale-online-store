import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('/api/products').then(res => setProducts(res.data));
  }, []);
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginBottom: 24 }}>Featured Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {products.map(product => (
          <div key={product._id} style={{
            background: 'rgba(255,255,255,0.7)', borderRadius: 24, padding: 24, width: 260,
            boxShadow: '0 4px 32px rgba(0,0,0,0.05)', marginBottom: 20
          }}>
            <img src={product.images[0] || 'https://placehold.co/240'} alt={product.name} style={{ width: '100%', borderRadius: 20 }} />
            <h2>{product.name}</h2>
            <p style={{ fontWeight: 600, color: '#6C63FF' }}>R{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
