import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import Home from './pages/Home';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div style={{
        minHeight: '100vh',
        background: theme === 'light' ? lightTheme.background : darkTheme.background,
        color: theme === 'light' ? lightTheme.text : darkTheme.text,
        transition: 'background 0.3s'
      }}>
        <nav style={{ padding: 16, display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontWeight: 900, letterSpacing: 2 }}>HAMMARSDALE ONLINE STORE</span>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} style={{
            background: 'none', border: 'none', fontWeight: 600, cursor: 'pointer', color: 'inherit'
          }}>{theme === 'light' ? '🌙' : '☀️'}</button>
        </nav>
        <Home />
      </div>
    </ThemeProvider>
  );
}
export default App;
