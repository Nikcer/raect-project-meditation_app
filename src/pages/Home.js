import React from 'react'
import Footer from '../components/Footer/Footer'
import { NavLink } from 'react-router-dom';
import styles from './Home.module.css'
import ApiQuotes from '../components/ApiQuotes/ApiQuotes';
const Home = () => {
      
  return (
    <div>
      <h3><ApiQuotes /></h3>
        <h1>Take a deep breath and...</h1>
        <div className={styles.btnContainer}>
            <button className={styles.btn}>
              <NavLink to="/timer">
                Start your Meditation
              </NavLink> 
            </button>
            <Footer />
        </div>   
      
    </div>
  )
}

export default Home