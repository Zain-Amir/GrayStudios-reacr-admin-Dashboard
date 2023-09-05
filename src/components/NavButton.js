import React from 'react'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'


const NavButton = ({title, CustomFunc, icon,color,dotColor}) => {
const handleClick = ()=>{
    
}

    return (
        <div>
            <TooltipComponent content={title} position='BottomCenter'>
          <button></button>
        </TooltipComponent>
    
        </div>
        
  
  )
}

export default NavButton