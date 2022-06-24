import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import Link from 'next/link';
import {
  Header,
  Group,
  ActionIcon,
  Container,
  Burger
} from '@mantine/core';
import {
  useBooleanToggle,
  useWindowEvent
} from '@mantine/hooks';
import {
  BrandTiktok,
  BrandYoutube,
  BrandInstagram
} from 'tabler-icons-react';
import Hamburger from 'hamburger-react';
import Brand from '../../atoms/Brand/Brand';
import { useStyles } from './Navbar.styles';

interface NavbarProps {
  isScrolling: boolean;
  links: {
    link: string;
    label: string;
  }[];
}

export default function Navbar({ links, isScrolling }: NavbarProps) {
  const [isOpen, setOpen] = useBooleanToggle(false);
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

  const activeWindow = useCallback(() => {
    if (isOpen) {
      setActive(window.location.pathname);
    }
  }, [isOpen])

  return (
    <nav className={isScrolling ? classes.scrolling : classes.wrapper}>
      <Container className={classes.burger}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={20}
          duration={.5}
          direction="right"
          color='white'
        />
      </Container>
        <Group
          className={classes.links}
          spacing={5}
        >
          {items}
        </Group>

        <Group className={classes.brand}>
          <Brand />
        </Group>

        <Group
          spacing={10}
          className={classes.social}
          position="right"
          noWrap
        >
          <a href='https://www.tiktok.com/@ngynjohn?lang=en'>
            <BrandTiktok
              color="white"
              size={25}
            />
          </a>
          <a href='https://www.instagram.com/ngynjohn/'>
            <BrandInstagram
              color="white"
              size={25}
            />
          </a>
        </Group>
    </nav>
  );
}
