import React, {
  useState,
  useCallback
} from 'react';
import Link from 'next/link';
import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Burger
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import {
  BrandTwitter,
  BrandYoutube,
  BrandInstagram
} from 'tabler-icons-react';
import Brand from '../../atoms/Brand/Brand';

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: 'black',
    borderColor: 'transparent',
  },
  innerWrapper: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    color: 'white',
    width: 260,
    gap: 20,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  social: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 100,
    height: '100%',

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      marginLeft: 'auto',
    },
  },

  burger: {
    color: 'white',
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
    },
  },
}));

export default function HeaderMiddle() {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes, cx } = useStyles();

  const links = [
    {
      link: '/',
      label: 'Home'
    },
    {
      link: '/content',
      label: 'Content',
    },
    {
      link: '/about',
      label: 'About'
    },
  ]

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
    >
      {link.label}
    </Link>
  ));

  const onClick = useCallback(() =>{
    console.log('Burger Clicked!')
  }, [])

  return (
    <Header
      className={classes.wrapper}
      height={70}
      mb={120}
    >
      <Container className={classes.innerWrapper}>
        <Burger
          opened={opened}
          onClick={onClick}
          size="sm"
          className={classes.burger}
        />
        <Group
          className={classes.links}
          spacing={5}
        >
          {items}
        </Group>

        <Brand />

        <Group
          spacing={0}
          className={classes.social}
          position="right"
          noWrap
        >
          <a href=''>
            <BrandTwitter
              color="white"
              size={18}
            />
          </a>
          <a href=''>
            <BrandYoutube
              color="white"
              size={18}
            />
          </a>
          <a href=''>
            <BrandInstagram
              color="white"
              size={18}
            />
          </a>
        </Group>
      </Container>
    </Header>
  );
}
