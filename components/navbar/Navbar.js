import React from "react";
import Link from "next/link";
import ActiveLink from "../active-link/ActiveLink"
import S from "./navbar.module.scss";

function Navbar() {
  return (
    <div className={S.div}>
      <ul>
        <li className={S.li} actviceClassName={S}>
          <ActiveLink href="/">
            <a>Home</a>
          </ActiveLink>
        </li>
        <li className={S.li}>
          <ActiveLink href="/about">
            <a>About me</a>
          </ActiveLink>
        </li>
        <li className={S.li}>
          <Link href="/resume">
            <a>Resume</a>
          </Link>
        </li>
        <li className={S.li}>
          <Link href="/skills">
            <a>Skills</a>
          </Link>
        </li>
        <li className={S.li}>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </li>
        <li className={S.li}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
