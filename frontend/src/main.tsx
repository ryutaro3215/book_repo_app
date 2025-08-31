import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./routes/routes";
import { RouterProvider } from "react-router/dom";
import { AuthProvider } from "./providers/AuthProvider";

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
