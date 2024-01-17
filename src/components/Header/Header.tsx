import { useEffect, useState } from 'react';
import { Container, Menu, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IconExternalLink } from '@tabler/icons-react';
import classes from './Header.module.css';
import { ColorSchemeButton } from '../ColorSchemeButton/ColorSchemeButton';
import { FullNameHeader } from '../FullNameHeader/FullNameHeader';

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

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

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
        target="_blank"
      >
        {link.label} <IconExternalLink size={14} />
      </a>
    ) : (
      <NavLink
        key={link.label}
        to={link.link}
        className={classes.link}
        data-active={active === link.link || undefined}
        onClick={() => setActive(link.link)}
      >
        {link.label}
      </NavLink>
    );
  });


  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
       <FullNameHeader setActive={setActive} />

        {/* Top Items */}
        <Group gap={5} visibleFrom="xs">
          {topItems}
          <ColorSchemeButton/>
        </Group>
        {/* Menu Items */}
        <Group hiddenFrom="xs">
        <ColorSchemeButton/>
          <Menu opened={opened} onOpen={toggle} onClose={toggle}>
            <Menu.Target>
              <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="md" />
            </Menu.Target>
            <Menu.Dropdown>
              {dropdownMenuItems}
            </Menu.Dropdown>
          </Menu>
        </Group>
        
      </Container>
    </header>
  );
}