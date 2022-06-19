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
  BrandTiktok,
  BrandYoutube,
  BrandInstagram
} from 'tabler-icons-react';
import Brand from '../../atoms/Brand/Brand';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    backgroundColor: 'black',
    borderColor: 'transparent',
    width: '100vw',
    height: '70px',
    zIndex: 1,
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
    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      marginLeft: 'auto',
      marginRight: '45px'
    },
  },

  burger: {
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

export default function HeaderMiddle() {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

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
    <nav className={classes.wrapper}>
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

        >
        <Group
          spacing={10}
          className={classes.social}
          position="right"
          noWrap
        >
          <a href='https://www.tiktok.com/@ngynjohn?lang=en'>
            <BrandTiktok
              color="white"
              size={30}
            />
          </a>
          <a href='https://www.instagram.com/ngynjohn/'>
            <BrandInstagram
              color="white"
              size={30}
            />
          </a>
        </Group>
        </Group>
    </nav>
  );
}
