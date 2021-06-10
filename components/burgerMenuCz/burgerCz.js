import React from 'react';
import S from "./burger-menu.module.scss";

const BurgerCz = (props) => {
  console.log(props);
  return (
   <div className={S.container} onClick={() => props.setOtevrit(!props.otevrit)}>
       <div className={S.divBurger} />
      <div  className={S.divBurger}/>
      <div  className={S.divBurger}/>
     
   </div>
 
   
  )
}

export default BurgerCz;

