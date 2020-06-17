import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import List from "./List";
import { Link } from "react-router-dom";
import Container from "./Container";
import classNames from "classnames";
import Hamburger from "./Hamburger";

const styleSheet = {
  mobile: {
    container: (active) =>
      classNames(
        "fixed",
        "top-0",
        "right-0",
        "bottom-0",
        "left-0",
        "bg-yellow-200",
        "z-10",
        "transform",
        "transition",
        "ease-in-expo",
        "duration-300",
        "p-4",
        active ? "translate-x-0" : "translate-x-full"
      ),
  },
  desktop: {
    container: classNames(
      "fixed",
      "top-0",
      "left-0",
      "right-0",
      "z-20",
      "lg:z-40",
      "md:z-40",
      "bg-yellow-200"
    ),
    innerContainer: classNames(
      "lg:grid flex",
      "justify-between",
      "grid-cols-2",
      "items-center",
      "p-4",
      "min-h-6"
    ),
  },
};

const MobileOnlyNavigation = ({ links, handleToggleMenu, toggleState }) => {
  return (
    <div className={styleSheet.mobile.container(toggleState)}>
      <List extendedClassNames="flex flex-col justify-center items-center h-full">
        {links.map((link) => (
          <li key={link.to} className="py-4" onClick={handleToggleMenu}>
            <Link to={link.to} className="p-4 cursor-pointer">
              {link.label}
            </Link>
          </li>
        ))}
      </List>
    </div>
  );
};

const StickyNavigation = ({ links, handleToggleMenu, toggleState }) => {
  return (
    <div className={styleSheet.desktop.container}>
      <Container extendedClassNames={styleSheet.desktop.innerContainer}>
        <Link to="/">
          <img
            src={logo}
            alt="logo NAF"
            title="Til startsiden"
            className="w-16 h-16"
            onClick={toggleState ? handleToggleMenu : null}
          />
        </Link>

        <List extendedClassNames="md:flex lg:flex justify-end hidden">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="p-4 cursor-pointer">
                {link.label}
              </Link>
            </li>
          ))}
        </List>
        <Hamburger handleToggleMenu={handleToggleMenu}/>
      </Container>
    </div>
  );
};

const Navigation = ({ links }) => {
  const [active, setActive] = useState(false);

  return (
    <nav className="">
      <StickyNavigation
        links={links}
        handleToggleMenu={() => setActive(!active)}
        toggleState={active}
      />
      <MobileOnlyNavigation
        links={links}
        handleToggleMenu={() => setActive(!active)}
        toggleState={active}
      />
    </nav>
  );
};

export default Navigation;
