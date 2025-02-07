import "@mantine/core/styles.css";
import "@mantine/code-highlight/styles.css";
import { MantineProvider, localStorageColorSchemeManager } from "@mantine/core";
import { theme } from "./theme";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme="auto"
      colorSchemeManager={localStorageColorSchemeManager({
        key: "portfolio-color-scheme",
      })}
    >
      <Header />
      <Outlet />
      {/* ADD FOOTER */}
    </MantineProvider>
  );
}
