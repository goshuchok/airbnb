import React from 'react';
import { Box, CssBaseline, Container } from '@mui/material';
import './App.css';
import Header from './components/Header';
import OptionsTab from './components/OptionsTab';
import LocationCards from './components/LocationCards';

function App() {
  return (
    <React.Fragment>
      <CssBaseline>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <Box>
            <Header />
            <OptionsTab />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              height: 100,
              overflowY: 'scroll',
            }}
          >
            <Container maxWidth="xl" sx={{ mb: 3 }}>
              <LocationCards />
            </Container>
          </Box>
        </Box>
      </CssBaseline>
    </React.Fragment>
  );
}

export default App;
