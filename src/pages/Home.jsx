import React from 'react';
import { Box, Typography, Container, Button, Grid, Paper, LinearProgress, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import TimelineComponent from '../components/Timeline';
import { 
  aboutSection, 
  container, 
  contentWrapper,
  profileImageWrapper,
  profileImage,
  textContent,
  title, 
  paragraph, 
  contactButton 
} from '../styles/aboutStyles';

const Home = () => {
  // Données des projets
  const projets = [
    {
      id: 1,
      titre: 'Cafe Pachamama',
      description: 'Création d\'un site web accessible',
      image: '/Cafe pachamama.png',
      technologies: ['HTML/CSS', 'Java Script', 'Figma']
    },
    {
      id: 2,
      titre: 'Etude Database',
      description: 'Etude de la base de données pour un projet de machine learning',
      image: '/correlation_matrix.png',
      technologies: ['Python', 'Pandas', 'Matplotlib']
    },
  ];

  return (
    <Box sx={{ bgcolor: '#1a1a1a' }}>
      {/* Section Hero */}
      <Box
        id="accueil"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Container maxWidth={false} sx={{ width: '90%' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '4.5rem', sm: '5.5rem', md: '6.5rem' },
                    fontWeight: 700,
                    color: '#fff',
                    mb: 2,
                  }}
                >
                  Quentin
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '4.5rem', sm: '5.5rem', md: '6.5rem' },
                    fontWeight: 700,
                    color: '#fff',
                    mb: 2,
                  }}
                >
                  GUILLAUME
                </Typography>
              </Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                  color: '#00FFD5',
                  mb: 4,
                }}
              >
                Étudiant en Data IA
              </Typography>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Section À propos */}
      <Box id="about" sx={aboutSection}>
        <Container maxWidth="lg">
          <Box sx={container}>
            <Box sx={contentWrapper}>
              <Box sx={profileImageWrapper}>
                <Box
                  component="img"
                  src="/MOI.png"
                  alt="Photo de profil"
                  sx={profileImage}
                />
              </Box>
              <Box sx={textContent}>
                <Typography variant="h2" sx={title}>
                  À propos de moi
                </Typography>
                <Typography variant="body1" sx={paragraph}>
                  Actuellement en 2ème année de Bachelor Informatique à Ynov Nantes, je recherche activement un stage et une alternance pour ma 3ème année. Passionné par l'IA et l'analyse de données, je souhaite mettre à profit mes compétences dans un environnement professionnel stimulant.
                </Typography>
                <Typography variant="body1" sx={paragraph}>
                  Mon parcours m'a permis de développer une solide expertise en programmation Python, en machine learning et en analyse de données. Je suis particulièrement intéressé par les applications concrètes de l'IA dans divers domaines, et je cherche une entreprise où je pourrai contribuer à des projets innovants tout en continuant à apprendre.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="#contact"
                  sx={contactButton}
                >
                  Me contacter
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Section Timeline */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: 'text.primary',
              fontWeight: 'bold'
            }}
          >
            Mon Parcours
          </Typography>
          <TimelineComponent />
        </Container>
      </Box>

      {/* Section Projets */}
      <Box
        id="work"
        component="section"
        sx={{
          minHeight: '100vh',
          py: 12,
          bgcolor: 'background.paper',
          borderRadius: "20px",
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth={false} sx={{ width: '90%', maxWidth: '900px' }}>
          <Typography 
            variant="h2" 
            component="h2" 
            align="center"
            gutterBottom 
            sx={{ 
              color: 'primary.main',
              fontSize: { xs: '3rem', md: '4rem' },
              mb: 8
            }}
          >
            Mes Projets
          </Typography>
          <Grid container spacing={8} direction="column" alignItems="center">
            {projets.map((projet) => (
              <Grid item key={projet.id} xs={12} sx={{ width: '100%' }}>
                <Box
                  sx={{
                    width: '100%',
                    height: '400px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    '&:hover .overlay': {
                      opacity: 1,
                      transform: 'translateY(0)',
                    },
                    '&:hover .image': {
                      transform: 'scale(1.1)',
                    }
                  }}
                >
                  <CardMedia
                    className="image"
                    component="img"
                    height="100%"
                    image={projet.image}
                    alt={projet.titre}
                    sx={{
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      transition: 'transform 0.5s ease-in-out',
                    }}
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      bgcolor: 'rgba(0, 0, 0, 0.8)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      p: 4,
                      opacity: 0,
                      transform: 'translateY(20px)',
                      transition: 'all 0.5s ease-in-out',
                    }}
                  >
                    <Typography 
                      variant="h4" 
                      component="div"
                      sx={{ 
                        color: 'white',
                        mb: 3,
                        textAlign: 'center',
                        fontWeight: 'bold'
                      }}
                    >
                      {projet.titre}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'white',
                        mb: 4,
                        textAlign: 'center',
                        maxWidth: '600px'
                      }}
                    >
                      {projet.description}
                    </Typography>
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: 1,
                        justifyContent: 'center'
                      }}
                    >
                      {projet.technologies.map((tech, index) => (
                        <Typography
                          key={index}
                          variant="caption"
                          sx={{
                            p: 1.5,
                            bgcolor: 'primary.main',
                            color: 'background.default',
                            borderRadius: 2,
                            fontSize: '1rem',
                            fontWeight: 'medium',
                            transition: 'transform 0.2s',
                            '&:hover': {
                              transform: 'scale(1.1)',
                            }
                          }}
                        >
                          {tech}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 