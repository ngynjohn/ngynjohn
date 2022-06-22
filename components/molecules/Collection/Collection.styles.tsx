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
  },

  talent: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '4em',
    marginLeft: '12em',
    fontSize: '3em',
    color: 'white',
  },

  motivate: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '10em',
    marginLeft: '2em',
    fontSize: '4em',
    color: 'white',
  },

  transcend: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '5.2em',
    marginLeft: '2em',
    fontSize: '8em',
    fontWeight: 'bolder',
    color: 'black',
  },

  whiteSquare: {
    maxHeight: '17em',
    marginTop: '32em',
    maxWidth: '70em',
    backgroundColor: 'white',
  },

  videoDefault: {
    display: 'flex',
    overflow: 'hidden',
    width: 'max-content',
  },

  videoOne: {
    position: 'absolute',
    left: '20em',
  },

  videoTwo: {
    position: 'absolute',
    top: '25em',
    right: '25em',
  },

  videoThree: {
    marginLeft: '25em',
  },

  videoFour: {

  },
}));
