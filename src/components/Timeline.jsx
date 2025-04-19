import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

const TimelineComponent = () => {
  const events = [
    {
      year: '2020',
      title: 'Baccalauréat Scientifique',
      description: 'Obtention du baccalauréat scientifique'
    },
    {
      year: '2021',
      title: '1ère année Licence Biologie',
      description: 'Première année de licence en biologie'
    },
    {
      year: '2022-2023',
      title: 'École d\'Assistant Vétérinaire',
      description: 'Formation en tant qu\'assistant vétérinaire'
    },
    {
      year: '2023-Présent',
      title: 'Étudiant en Informatique',
      description: 'Formation en informatique à Ynov Nantes'
    }
  ];

  return (
    <Box sx={{ 
      maxWidth: 800, 
      mx: 'auto', 
      mt: 4,
      mb: 8,
      px: 2
    }}>
      <Timeline position="alternate">
        {events.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index !== events.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'transform 0.2s ease-in-out'
                  }
                }}
              >
                <Typography variant="h6" component="h2" color="primary">
                  {event.year}
                </Typography>
                <Typography variant="h6" component="h3" sx={{ mt: 1 }}>
                  {event.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                  {event.description}
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default TimelineComponent; 