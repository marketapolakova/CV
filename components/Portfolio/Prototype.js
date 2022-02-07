import React from 'react'
import Navbar from "../navbar/Navbar";
import NavbarCz from "../navbarCz/NavbarCz"
import Link from "next/link";
import S from "./portfolio.module.scss";
import {isMobile} from 'react-device-detect'
function Portfolioo2({language}) {
    return (
        <div>
        <div className={S.div}>
        {language==="cz"?<NavbarCz/>:<Navbar/>}
        <div className={S.box}>
        <h1 className={S.h1}>Portfolio</h1>
        <h2 className={S.h2}>{language==="cz"?"Prototyp":"Prototype"}</h2>
        <div className={S.container}>
      
        <Link href={isMobile ? "https://xd.adobe.com/view/a8abdfdf-5ad5-4f46-acbb-071326b80745-fdf8/?fullscreen&hints=off" : "https://xd.adobe.com/view/fa84eff8-2483-47dd-8457-28ef4870bc3d-afd7/?fullscreen&hints=off"}>
          <a target="_blank">
                       <div className={S.img_dogatas}>
           <div className={S.hidden}>
             <p className={S.p}>{language==="cz"?"Prototyp fiktivního útulku":"Prototype of fititious pet shelter"}</p>
           </div>
            </div>
            <div className={S.mobileCart}><p className={S.p}>{language==="cz"?"Prototyp fiktivního útulku":"Prototype of fititious pet shelter"}</p> </div>
          </a>

          </Link>
          <Link href={isMobile ? "https://xd.adobe.com/view/e9333cfe-21b8-462e-b92a-d76b29bb6009-bc60/?fullscreen" : "https://xd.adobe.com/view/e9333cfe-21b8-462e-b92a-d76b29bb6009-bc60/?fullscreen"}>
          <a target="_blank">
                       <div className={S.img_cv}>
           <div className={S.hidden}>
             <p className={S.p}>{language==="cz"?"Prototyp životopisu":"Prototype of CV"}</p>
           </div>
            </div>
            <div className={S.mobileCart}><p className={S.p}>{language==="cz"?"Prototyp životopisu":"Prototype of CV"}</p> </div>
          </a>

          </Link>
 {/* sipka od carouselu */}
          <Link
            href={language==="cz"? "/cz/wordpress":"/wordpress"} 
          >
            <a>
              <div>
                <div>
                  <p className={S.arrow_forward}>
                    {">"}
                  </p>
                </div>
         
              </div>
            </a>
          </Link>
          <Link
            href={language==="cz"? "/cz/programming-challenges":"/programming-challenges"} 
          >
            <a>
              <div>
                <div>
                  <p className={S.arrow_backward}>
                    {"<"}
                  </p>
                </div>
         
              </div>
            </a>
          </Link>
           
        
         

     
           
         </div>
        </div>
       
      </div>
        </div>
    )
}

export default Portfolioo2