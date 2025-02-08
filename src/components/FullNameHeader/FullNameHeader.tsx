import { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import { Text } from '@mantine/core';

type FullNameHeaderProps = {
  setActive: Dispatch<SetStateAction<string>>;
};

export function FullNameHeader({ setActive }: FullNameHeaderProps) {
  return (
    <NavLink
      to="/"
      onClick={() => setActive('')}
      style={{
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <Text size="lg">Stephen X. Flynn</Text>
    </NavLink>
  );
}
