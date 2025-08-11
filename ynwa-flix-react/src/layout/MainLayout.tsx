import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box>
      {/* Top Navigation Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            YNWA Flix - You'll Never Walk Alone
          </Typography>
          {/* Navigation Links */}
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
        </Toolbar>
      </AppBar>

      {/* Page Content */}
      <Container sx={{ mt: 4 }}>
        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;
