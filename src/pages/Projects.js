import { useState } from 'react';
import './stylings/projects.css';
import styles from './stylings/Projects.module.css';
import * as motion from "motion/react-client";
import LinkIcon from '../images/link.png';
import GithubIcon from '../images/github.png';
import EasyFit from '../images/EasyFit.png';


const Projects = () => {

  const [openedProject, setOpenedProject] = useState(null)


  return ( 
    <div className={styles.projects} id="projects">
        <motion.div 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }}  
            exit={{ opacity: 0, x: -100 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }} className={styles.project}>


          <img className={styles['project-image']} alt='EasyFit' src={EasyFit}></img>

          <div className={styles['project-info']}>
            <h3>EasyFit</h3>
            <p>EasyFit is a fitness tracker made with React, Redux and Typescript. It offers a quick and simple interface, making recording and tracking progress easy and free.</p>
            <div className={styles.buttons}>
              <a href="https://stefan0712.github.io/fitness-app/" target='_blank' className={styles['project-button']}>
                <img className='invert' src={LinkIcon} alt=''></img>Try it
              </a>
              <a href="https://github.com/Stefan0712/fitness-app" target='_blank' className={styles['project-button']}>
                <img src={GithubIcon} alt=''></img>Repository
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div 
            initial={{ opacity: 0, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }}  
            exit={{ opacity: 0, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }} className={styles.project}>


          <h1>Get it done</h1>
          <div className={styles.buttons}>
            <a href="https://stefan0712.github.io/get-it-done/" target='_blank' className={styles['project-button']}>
              <img className='invert' src={LinkIcon} alt=''></img>Try it
            </a>
            <a href="https://github.com/Stefan0712/get-it-done" target='_blank' className={styles['project-button']}>
              <img src={GithubIcon} alt=''></img>Repository
            </a>
          </div>

        </motion.div>
        <motion.div 
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }}  
            exit={{ opacity: 0, x: 100 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }} className={styles.project}>


          <h1>Event App</h1>

          <div className={styles.buttons}>
            <a href="#" target='_blank' className={styles['project-button']}>
              <img className='invert' src={LinkIcon} alt=''></img>Try it
            </a>
            <a href="https://github.com/Stefan0712/event-management-app" target='_blank' className={styles['project-button']}>
              <img src={GithubIcon} alt=''></img>Repository
            </a>
          </div>
        </motion.div>
    </div>
  );
}
 
export default Projects;