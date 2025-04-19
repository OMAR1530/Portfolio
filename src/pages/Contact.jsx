import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <Container>
      <Box sx={{ py: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Contactez-moi
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph align="center">
          N'hésitez pas à me contacter pour toute question ou opportunité
        </Typography>
        <ContactForm />
      </Box>
    </Container>
  );
}

export default Contact; 