import React from 'react'
import S from "./timeline.module.scss";

function Line() {
    return (
        <div >
            <div className={S.time}>
            <div className={S.circle}></div>
            <div className={S.line}></div> 
               <div className={S.circle}></div>
            <div className={S.line2}></div> 
            </div>
            
         
            
        </div>
    )
}

export default Line
