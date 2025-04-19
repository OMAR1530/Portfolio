import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, TextField, Button, Typography } from '@mui/material';

function ContactForm() {
  const [state, handleSubmit] = useForm("xanegpgp");
  
  if (state.succeeded) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h5" color="success.main">
          Merci pour votre message ! Je vous répondrai dès que possible.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        mx: 'auto',
        mt: 4,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}
    >
      <TextField
        fullWidth
        id="nom"
        name="nom"
        label="Nom"
        variant="outlined"
        required
      />
      <ValidationError 
        prefix="Nom" 
        field="nom"
        errors={state.errors}
      />

      <TextField
        fullWidth
        id="prenom"
        name="prenom"
        label="Prénom"
        variant="outlined"
        required
      />
      <ValidationError 
        prefix="Prénom" 
        field="prenom"
        errors={state.errors}
      />

      <TextField
        fullWidth
        id="email"
        type="email"
        name="email"
        label="Adresse Email"
        variant="outlined"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <TextField
        fullWidth
        id="objet"
        name="objet"
        label="Objet du message"
        variant="outlined"
        required
      />
      <ValidationError 
        prefix="Objet" 
        field="objet"
        errors={state.errors}
      />
      
      <TextField
        fullWidth
        id="message"
        name="message"
        label="Message"
        multiline
        rows={4}
        variant="outlined"
        required
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={state.submitting}
        sx={{ mt: 2 }}
      >
        Envoyer
      </Button>
    </Box>
  );
}

export default ContactForm; 