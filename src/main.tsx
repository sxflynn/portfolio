import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App.tsx";
import About from "./pages/About/About.tsx";
import Home from "./pages/Home/Home.tsx";
import Projects from "./pages/Projects/Projects.tsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
       <Route index element={<Home />} /> {/* Add Home component as the index route */}
      <Route path="projects" element={<Projects />} />
      <Route path="about" element={<About />} />
      {/* Add more nested routes if needed */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
