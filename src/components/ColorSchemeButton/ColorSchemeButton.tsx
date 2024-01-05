
import { Text, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

export function ColorSchemeButton() {
  const {colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  return (
   <>
  
      <ActionIcon 
      variant="default"
      size="lg"
      onClick={() => toggleColorScheme()}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <IconSun /> : <IconMoon />}
      </ActionIcon>
   </>
  )
}