import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./routes/routes";
import { RouterProvider } from "react-router/dom";

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
