import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    height: '100vh',
    width: '91vw',
    margin: '60px',
    padding: '0',
    paddingTop: '70px',
    gap: '40px',
     [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      width: '89vw',
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '80vw',
      height: 'max-content',
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      width: '100vw',
      justifyContent: 'center',
      margin: 0,
    }
  },

  vertical: {
    background: 'url(/vertical.png)',
    backgroundPosition: 'center',
    width: 463,
    height: 820,
    cursor: 'pointer',
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      width: 420,
      height: 700,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      width: 463,
      height: 820,
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      width: 400,
      height: 650,
    },
  },

  stack: {
    overflow: 'hidden',
    gap: '40px',
    padding: 0,
    margin: 0,
  },

  landscape: {
    background: 'url(/landscape.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: 768,
    height: 380,
    cursor: 'pointer',
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      width: 570,
      height: 350,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      width: 768,
      height: 380,
    }
  },

  grouped: {
    gap: '40px',
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      flexDirection: 'column',
    }
  },

  work: {
    background: 'url(/work.png)',
    backgroundPosition: 'center',
    width: 400,
    height: 400,
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      width: 300,
      height: 300,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      width: 400,
      height: 400,
    }
  },

  mirror: {
    background: 'url(/undefinedNew.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: 330,
    height: 400,
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      width: 230,
      height: 300,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      width: 330,
      height: 400,
    }
  },


}));