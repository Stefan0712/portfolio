import { motion } from "motion/react";
import './stylings/home.css';
import React, { useEffect } from 'react';


const Home = ({ changeTheme, themes }) => {
    


    useEffect(() => {
        const stars = document.querySelectorAll('.star');
        const moon = document.querySelector('.moon');
    
        const parallaxEffect = (event) => {
          const mouseX = event.clientX;
          const mouseY = event.clientY;
    
          stars.forEach(star => {
            const offsetX = (star.offsetLeft - mouseX) * 0.05;  // Adjust parallax strength
            const offsetY = (star.offsetTop - mouseY) * 0.05;    // Adjust parallax strength
            star.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
          });
    
          const moonOffsetX = (moon.offsetLeft - mouseX) * 0.1;
          const moonOffsetY = (moon.offsetTop - mouseY) * 0.1;
          moon.style.transform = `translate(${moonOffsetX}px, ${moonOffsetY}px)`;
        };
    
        document.addEventListener('mousemove', parallaxEffect);
    
        return () => {
          document.removeEventListener('mousemove', parallaxEffect);
        };
      }, []);



    return (
        <div className="home-page" id="home">
            <div className="moon"></div>
                <div className="stars-container">
                    {Array.from({ length: 100 }).map((_, index) => (
                    <div key={index} className="star" style={{
                        left: `${Math.random() * 100}%`,   
                        top: `${Math.random() * 100}%`,    
                    }}></div>
                    ))}
            </div>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="left">
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
                            style={{ backgroundImage: `url(${theme.background})` }}>
                            <h2>{theme.name}</h2>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
