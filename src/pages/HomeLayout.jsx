import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <section className="page">
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;
