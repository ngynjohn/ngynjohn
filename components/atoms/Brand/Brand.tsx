import {
  Text,
  createStyles,
} from '@mantine/core';

const useStyles = createStyles(() => ({
  text: {
    display: 'flex',
    height: '100%',
    color: 'white',
    fontFamily: 'tgHaidoGrotesk, sans-serif',
    fontSize: '1.5em',
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
