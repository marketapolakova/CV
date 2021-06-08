import React from 'react'
import Navbar from "../navbar/Navbar";
import Link from "next/link";
import S from "./portfolio.module.scss";
function Portfolioo() {
    return (
        <div>
        <div className={S.div}>
        <Navbar />
        <div className={S.box}>
        <h1 className={S.h1}>Portfolio</h1>
        <div className={S.container}>
        <Link href="https://xd.adobe.com/view/fa84eff8-2483-47dd-8457-28ef4870bc3d-afd7/?fullscreen&hints=off">
          <a target="_blank">
                       <div className={S.img}>
           <div className={S.hidden}>
             <p className={S.p}>Prototype of fititious pet shelter</p>
           </div>
            </div>
          </a>

          </Link>

          <Link href="https://mtnetcode.com/">
          <a target="_blank">
         <div className={S.img2}>
           <div className={S.hidden}>
             <p className={S.p}>MTnetcode website</p>
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