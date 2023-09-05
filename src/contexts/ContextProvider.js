import React,{useContext,createContext,useState} from "react";

const StateContext = createContext()

const initialContext = {
    chat:false,
    cart:false,
    userProfile:false,
    notifications:false
}


export const ContextProvider = ({children})=>{

    const [activeMenu, setActiveMenu] = useState(false)
    const [isClicked, setClicked ] = useState(initialContext)
    const  [screenSize,setScreenSize] = useState()
    const handleClick = (clicked) => {
            setClicked({...initialContext,[clicked]:true})
        }
    return(
        <StateContext.Provider
            value = {{activeMenu,
                setActiveMenu,
                isClicked,
                setClicked,
                handleClick,
                screenSize,
                setScreenSize
            }} 
        >
            {children}

        </StateContext.Provider>
    )
}

export const useStateContext =()=> useContext(StateContext ) 