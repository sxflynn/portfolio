import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { localStorageColorSchemeManager, MantineProvider } from '@mantine/core';
import { Header } from './components/Header/Header';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme="auto"
      colorSchemeManager={localStorageColorSchemeManager({
        key: 'portfolio-color-scheme',
      })}
    >
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      {/* ADD FOOTER */}
    </MantineProvider>
  );
}
