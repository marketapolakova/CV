import React from 'react';
import S from "./burger-menu.module.scss";

const Burger = ({ open, setOpen }) => {
  return (
   <div className={S.container} onClick={() => setOpen(!open)}>
       <div className={S.divBurger} />
      <div  className={S.divBurger}/>
      <div  className={S.divBurger}/>
     
   </div>
 
   
  )
}

export default Burger;

