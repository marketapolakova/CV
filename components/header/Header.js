import React from 'react';
import Navbar from "../navbar/Navbar"
import S from "./Header.module.scss"

function Header() {
    return (
        <div className={S.div}>
            <h1 className={S.h1}>Markéta Poláková</h1>
            <p className={S.p}>future software engineer student</p>
            <Navbar/>
          
        </div>
    )
}

export default Header
