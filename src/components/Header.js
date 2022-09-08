import React from 'react';
import { Box, Container } from '@mui/material';
import { flexBetweenCenter, dFlex } from '../themes/commonStyles';
import Logo from './Logo';
import LocationSearch from './LocationSearch';
import ProfileSetting from './ProfileSetting';

const Header = () => {
  return (
    <Box sx={{ ...dFlex, minHeight: 70, borderBottom: '1px solid #ddd' }}>
      <Container maxWidth="xl">
        <Box sx={{ ...flexBetweenCenter, minHeight: 70, px: 4 }}>
          <Logo />
          <LocationSearch />
          <ProfileSetting />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
