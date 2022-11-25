import React from "react";
import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="App-navbar">
      <Logo />
      <BurgerMenu />
    </div>
  );
};

export default Navbar;
