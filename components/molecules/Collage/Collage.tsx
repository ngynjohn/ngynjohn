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
    <Container
      className={classes.container}
      fluid
    >
      <Group
        style={{
          overflow: 'hidden',
          margin: '0',
          padding: '0',
        }}
        noWrap
      >
        <Image
          src="/vertical.png"
          alt="vertical"
          width={463}
          height={820}
        />
        <Stack
          className={classes.stack}
        >
          <Group
            style={{
              overflow: 'hidden',
              margin: '0',
              padding: '0',
            }}
            noWrap
          >
            <Image
              src="/work.png"
              alt="work"
              width={451}
              height={432}
            />
            <Image
              className={classes.landscape}
              src="/landscape.png"
              alt="landscape"
              width={768}
              height={432}
            />
          </Group>
          <Image
            className={classes.banner}
            src="/banner.png"
            alt="banner"
            width={1237}
            height={367}
          />
        </Stack>
      </Group>
    </Container>
  );
}