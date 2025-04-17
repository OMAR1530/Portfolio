import React from 'react';
import { Box, Typography, Container, Button, Grid, Paper, LinearProgress, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
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
      description: 'Création d\'un site web accès sur l\'accessibilité',
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
              textAlign: 'center',
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >
            <Typography
              component={motion.h1}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              variant="h1"
              sx={{
                fontWeight: 'bold',
                color: 'white',
                mb: 2,
                fontSize: { xs: '4rem', md: '5.5rem' },
                lineHeight: 1.1,
              }}
            >
              Hi,<br />
              I'm <span style={{ color: '#00ffd5' }}>Quentin</span>,<br />
              Ia / Data student
            </Typography>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1,
                y: [0, 10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              onClick={() => {
                document.getElementById('work').scrollIntoView({ 
                  behavior: 'smooth'
                });
              }}
              style={{
                cursor: 'pointer',
                marginTop: '2rem'
              }}
            >
              <Box
                component="svg"
                sx={{
                  width: '40px',
                  height: '40px',
                  fill: '#00ffd5',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    transition: 'transform 0.2s'
                  }
                }}
                viewBox="0 0 24 24"
              >
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
              </Box>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Section À propos */}
      <Box
        id="about"
        component="section"
        sx={aboutSection}
      >
        <Container maxWidth={false} sx={container}>
          <Box sx={contentWrapper}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                width: '400px',
                height: '500px',
                flexShrink: 0,
                '@media (max-width: 900px)': {
                  width: '90px',
                  height: '110px',
                  marginBottom: '2rem'
                }
              }}
            >
              <Box
                component="img"
                src="/MOI.png"
                alt="Photo de profil"
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '20px',
                  objectFit: 'cover',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  }
                }}
              />
            </motion.div>
            <Box sx={textContent}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h2"
                  component="h2"
                  gutterBottom
                  sx={title}
                >
                  À propos de moi
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={paragraph}
                >
                  Actuellement en 2ème année de Bachelor Informatique à Ynov Nantes, je recherche activement un stage et une alternance pour ma 3ème année. Passionné par l'IA et l'analyse de données, je souhaite mettre à profit mes compétences dans un environnement professionnel stimulant.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={paragraph}
                >
                  Mon parcours m'a permis de développer une solide expertise en programmation Python, en machine learning et en analyse de données. Je suis particulièrement intéressé par les applications concrètes de l'IA dans divers domaines, et je cherche une entreprise où je pourrai contribuer à des projets innovants tout en continuant à apprendre.
                </Typography>
                <Box sx={{ mt: 4 }}>
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
              </motion.div>
            </Box>
          </Box>
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

      {/* Section Compétences */}
      <Box
        id="skills"
        component="section"
        sx={{
          minHeight: '100vh',
          py: 12,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth={false} sx={{ width: '90%', maxWidth: '1200px' }}>
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
            Mes Compétences
          </Typography>
          <Grid container spacing={8} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Paper
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                elevation={3}
                sx={{ p: 6, bgcolor: 'background.paper', borderRadius: 4 }}
              >
                <Typography variant="h4" gutterBottom color="primary" sx={{ mb: 4 }}>
                  Frontend
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {[
                    { nom: 'HTML/CSS', niveau: 90 },
                    { nom: 'JavaScript', niveau: 85 },
                    { nom: 'React', niveau: 80 },
                    { nom: 'Material-UI', niveau: 75 }
                  ].map((skill, index) => (
                    <Box key={index}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="h6">{skill.nom}</Typography>
                        <Typography variant="h6" color="primary">{skill.niveau}%</Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.niveau}
                        sx={{
                          height: 10,
                          borderRadius: 5,
                          bgcolor: 'background.default',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 5,
                            bgcolor: 'primary.main'
                          }
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                elevation={3}
                sx={{ p: 6, bgcolor: 'background.paper', borderRadius: 4 }}
              >
                <Typography variant="h4" gutterBottom color="primary" sx={{ mb: 4 }}>
                  Backend
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {[
                    { nom: 'Node.js', niveau: 80 },
                    { nom: 'Python', niveau: 75 },
                    { nom: 'SQL', niveau: 85 },
                    { nom: 'API REST', niveau: 80 }
                  ].map((skill, index) => (
                    <Box key={index}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="h6">{skill.nom}</Typography>
                        <Typography variant="h6" color="primary">{skill.niveau}%</Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.niveau}
                        sx={{
                          height: 10,
                          borderRadius: 5,
                          bgcolor: 'background.default',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 5,
                            bgcolor: 'primary.main'
                          }
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section Contact */}
      <Box
        id="contact"
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
        <Container maxWidth={false} sx={{ width: '90%', maxWidth: '1200px' }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom 
              sx={{ 
                color: 'primary.main',
                fontSize: { xs: '3rem', md: '4rem' },
                mb: 4
              }}
            >
              Contact
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ color: 'text.primary', mb: 3 }}>
              Intéressé par mon travail ?
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', mb: 6 }}>
              N'hésitez pas à me contacter pour discuter de vos projets !
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="mailto:votre@email.com"
              sx={{
                borderRadius: '30px',
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              Envoyez-moi un email
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 