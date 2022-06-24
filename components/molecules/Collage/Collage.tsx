import {
  useState,
  useCallback
} from 'react';
import {
  Text,
  Group,
  Stack,
  Container,
} from '@mantine/core';
import Image from 'next/image';
import {
  animated,
  useSpring
} from 'react-spring';
import { useStyles } from './Collage.styles';

export default function Collage() {
  const { classes } = useStyles();
  const [verticalHover, setVerticalHover] = useState(false);
  const [landscapeHover, setLandscapeHover] = useState(false);

  const handleVerticalHover = useCallback(() => {
    setVerticalHover(!verticalHover);
  }, [verticalHover]);
  const handleLandscapeHover = useCallback(() => {
    setLandscapeHover(!landscapeHover);
  }, [landscapeHover]);
  const verticalStyles = useSpring({
    to: {
      transform: verticalHover ? 'scale(1.05)' : 'scale(1)',
    }
  })
  const landscapeStyles = useSpring({
    to: {
      transform: landscapeHover ? 'scale(1.05)' : 'scale(1)',
    }
  })

  return (
    <div className={classes.container}>
      <animated.div
        className={classes.vertical}
        style={verticalStyles}
        onMouseEnter={handleVerticalHover}
        onMouseLeave={handleVerticalHover}
      />
      <Stack className={classes.stack}>
        <animated.div
          className={classes.landscape}
          style={landscapeStyles}
          onMouseEnter={handleLandscapeHover}
          onMouseLeave={handleLandscapeHover}
        />
        <Group className={classes.grouped} noWrap>
          <div className={classes.work} />
          <div className={classes.mirror} />
        </Group>
      </Stack>
    </div>
  );
}