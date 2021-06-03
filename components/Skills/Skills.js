import React from 'react'
import Navbar from "../navbar/Navbar";
import S from "./skills.module.scss";
function Skils() {
    return (
        <div>
        <div className={S.div}>
        <Navbar />
        <div className={S.box}>
        <h1 className={S.h1}>Skills</h1>
        </div>
      </div>
        </div>
    )
}

export default Skils
