import React from "react";
import Navbar from "../navbar/Navbar";
import Timeline from "../timeline/Line"
import TimelineTwo from "../timeline/LineTwo"
import TimelineThree from "../timeline/LineThree"
import Link from "next/link";
import S from "./resume.module.scss";


function Resumee() {
  return (
    <div>
      <div className={S.div}>
        <Navbar />
        <div className={S.box}>
        <h1 className={S.h1}>Resume</h1>

        <div className={S.container}>
          <h2 className={S.h2}>Education</h2>
          <h2 className={S.h2}>Certification</h2>
          <h2 className={S.h2}>Work experience</h2>
<div className={S.container2}>
             
         <Timeline/>
          <p className={S.p}>School of economics and tourism <br />
          Study program: Economics and tourism <br />
          September 2015 - May 2019 <br />
          Maturita certification (SAT)</p>

          <TimelineTwo/>
          <p className={S.p}>The Complete 2021 Web DevelopmentBootcamp <br />
          May 3, 2021 <br />
          Udemy <br />
          <Link href="https://www.udemy.com/certificate/UC-122338b3-9e80-444e-994b-399f0c5830ed/">
            <a target="_blank">Credential</a>
          </Link>
          </p>
           <TimelineThree/>
          <p className={S.p}>National Heritage Institute <br /> 
          Seasonal guide of Castle Žleby <br />
          May 2017 - Now</p>

     <div></div>
          <p className={S.p}>University college of business <br />
          Study program: Tourism management <br />
          September 2019 - Now

</p>

          <div></div>

          <p className={S.p}>User Experience Design Essentials - Adobe XD UI UX Design <br />
          June 1, 2021 <br />
          Udemy <br />
          <Link href="https://www.udemy.com/certificate/UC-447fb2a8-5603-441a-84ab-129cf58c0abe/">
            <a target="_blank">Credential</a>
          </Link>
          </p>
          
     <div></div>

          <p className={S.p}>UOL účetnictví <br /> 
          Assistant of accountant<br />
          October 2021 - Now</p>
</div>


          
        </div>
        </div>
      </div>
    </div>
  );
}

export default Resumee;
