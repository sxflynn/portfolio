import { useState } from 'react';
import { Container, Menu, Group, Burger, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import { IconExternalLink } from '@tabler/icons-react';
import classes from './Header.module.css';
import { ColorSchemeButton } from '../ColorSchemeButton/ColorSchemeButton';

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

  const dropdownMenuItems = links.map((link) => {
    const isExternalLink = link.link.startsWith('http');
    return isExternalLink ? (
      <Menu.Item component="a"
       rightSection={<IconExternalLink/>}
       href={link.link} key={link.label} target="_blank" rel="noopener noreferrer">
        {link.label}
      </Menu.Item>
    ) : (
      <Menu.Item component={Link} to={link.link} key={link.label} onClick={() => setActive(link.link)}>
        {link.label}
      </Menu.Item>
    );
  });

  const topItems = links.map((link) => {
    const isExternalLink = link.link.startsWith('http');
    return isExternalLink ? (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        rel="noopener noreferrer"
      >
        {link.label} <IconExternalLink size={14} />
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


        {/* Top Items */}
        <Group gap={5} visibleFrom="xs">
        <ColorSchemeButton/>
          {topItems}
        </Group>

        {/* Menu Items */}
        <Menu opened={opened} onOpen={toggle} onClose={toggle}>
          <Menu.Target>
            <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          </Menu.Target>
          <Menu.Dropdown>
            {dropdownMenuItems}
          </Menu.Dropdown>
        </Menu>

      </Container>
    </header>
  );
}