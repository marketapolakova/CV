import React, { useState } from 'react';
import BurgerCz from "./burgerCz"
import MenuCz from "./menuCz"

function BurgerMenuCz() {
 const [otevrit, setOtevrit] = useState(false)
    return (
      <div>
        <div style={{overflow: 'hidden'}}>
        <BurgerCz otevrit={otevrit} setOtevrit={setOtevrit} />
        { otevrit && <MenuCz /> }
        </div>


      </div>
    )
  }
  export default BurgerMenuCz;
  