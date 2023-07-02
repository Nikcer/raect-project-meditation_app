import React from "react";
import styles from "./Footer.module.css";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { IoRocketSharp } from "react-icons/io5";
function Footer () {
    return (
        <>
            <div className={styles.footer}>
            
               
                
                <div className={styles.icons}>
                   <a 
                    href="https://www.linkedin.com/in/nicol%C3%B2-cerra-492325231/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                   </a>
                   <a
                    href="https://github.com/Nikcer"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <FaGithub />
                   </a>
                   <a
                    href="https://www.instagram.com/nik__ce/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <FaInstagram />
                   </a>
                   <a
                    href="https://talent.start2impact.it/profile/nicolo-cerra"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Start2impact Profile"
                    >
                        <IoRocketSharp />

                   </a>
                </div>
                
                <p>Nicolò Cerra &copy; 2023 - Start2impact University React Project</p>
            </div>    
            
            
        
        </>    
    )
}

export default Footer;