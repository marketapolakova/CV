import React from "react";
import ActiveLink from "../active-link/ActiveLink"
import S from "./burger-menu.module.scss";

const MenuCz = () => {
  return (

        <div className={S.div} >
      <ul>
        <ActiveLink activeClassName={S.active} href="/cz/home">
        <li className={S.li}>
          
            <a>Domů</a>
         
        </li>
         </ActiveLink>


        <ActiveLink activeClassName={S.active} href="/cz/about">
        <li className={S.li}>
          
            <a>O mně</a>
          
        </li>
</ActiveLink>


        
        <ActiveLink activeClassName={S.active} href="/cz/resume">
        <li className={S.li}>
          
            <a>Resume</a>
          
        </li>
</ActiveLink>


       <ActiveLink activeClassName={S.active} href="/cz/skills">
           <li className={S.li}>
          
            <a>Dovednosti</a>
         
        </li>
         </ActiveLink>

        <ActiveLink activeClassName={S.active} href="/cz/portfolio">
        <li className={S.li}>
          
            <a className={S.a}>Portfolio</a>
        </li>
</ActiveLink>

<ActiveLink activeClassName={S.active} href="/cz/contact">
        <li className={S.li}   >
          
            <a>Kontakt</a>
          
        </li>
        </ActiveLink>
      </ul>
    </div>
  
    
  );
}

export default MenuCz;