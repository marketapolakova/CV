import React from 'react'
import Navbar from "../navbar/Navbar";
import NavbarCz from "../navbarCz/NavbarCz"
import Link from "next/link";
import S from "./portfolio.module.scss";
import {isMobile} from 'react-device-detect'
function Portfolioo({language}) {
    return (
        <div>
        <div className={S.div}>
        {language==="cz"?<NavbarCz/>:<Navbar/>}
        <div className={S.box}>
        <h1 className={S.h1}>Portfolio</h1>
        <h2 className={S.h2}>{language==="cz"?"Kódování":"Coding"}</h2>
        <div className={S.container}>


          <Link href="https://mtnetcode.com/">
          <a target="_blank">
         <div className={S.img_mtnet}>
           <div className={S.hidden}>
             <p className={S.p}>{language==="cz"?"Webová stránka MTnetcode":"MTnetcode website"}  </p>
             <div className={S.mobileCart}><p className={S.p}>{language==="cz"?"Webová stránka MTnetcode":"MTnetcode website"}</p> </div>
           </div>
        </div>
        <div className={S.mobileCart}><p className={S.p}>{language==="cz"?"Webová stránka MTnetcode":"MTnetcode website"}</p> </div>
          </a>

          </Link>
 {/* sipka od carouselu */}
          <Link
            href={language==="cz"? "/cz/programming-challenges":"/programming-challenges"} 

                
            
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
           
         </div>
        </div>
       
      </div>
        </div>
    )
}

export default Portfolioo