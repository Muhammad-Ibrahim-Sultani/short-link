import React from 'react';

import { Button, ThemeProvider, Checkbox } from '@mui/material';

import { theme } from 'utils/mui';

import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button variant="contained">Contained Button</Button>
          <Button variant="outlined">Outlined Button</Button>
          <Checkbox />
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;
