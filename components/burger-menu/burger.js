import React from 'react';
import classNames from "classnames"
import S from "./burger-menu.module.scss";

const Burger = ({ open, setOpen }) => {
  const burger1=classNames({
    [S.divBurger1]:true,
    [S.click1]:open
  })

  const burger2=classNames({
    [S.divBurger2]:true,
    [S.click2]:open
  })

  const burger3=classNames({
    [S.divBurger3]:true,
    [S.click3]:open
  })

  return (
   <div className={S.container} onClick={() => setOpen(!open)}>
       <div className={burger1} />
      <div  className={burger2}/>
      <div  className={burger3}/>
     
   </div>
 
   
  )
}

export default Burger;

