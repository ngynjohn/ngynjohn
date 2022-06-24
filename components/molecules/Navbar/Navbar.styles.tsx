import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    width: '100vw',
    height: '63px',
    paddingLeft: '2em',
    paddingRight: '2em',
    zIndex: 1,
    [theme.fn.smallerThan('md')]: {
      justifyContent: 'flex-start',
      paddingLeft: '0',
      paddingRight: '0',
    },
  },

  scrolling: {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    backgroundColor: 'black',
    borderColor: 'transparent',
    width: '100vw',
    height: '63px',
    paddingLeft: '2em',
    paddingRight: '2em',
    zIndex: 1,
    [theme.fn.smallerThan('md')]: {
      justifyContent: 'flex-start',
      paddingLeft: '0',
      paddingRight: '0',
    },
  },

  links: {
    display: 'flex',
    flex: 1,
    color: 'white',
    gap: 20,
    paddingLeft: '4px',
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  brand: {
    width: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    [theme.fn.smallerThan('md')]: {
      justifyContent: 'flex-start',
    }
  },

  social: {
    flex: 1,
    [theme.fn.smallerThan('md')]: {
      display: 'flex',
      marginRight: '25px'
    },
  },

  burger: {
    display: 'flex',
    alignItems: 'center',
    margin: '0',
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.lg,
    textDecoration: 'none',
    color: 'white',
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: 'transparent',
      borderColor: 'white',
    },
  },
}));
