import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';

const Projets = () => {
  // Exemple de données de projets
  const projets = [
    {
      id: 1,
      titre: 'Projet 1',
      description: 'Description du projet 1',
      image: 'https://via.placeholder.com/300x200',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      titre: 'Projet 2',
      description: 'Description du projet 2',
      image: 'https://via.placeholder.com/300x200',
      technologies: ['Python', 'Django', 'PostgreSQL']
    },
    // Ajoutez d'autres projets ici
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Mes Projets
        </Typography>
        <Grid container spacing={4}>
          {projets.map((projet) => (
            <Grid item key={projet.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={projet.image}
                  alt={projet.titre}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {projet.titre}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {projet.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {projet.technologies.map((tech, index) => (
                      <Typography
                        key={index}
                        variant="caption"
                        sx={{
                          mr: 1,
                          p: 0.5,
                          bgcolor: 'primary.light',
                          color: 'white',
                          borderRadius: 1
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projets; 