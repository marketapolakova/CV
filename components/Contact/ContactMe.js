import React from 'react'
import Navbar from "../navbar/Navbar";
import S from "./contact.module.scss";
function ContactMe() {
    return (
        <div>
        <div className={S.div}>
        <Navbar />
        <div className={S.box}>
        <h1 className={S.h1}>Contact</h1>
        </div>
      </div>
        </div>
    )
}

export default ContactMe