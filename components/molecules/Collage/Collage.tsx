import {
  Text,
  Group,
  Stack,
  Container,
} from '@mantine/core';
import Image from 'next/image';
import { useStyles } from './Collage.styles';

export default function Collage() {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.vertical} />
      <Stack className={classes.stack}>
        <div className={classes.landscape} />
        <Group className={classes.grouped} noWrap>
          <div className={classes.work} />
          <div className={classes.mirror} />
        </Group>
      </Stack>
    </div>
  );
}