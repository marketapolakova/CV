import React, { useState } from 'react';
import BurgerCz from "./burgerCz"
import MenuCz from "./menuCz"

function BurgerMenuCz() {
 const [open, setOpen] = useState(false)
    return (
      <div>
        <div style={{overflow: 'hidden'}}>
        <BurgerCz open={open} setOpen={setOpen} />
        { open && <MenuCz /> }
        </div>


      </div>
    )
  }
  export default BurgerMenuCz;
  