import {
  Text,
  createStyles,
} from '@mantine/core';

const useStyles = createStyles(() => ({
  text: {
    height: '100%',
    display: 'flex',
    color: 'white',
    fontFamily: 'tgHaidoGrotesk, sans-serif',
    fontSize: '2em',
  },
}));

export default function Brand() {
  const { classes } = useStyles();

  return (
    <Text className={classes.text}>
      ngynjohn
    </Text>
  );
}
