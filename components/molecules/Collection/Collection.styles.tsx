import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    top: '63',
    left: '0',
    backgroundColor: 'black'
  },

  left: {
    overflow: 'hidden',
    width: 'max-content',
  },

  right: {
    display: 'flex',
    alignItems: 'flex-start',
    overflow: 'hidden',
    width: 'max-content',
  },

}));
