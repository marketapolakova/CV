import React from "react";
import Navbar from "../navbar/Navbar"
import NavbarCz from "../navbarCz/NavbarCz"
import S from "./about.module.scss";

function AboutMe({language}) {
  return (
    <div>
      <div className={S.div}>
      {language==="cz"?<NavbarCz/>:<Navbar/>}
        <div className={S.box}>
            <h1 className={S.h1}>{language==="cz"?"O mně":"About me"}</h1>
        <div className={S.container}>
          <div className={S.img}></div>
          <p className={S.item}>
          {language==="cz"?"Vystudovala jsem cestovní ruch, ale v období pandemie jsem našla zálibu v IT odvětví. Z tohoto důvodu, jsem se rozhodla změnit zaměření a zahájit studium oboru softwarový vývoj na vysoké škole. Do této doby jsem absolvovala kurz se zaměřením na kompletní webový vývoj. Také se zajímám o UI design a dokončila jsem kurz zaměřený na UI/UX v Adobe XD.":" I was studying travel tourism but though pandemic I found out my passion for IT industry so I decided to start studying software development at Unicorn University. Until now I have completed a full stack web development course. Also I am interested in UI design. I have finished and obtained a certificate related to UI/UX in Adobe XD."}           
          </p>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default AboutMe;
