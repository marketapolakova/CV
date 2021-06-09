import React from "react";
import ActiveLink from "../active-link/ActiveLink"
import S from "./burger-menu.module.scss";

const Menu = () => {
  return (
    <div className={S.div} >
      <ul>
        <ActiveLink activeClassName={S.active} href="/">
        <li className={S.li}>
          
            <a>Home</a>
         
        </li>
         </ActiveLink>


        <ActiveLink activeClassName={S.active} href="/about">
        <li className={S.li}>
          
            <a>About me</a>
          
        </li>
</ActiveLink>


        
        <ActiveLink activeClassName={S.active} href="/resume">
        <li className={S.li}>
          
            <a>Resume</a>
          
        </li>
</ActiveLink>


       <ActiveLink activeClassName={S.active} href="/skills">
           <li className={S.li}>
          
            <a>Skills</a>
         
        </li>
         </ActiveLink>

        <ActiveLink activeClassName={S.active} href="/portfolio">
        <li className={S.li}>
          
            <a className={S.a}>Portfolio</a>
        </li>
</ActiveLink>

<ActiveLink activeClassName={S.active} href="/contact">
        <li className={S.li}   >
          
            <a>Contact</a>
          
        </li>
        </ActiveLink>
      </ul>
    </div>
  );
}

export default Menu;