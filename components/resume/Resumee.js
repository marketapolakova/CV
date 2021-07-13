import React from "react";
import Navbar from "../navbar/Navbar";
import NavbarCz from "../navbarCz/NavbarCz"
import Timeline from "../timeline/Line";
import TimelineTwo from "../timeline/LineTwo";
import TimelineThree from "../timeline/LineThree";
import Link from "next/link";
import S from "./resume.module.scss";

function Resumee({language}) {
  return (
    <div>
      <div className={S.div}>
      {language==="cz"?<NavbarCz/>:<Navbar/>}
        <div className={S.box}>
          <h1 className={S.h1}>Resume</h1>

          <div className={S.container}>
            {" "}
            <div>
              <h2 className={S.h2}>{language==="cz"?"Vzdělání":"Education"}</h2>

              <div className={S.containerContent}>
                <Timeline />
                <p className={S.p}>
                {language==="cz"?"Škola ekonomiky a cestovního ruchu":"School of economics and tourism"}
                   <br />
                   {language==="cz"?"Obor:Ekonomika a cestoní ruch":"Study program: Economics and tourism"} <br />
                   {language==="cz"?"září 2015 - květen 2019":"September 2015 - May 2019"} <br />
                   {language==="cz"?"Zakončeno maturitou":"Maturita certification (SAT)"}
                </p>
                <div></div>
                <p className={S.p}>
                {language==="cz"?"Vysoká škola obchodní":"University college of business"}
                   <br />
                   {language==="cz"?"Obor:Cestoní ruch":"tudy program: Tourism management"} <br />
                   {language==="cz"?"září 2019 - teď":"September 2019 - Now"}
                </p>
              </div>
            </div>
            <div>
              <h2 className={S.h2}>{language==="cz"?"Certifikace":"Certification"}</h2>
              <div className={S.containerContent}>
                <TimelineTwo />
                <p className={S.p}>
                  The Complete 2021 Web DevelopmentBootcamp <br />
                  {language==="cz"?"3. května 2021":"May 3, 2021 "}<br />
                  Udemy <br />
                  <Link href="https://www.udemy.com/certificate/UC-122338b3-9e80-444e-994b-399f0c5830ed/">
                    <a target="_blank">{language==="cz"?"Odkaz na pověření":"Credential"}</a>
                  </Link>
                </p>

                <div></div>
                <p className={S.p}>
                  User Experience Design Essentials - Adobe XD UI UX Design{" "}
                  <br />
                  {language==="cz"?"1. června 2021":"June 1, 2021"} <br />
                  Udemy <br />
                  <Link href="https://www.udemy.com/certificate/UC-447fb2a8-5603-441a-84ab-129cf58c0abe/">
                    <a target="_blank">{language==="cz"?"Odkaz na pověření":"Credential"}</a>
                  </Link>
                </p>
              </div>
            </div>
            <div>
              <h2 className={S.h2}>{language==="cz"?"Pracovní zkušenosti":"Work experience"}</h2>
              <div className={S.containerContent}>
                <TimelineThree />
               
                
                <p className={S.p}>
                {language==="cz"?"Národní památkový ústav":"National Heritage Institute"} <br />
                {language==="cz"?"Sezónní průvodce na zámku Žleby":"Seasonal guide of Castle Žleby"} <br />
                {language==="cz"?"květen 2017 - teď":"May 2017 - Now"}
                </p>

                <div></div>

                <p className={S.p}>
                UOL účetnictví <br />
                {language==="cz"?"Asistentka účetní":"Assistant of accountant"}
                  <br />
                  {language==="cz"?"Říjen 2020 - teď":"October 2020 - Now"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resumee;
