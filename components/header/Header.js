import React from 'react';
import Navbar from "../navbar/Navbar"
import NavbarCz from "../navbarCz/NavbarCz"
import S from "./Header.module.scss"

function Header({language}) {
    return (
        <div className={S.div}>
            <h1 className={S.h1}>Markéta Poláková</h1>
            <p className={S.p}>{language==="cz"?"studentka softwarového vývoje":"software engineer student"}</p>
            {language==="cz"?<NavbarCz/>:<Navbar/>}
          
        </div>
    )
}

export default Header
