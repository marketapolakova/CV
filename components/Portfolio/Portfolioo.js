import React from 'react'
import Navbar from "../navbar/Navbar";
import S from "./portfolio.module.scss";
function Portfolioo() {
    return (
        <div>
        <div className={S.div}>
        <Navbar />
        <div className={S.box}>
        <h1 className={S.h1}>Portfolio</h1>
        </div>
      </div>
        </div>
    )
}

export default Portfolioo