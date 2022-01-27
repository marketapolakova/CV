import React from 'react'
import Navbar from "../navbar/Navbar";
import NavbarCz from "../navbarCz/NavbarCz"
import Link from "next/link";
import S from "./portfolio.module.scss";
import {isMobile} from 'react-device-detect'
function Wordpress({language}) {
    return (
        <div>
        <div className={S.div}>
        {language==="cz"?<NavbarCz/>:<Navbar/>}
        <div className={S.box}>
        <h1 className={S.h1}>Portfolio</h1>
        <h2 className={S.h2}>{language==="cz"?"Wordpress":"Wordpress"}</h2>
        <div className={S.container}>
        <Link href='https://marketapolakova.github.io/wordpress/'>
          <a target="_blank">
                       <div className={S.img_coffe}>
           <div className={S.hidden}>
             <p className={S.p}>{language==="cz"?"Webové stránky fiktivní kavárny":"Websites of fititious coffe shop"}</p>
           </div>
            </div>
            <div className={S.mobileCart}><p className={S.p}>{language==="cz"?"Webové stránky fiktivní kavárny":"Websites of fititious coffe shop"}</p> </div>
          </a>

          </Link>
          <Link href='https://marketapolakova.github.io/wordpress/travel/'>
          <a target="_blank">
                       <div className={S.img_travel}>
           <div className={S.hidden}>
             <p className={S.p}>{language==="cz"?"Webové stránky fiktivní cestovní kanceláře":"Websites of fititious travel agency"}</p>
           </div>
            </div>
            <div className={S.mobileCart}><p className={S.p}>{language==="cz"?"Webové stránky fiktivní cestovní kanceláře":"Websites of fititious travel agency"}</p> </div>
          </a>

          </Link>
 {/* sipka od carouselu */}
          <Link
            href={language==="cz"? "/cz/prototype":"/prototype"} 
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

export default Wordpress