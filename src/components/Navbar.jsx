import React from 'react';
import { AppBar, Container, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            onClick={() => scrollToSection('accueil')}
            style={{ cursor: 'pointer' }}
          >
            <Box
              component="img"
              src="/logo.svg"
              alt="Logo"
              sx={{ width: 40, height: 40 }}
            />
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
              { id: 'work', label: 'Work' },
              { id: 'skills', label: 'Skills' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: 'text.secondary',
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