import React from 'react';
import { Container, Typography, Box, Grid, Paper, LinearProgress } from '@mui/material';

const Competences = () => {
  // Exemple de données de compétences
  const competences = [
    {
      categorie: 'Frontend',
      skills: [
        { nom: 'HTML/CSS', niveau: 90 },
        { nom: 'JavaScript', niveau: 85 },
        { nom: 'React', niveau: 80 },
        { nom: 'Material-UI', niveau: 75 }
      ]
    },
    {
      categorie: 'Backend',
      skills: [
        { nom: 'Node.js', niveau: 80 },
        { nom: 'Python', niveau: 75 },
        { nom: 'SQL', niveau: 85 },
        { nom: 'API REST', niveau: 80 }
      ]
    },
    {
      categorie: 'Outils',
      skills: [
        { nom: 'Git', niveau: 85 },
        { nom: 'VS Code', niveau: 90 },
        { nom: 'Docker', niveau: 70 },
        { nom: 'Linux', niveau: 75 }
      ]
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Mes Compétences
        </Typography>
        <Grid container spacing={4}>
          {competences.map((categorie, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  {categorie.categorie}
                </Typography>
                {categorie.skills.map((skill, skillIndex) => (
                  <Box key={skillIndex} sx={{ mb: 2 }}>
                    <Typography variant="body1" gutterBottom>
                      {skill.nom}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={skill.niveau}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: 'grey.200',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: 'primary.main'
                        }
                      }}
                    />
                  </Box>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Competences; 