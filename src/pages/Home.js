import { motion } from "motion/react";
import './stylings/home.css';
import React from 'react';
import SakuraPetals from "../components/SakuraPetals";
import NightSky from "../components/NightSky";
import ArrowsDown from '../images/icons/arrows-down.svg';

const Home = ({ changeTheme, themes, currentTheme }) => {
  
  return (
    <div className="home-page" id="home">
      {currentTheme.name === "Galaxy" ? (
        <NightSky currentTheme={currentTheme} />
      ) : ''}
        {currentTheme.name === 'Sakura' ? (
            <SakuraPetals />
        ) : ''}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="left"
      >
        <h1>VLADULESCU STEFAN</h1>
        <h2>Your new Junior Web Developer</h2>
      </motion.div>

      <div className="right">
        <div className="themes">
          {themes?.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              viewport={{ once: false, amount: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="theme"
              onClick={() => changeTheme(theme)}
              style={{ backgroundImage: `url(${theme.background})` }}
            >
              <h2>{theme.name}</h2>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }} // Start invisible and small
        animate={{ opacity: 1, scale: 1 }} // Animate to full size
        exit={{ opacity: 0, scale: 0.5 }} // Disappear when unmounted
        transition={{ duration: 0.5, ease: "easeOut" }} // Smooth animation
        className="scroll-down-button"
      >
        <motion.div
          whileHover={{ scale: 1.1 }} // Slight pop-up on hover
          animate={{ y: [0, -5, 0] }} // Floating effect
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <h3>Scroll Down</h3>
          <img src={ArrowsDown} alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
