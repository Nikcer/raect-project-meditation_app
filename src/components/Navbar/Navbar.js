import React from 'react'
import {  Outlet } from 'react-router-dom';
import styles from './Navbar.module.css'
import ReactSwitch from 'react-switch';
import { useThemeContext } from '../../context/ThemeContext';
import { useState } from 'react';
import logo from '../../asset/img/logo.png'
export default function Navbar() {
    const {setContextTheme} = useThemeContext()
    const [checked, setChecked] = useState(false);

     const handleSwitch = (nextChecked) => {       
            setContextTheme((state) => (state === 'Light' ? 'Dark':'Light'))       
            setChecked(nextChecked);

     }
  return (
    <>
        <nav>
            <div className={styles.logoContainer}>
                <a href='/' className={styles.homeButton}>
                    <img src={logo} alt ='logo' className={styles.logoButton}>
                    </img>
                    Mindfulness Meditation
                </a>
            
           {/*  <h1><img src={logo} alt='logo'></img><Link to="/" >Mindfulness Meditation</Link></h1> */}
            
            </div>
            <div className={styles.switchContainer}>
            
            <ReactSwitch 
                onChange={handleSwitch}
                checked={checked}                
                handleDiameter={28}                                 
                onColor="#0ff"                
                onHandleColor="#08f" 
                offColor="#08f"
                offHandleColor="#0ff"
                height={30}
                width={58}
                borderRadius={6}
                activeBoxShadow="0px 0px 1px 2px #fffc35"
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                uncheckedIcon={
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="white" className="bi bi-moon-fill" viewBox="0 0 16 16">
                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                    </svg> 
      
                    }
                checkedIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="white" className="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                        <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                    </svg>
                    }
                
                uncheckedHandleIcon={
                    <svg xmlns="http://www.w3.org/2000/svg"  width="100%" height="100%" fill="yellow" className="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                        <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                    </svg>
                    }
                checkedHandleIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="blue-dark" className="bi bi-moon-fill" viewBox="0 0 16 16">
                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                    </svg>
                
                  }
                className='reactSwitch'
            /> 
            </div>
        
        </nav>
        <section>
            <Outlet></Outlet>
        </section>
    </>
  )
}
