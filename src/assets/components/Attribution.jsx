import React from "react";
import s from "../styles/components/attribution.module.scss";

function Attribution() {
  return (
    <footer id={s.attribution}>
      <div className={s.content}>
        <span>
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            rel="noreferrer"
            target="_blank"
          >
            Frontend Mentor
          </a>
        </span>
        <span>
          Coded by
          <a href="https://github.com/abdelrahmancsdev">Abdelrahman Nasser</a>
        </span>
      </div>
    </footer>
  );
}

export default Attribution;
