import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  right: {
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  middle: {
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  left: {
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '5em',
    marginRight: '5em',
    width: 'max-content',
  },
}));
