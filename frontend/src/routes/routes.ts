import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../pages/Home";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";

const router = createBrowserRouter([
  {
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "signup", Component: SignUpPage },
      { path: "signin", Component: SignInPage },
      { path: "resetpassword", Component: ResetPasswordPage },
    ],
  },
]);

export default router;
