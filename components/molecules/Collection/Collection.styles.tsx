import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    top: '63',
    left: '0',
    backgroundColor: 'black'
  },

  inspire: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '7em',
    fontSize: '10em',
    fontWeight: 'bold',
    color: 'white',
  },

  create: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '3em',
    fontSize: '5em',
    color: 'white',
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: '4em',
      marginRight: '1em',
    }
  },

  talent: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '10em',
    marginLeft: '5em',
    fontSize: '3em',
    color: 'white',
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: '2em',
      marginLeft: '1em',
    }
  },

  motivate: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '10em',
    marginLeft: '17em',
    fontSize: '4em',
    color: 'white',
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: '3em',
      marginLeft: '15em',
    }
  },

  transcend: {
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '5.2em',
    marginLeft: '.75em',
    fontSize: '8em',
    fontWeight: 'bolder',
    color: 'black',
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: '4em',
      marginLeft: '2.5em',
    }
  },

  whiteSquare: {
    overflow: 'hidden',
    maxHeight: '17em',
    marginTop: '32em',
    maxWidth: '60em',
    backgroundColor: 'white',
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      maxHeight: '10em',
      maxWidth: '40em',
      marginTop: '15em',
    }
  },

  videoDefault: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  videoOne: {
    position: 'absolute',
    top: '20em',
  },

  videoTwo: {
    position: 'absolute',
    top: '25em',
    right: '25em',
  },

  alignCenter: {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    width: 'max-content',
  },

  videoLeft: {
    position: 'absolute',
    left: '20em',
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      left: 0,
    },
  },

  videoRight: {
    position: 'absolute',
    right: '20em',
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      right: 0,
    },
  },
}));
