import React from "react";
import ActiveLink from "../active-link/ActiveLink"
import Link from "next/link";
import BurgerMenu from "../burger-menu/BurgerMenu"

import S from "./navbar.module.scss";

function Navbar() {
  return (
    <div>
      <BurgerMenu/>
      <div className={S.div}>
      <ul>
      <Link href= "/cz/home">
        <li className={S.li}>
          
            <a><div className={S.img}></div></a>
         
        </li>
         </Link>
        <ActiveLink activeClassName={S.active} href= "/">
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
        <li className={S.li}>
          
            <a>Contact</a>
           
        </li>
        </ActiveLink>
        <li className={S.li}>
     <div className={S.footer}>
     <p className={S.p}>Made in Next.js</p>
     </div>
      
    
      
         
      </li>
        
      </ul>
     
    </div>
  
    </div>
    
  );
}

export default Navbar;
