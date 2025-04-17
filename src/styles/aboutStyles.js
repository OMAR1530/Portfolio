export const aboutSection = {
  minHeight: '70vh',
  py: 6,
  display: 'flex',
  alignItems: 'center',
  bgcolor: 'background.paper',
  borderRadius: "20px",
  margin: '2rem 0',
};

export const container = {
  width: '90%',
  maxWidth: '1200px'
};

export const contentWrapper = {
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  '@media (max-width: 900px)': {
    flexDirection: 'column',
    textAlign: 'center',
  }
};

export const profileImageWrapper = {
  flexShrink: 0,
  width: '300px',
  height: '300px',
  '@media (max-width: 900px)': {
    width: '250px',
    height: '250px',
  }
};

export const profileImage = {
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  objectFit: 'cover',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  }
};

export const textContent = {
  flex: 1,
  '@media (max-width: 900px)': {
    textAlign: 'center',
  }
};

export const title = {
  color: 'primary.main',
  fontSize: { xs: '3rem', md: '4rem' },
  mb: 4
};

export const paragraph = {
  color: 'text.primary',
  fontSize: '1.1rem',
  lineHeight: 1.8,
  mb: 3
};

export const contactButton = {
  borderRadius: '30px',
  px: 4,
  py: 1.5,
  fontSize: '1.1rem',
  '&:hover': {
    transform: 'translateY(-3px)',
    transition: 'transform 0.3s ease-in-out',
  },
}; 