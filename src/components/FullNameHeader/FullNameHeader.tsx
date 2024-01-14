import { Text, useMantineTheme } from '@mantine/core';
import { NavLink } from 'react-router-dom';


export function FullNameHeader({active, setActive}) {
  const theme = useMantineTheme();




  return (
    <NavLink
          to="/"
          onClick={()=>setActive("")}
          style={{
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <Text size="lg">Stephen X. Flynn</Text>
        </NavLink>
  );
}