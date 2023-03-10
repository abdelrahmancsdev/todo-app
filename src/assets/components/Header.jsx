import React, { useContext } from "react";
import s from "../styles/components/header.module.scss";
import { HeaderContext } from "../../App";

function Header() {
  const { theme, setTheme } = useContext(HeaderContext);
  const themeToggler = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.theme = "light";
    } else if (theme === "light") {
      setTheme("dark");
      localStorage.theme = "dark";
    }
  };
  return (
    <header id={s.appHeader}>
      <h1 id={s.appName}>Todo</h1>
      <button
        type="button"
        id={s.modeToggler}
        className={s[theme]}
        onClick={themeToggler}
      />
    </header>
  );
}

export default Header;
