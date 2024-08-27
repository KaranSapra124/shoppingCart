import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <>
      <div>
        {navLinks.map((elem) => {
          return <Link to={elem.path}>{elem.title}</Link>;
        })}
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
