import "@mantine/core/styles.css";
import { MantineProvider } from '@mantine/core';
import { theme } from "./theme";
import { Header } from './components/Header/Header';

export default function App() {
  return <MantineProvider theme={theme}>
      <Header/>

      
      {/* ROUTER VIEW? */}
      {/* use a customized hero header for each project description */}

      {/* FOOTER */}


      </MantineProvider>
}
