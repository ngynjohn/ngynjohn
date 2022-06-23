import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    height: '55em',
    margin: '60px',
    marginTop: '7em',
    padding: '0',
  },

  landscape: {
    margin: 0,
    padding: 0,
  },

  banner: {
    margin: 0,
    padding: 0,
  },

  stack: {
    overflow: 'hidden',
    padding: 0,
    margin: 0,
  },
}));