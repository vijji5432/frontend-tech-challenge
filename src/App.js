import React, { useState } from 'react';

/**
 * A simple React app that fetches a random cat fact from a public API
 * and displays it with improved styling and error handling.
 */
function App() {
  const [fact, setFact] = useState('');
  const [error, setError] = useState('');

  const fetchCatFact = async () => {
    try {
      setError('');
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact);
    } catch (err) {
      setError('😿 Failed to fetch fact. Please try again.');
      setFact('');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#fdf6e3',
      fontFamily: 'Segoe UI, sans-serif',
      padding: '2rem'
    }}>
      <h1 style={{ color: '#2c3e50' }}>🐾 Random Cat Fact Generator</h1>
      <button
        onClick={fetchCatFact}
        style={{
          padding: '10px 20px',
          backgroundColor: '#3498db',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
          marginTop: '1rem',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
      >
        Get a Cat Fact 🐱
      </button>
      {fact && (
        <p style={{
          marginTop: '2rem',
          maxWidth: '600px',
          fontSize: '18px',
          textAlign: 'center',
          color: '#2d3436',
          backgroundColor: '#fff',
          padding: '1rem',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          {fact}
        </p>
      )}
      {error && (
        <p style={{ color: 'red', marginTop: '2rem' }}>{error}</p>
      )}
    </div>
  );
}

export default App;
