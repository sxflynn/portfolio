import "@mantine/core/styles.css";
import { MantineProvider } from '@mantine/core';
import { theme } from "./theme";
import { Header } from './components/Header/Header';
import { Outlet } from 'react-router-dom';

export default function App() {
  return <MantineProvider
    theme={theme}
    defaultColorScheme="auto"
  >
    <Header />
    <Outlet />
    {/* ADD FOOTER */}
  </MantineProvider>
}
