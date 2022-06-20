import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
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
    [theme.fn.smallerThan('sm')]: {
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
    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
      paddingLeft: '0',
      paddingRight: '0',
    },
  },

  links: {
    color: 'white',
    gap: 20,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  brand: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      marginLeft: 'auto',
      marginRight: '25px'
    },
  },

  burger: {
    display: 'flex',
    alignItems: 'center',
    margin: '0',


    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
    },
  },
}));
