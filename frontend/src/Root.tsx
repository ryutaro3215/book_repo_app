import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
