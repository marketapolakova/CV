import React from 'react'

import S from "./about.module.scss"

function AboutMe() {
    return (
        <div>
           <h1 className={S.h1}>About me</h1>
           <div className={S.container}>
           <div className={S.img}></div>
               <p className={S.item}>I was studying travel tourism but though pandemic I found out my
                passion for IT industry. In September I am going to start my
                journey as a software engineer at university. Until now I have
                completed a full stack web development course. Also I am
                interested in UI design. I have finished and obtained a
                certificate related to UI/UX in Adobe XD.</p>

           </div>
           
           
        </div>
    )
}

export default AboutMe
