import { useState } from 'react';
import { Container, Group, Burger, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import classes from './Header.module.css';

const links = [
  { link: '/projects', label: 'Projects' },
  { link: '/about', label: 'About' },
  { link: 'https://www.linkedin.com/in/sxflynn', label: 'LinkedIn' },
  { link: 'https://github.com/sxflynn', label: 'GitHub' },
];

export function Header() {
  const location = useLocation();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(location.pathname);

  const items = links.map((link) => {
    const isExternalLink = link.link.startsWith('http');
    return isExternalLink ? (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        rel="noopener noreferrer"
      >
        {link.label}
      </a>
    ) : (
      <Link
        key={link.label}
        to={link.link}
        className={classes.link}
        data-active={active === link.link || undefined}
        onClick={() => setActive(link.link)}
      >
        {link.label}
      </Link>
    );
  });


  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
      <Link 
      to="/" 
      style={{ 
        textDecoration: 'none', 
        color: 'inherit'
        }}
      onClick={() => setActive("")}
        >
          <Text size="xl">Stephen Flynn</Text>
          </Link>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}