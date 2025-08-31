import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../pages/Home";
import SignUpForm from "../components/SignUpForm";
import SignInPage from "../pages/SignInPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import WelcomePage from "../pages/Welcome";
import AuthCallback from "../components/AuthCallback";
import ProfilePage from "../pages/ProfilePage";
import CheckEmailPage from "../pages/CheckEmailPage";
import SendPassResetPage from "../pages/SendPassResetPage";

const router = createBrowserRouter([
  {
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "auth",
        children: [
          {
            path: "signup",
            children: [
              { index: true, Component: SignUpForm },
              { path: "authcallback", Component: AuthCallback },
              { path: "authcheckemail", Component: CheckEmailPage },
              { path: "welcome", Component: WelcomePage },
            ],
          },
          { path: "signin", Component: SignInPage },
          { path: "sendresetpassmail", Component: SendPassResetPage },
          { path: "resetpassword", Component: ResetPasswordPage },
        ],
      },
      { path: "profile", Component: ProfilePage },
    ],
  },
]);

export default router;
