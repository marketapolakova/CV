import React from 'react'
import Navbar from "../navbar/Navbar"
import AboutMe from "../about-me/AboutMe"
import S from "./box.module.scss"

function Box() {
    return (
        <div className={S.div}>
        <div className={S.box}>
            <AboutMe />
        </div>
        <Navbar/>
        </div>

    )
}

export default Box
