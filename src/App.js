import React, { Fragment } from 'react';
import { Box, CssBaseline, Container } from '@mui/material';
import './App.css';
import Header from './components/Header';
import OptionsTab from './components/OptionsTab';
import LocationCards from './components/LocationCards';
import Footer from './components/Footer';
import FooterMenu from './components/FooterMenu';
import { displayOnDesktop } from './themes/commonStyles';
import MobileFooter from './components/MobileFooter';

function App() {
  return (
    <Fragment>
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
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <MobileFooter />
              </Box>
            </Container>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <FooterMenu />
          </Box>
          <Box sx={displayOnDesktop}>
            <Footer />
          </Box>
        </Box>
      </CssBaseline>
    </Fragment>
  );
}

export default App;
