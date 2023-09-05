import React from 'react'
import { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import {Cart,Chat,Notifications,UserProfile} from './'
import { useStateContext } from '../contexts/ContextProvider'

const NavButton = ({title, CustomFunc, icon,color,dotColor}) => {
  return (
            <TooltipComponent content={title} position='BottomCenter'>
              <button  type='button ' onClick={CustomFunc} style={{color}} 
              className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
              <span style={{background:dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
              {icon}
              </button>

           </TooltipComponent>       
  
  ) }



const Navbar = () => {
  const {activeMenu, setActiveMenu, isClicked, setClicked,handleClick,screenSize,setScreenSize} = useStateContext()
  
  useEffect(()=>{
    const handleResize = ( )=> setScreenSize(window.innerWidth);
      window.addEventListener('resize', handleResize)
      handleResize()
      return ()=> window.removeEventListener('resize',handleResize)   
  },[])

    useEffect(()=>{
        if (screenSize <= 900){setActiveMenu(false)}
        else {setActiveMenu(true)}
    },[screenSize])
  

    // NavBAAR
  return (
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative mb-10'> 
      <NavButton title='Menu' CustomFunc={()=>{
        setActiveMenu((prevActiveMenu) => !prevActiveMenu )
      }}
        color = 'blue'
        icon = {<AiOutlineMenu/>}
      />
      <div className='flex'>
      <NavButton title='Chat' CustomFunc={()=>{
            handleClick('chat')  
          }}
            color = 'blue'
            dotColor='#03C907'
            icon = {<BsChatLeft/>}
     />
      <NavButton title='Shop' CustomFunc={()=>{
            handleClick('cart')
            }}
            color = 'blue'
            icon = {<FiShoppingCart/>}
      />
      <NavButton title='Notifications' CustomFunc={()=>{
            handleClick('notifications')  
          }}
            color = 'blue'
            dotColor='#03C907'
            icon = {<RiNotification3Line/>}
      />
      <TooltipComponent content = 'User Profile' position='BottomCenter'>
          <div className='flex items-center gap-2 cursor-pointer hover:bg-light-gray rounded-lg'
          onClick={()=>{
            handleClick('UserProfile')
          }}
          >
            <img src = {avatar} className='rounded-full w-8 h-8'/>
            <p className='text-gray-600 text-bold '>
              <span>Hi , </span>
              <span className='text-gray-900'>Michael</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-600'/>
          </div>
      </TooltipComponent>
        {isClicked.cart && <Cart/>}
        {isClicked.chat && <Chat/>}
        {isClicked.notifications && <Notifications/>}
        {isClicked.UserProfile && <UserProfile/>}
      </div>
    </div>
  )
}

export default Navbar