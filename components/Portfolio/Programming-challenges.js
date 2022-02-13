import React from 'react'
import Navbar from "../navbar/Navbar";
import NavbarCz from "../navbarCz/NavbarCz"
import Link from "next/link";
import S from "./portfolio.module.scss";
function ProgrammingChallenges({language}) {
    return (
        <div>
        <div className={S.div}>
        {language==="cz"?<NavbarCz/>:<Navbar/>}
        <div className={S.box}>
        <h1 className={S.h1}>Portfolio</h1>
        <h2 className={S.h2}>{language==="cz"?"Menší programovací výzvy":"Small programing challenges"}</h2>
        <div className={S.container}>
        <Link href='https://marketapolakova.github.io/rock-paper-scissors-game/design/'>
          <a target="_blank">
                       <div className={S.img_rock_scissors_paper}>
           <div className={S.hidden}>
             <p className={S.p}>{language==="cz"?"Hra kámen nůžky papír v JavaScriptu":"Rock scissors paper game in JavaScript"}</p>
           </div>
            </div>
            <div className={S.mobileCart}><p className={S.p}>{language==="cz"?"Hra kámen nůžky papír v JavaScriptu":"Rock scissors paper game in JavaScript"}</p> </div>
          </a>

          </Link>
          <Link href='https://marketapolakova.github.io/drink-water/'>
          <a target="_blank">
                       <div className={S.img_drink_water}>
           <div className={S.hidden}>
             <p className={S.p}>{language==="cz"?"Aplikace na sledování pitného režimu v JavaScriptu":"Water tracking app in JavaScript"}</p>
           </div>
            </div>
            <div className={S.mobileCart}><p className={S.p}>{language==="cz"?"Aplikace na sledování pitného režimu v JavaScriptu":"Water tracking app in JavaScript"}</p> </div>
          </a>

          </Link>

 {/* sipka od carouselu */}

          <Link
            href={language==="cz"? "/cz/portfolio":"/portfolio"} 
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
          <Link
            href={language==="cz"? "/cz/prototype":"/prototype"} 

                
            
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

export default ProgrammingChallenges