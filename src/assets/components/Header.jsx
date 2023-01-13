import React from "react";
import s from "../styles/components/header.module.scss";

function Header() {
  return (
    <header id={s.appHeader}>
      <h1 className={s.appName}>Todo</h1>
      <button type="button" className={s.modeToggler}>
        Dark
      </button>
    </header>
  );
}

export default Header;
