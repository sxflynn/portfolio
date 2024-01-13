
import { Button, Group, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun, IconX } from '@tabler/icons-react';

export function ColorSchemeButton() {
  const {colorScheme, toggleColorScheme, clearColorScheme } = useMantineColorScheme();
  const isAuto = colorScheme === 'auto';
  const isDark = colorScheme === 'dark';

// ClearButton UI inspired by how Josh Goldberg handles auto themes on his portfolio at https://www.joshuakgoldberg.com
  const ClearButton = () => (
    <Button
      variant="transparent"
      onClick={clearColorScheme}
      title="Reset to auto color scheme"
      pos="absolute"
      ml={50}
      mb={40}
      color='primary'
      >
        <IconX
        size={14}
        />
    </Button>
  );

  return (
   <>
  
      <Group>
        <Button 
        variant="default"
        onClick={() => toggleColorScheme()}
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? <IconSun /> : <IconMoon />}
        </Button>
        {!isAuto && <ClearButton />}
      </Group>

   </>
  )
}