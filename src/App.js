import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <CssBaseline>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <Box>
            <Header />
          </Box>
        </Box>
      </CssBaseline>
    </React.Fragment>
  );
}

export default App;
