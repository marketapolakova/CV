import React, {useState, useEffect} from 'react'
import S from "./progressbar.module.scss";

function Progressbar({s, w}) {

    return (
<div className={S.div}>
    <span>
        <p className={S.p}>{s}</p> 
    </span>
  
  
         <div className={S.bar} >
            <div style={{width:`${w}%`}} className={S.progress}>
            
            </div>     
        </div> 
        <span className={S.span}>
            <span className={S.text}>{w}%</span>
        </span>  
 

             
        
       
</div>
       
    )
}

export default Progressbar