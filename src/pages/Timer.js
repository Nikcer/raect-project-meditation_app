import React, { useState , useEffect } from 'react';
import styles from './Timer.module.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Song from '../components/Song/Song';
import Footer from '../components/Footer/Footer';
export default function Timer() {
    const [time, setTime] = useState (0);
    const [isActive, setIsActive] = useState(false);
    

    useEffect ( () => {
        let intervall;

        if (isActive && time > 0) {
            intervall = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        }

        return () => {  
            clearInterval(intervall);
        };
        
        
    }, [isActive, time]); 


    const play = () => {
        
        setIsActive(true);
        

    }

    const stop = () => {
       setIsActive (false); 
    }

    const reset = () => {
        setTime(0);
        setIsActive(false);
    }; 

    const selectTime = (minutes) =>{
        if (!isActive){
            setTime(minutes * 60);
        }
        
        
    };

    const timeDisplay = (time) => {
        const minutes = Math.floor (time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
    }

   return (
       <section >
        <CountdownCircleTimer
            isPlaying={isActive}
            duration={time}
            
            colors={[["#f0f8ff"]]}
            onComplete={stop}
        >
        {({ duration }) => <h1>{(timeDisplay(time))}</h1>}
        </CountdownCircleTimer>

        
        <h3>Select Time</h3>
        <br />
        <div className={styles.container}>
            <button className={styles.btn} onClick={() => selectTime(3)}>3</button>
            <button className={styles.btn} onClick={() => selectTime(5)}>5</button>
            <button className={styles.btn} onClick={() => selectTime(10)}>10</button>
        </div>
        <br />
        <div className={styles.container}>
           <button className={styles.btnConsole} onClick={play} title="Play"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                     <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                    </svg></button>
           <button className={styles.btnConsole} onClick={stop} title="Pause"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pause-fill" viewBox="0 0 16 16">
                                    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
                                </svg></button>
           <button className={styles.btnConsole} onClick={reset} title="Reset"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stop-fill" viewBox="0 0 16 16">
                                        <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/>
                                    </svg></button>
        </div>
        <h3>Choose audio</h3>
        <Song /> 
        <Footer />
       </section>  
       
       )
}