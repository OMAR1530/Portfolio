import React from 'react';
import { AppBar, Container, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'transparent',
        boxShadow: 'none',
        pt: 2,
        backdropFilter: 'blur(5px)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ cursor: 'pointer' }}
          >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Box
                component="img"
                src="/logo.svg"
                alt="Logo"
                sx={{ height: 40 }}
              />
            </Link>
          </motion.div>

          {/* Navigation */}
          <Box
            component="nav"
            sx={{
              display: 'flex',
              gap: 2,
            }}
          >
            {[
              { path: '/', label: 'Accueil' },
              { path: '/contact', label: 'Contact' }
            ].map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  component={Link}
                  to={item.path}
                  sx={{
                    color: location.pathname === item.path ? 'primary.main' : 'text.secondary',
                    fontSize: '0.9rem',
                    textTransform: 'none',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar; 