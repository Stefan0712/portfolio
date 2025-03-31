import { useState } from 'react';
import './stylings/projects.css';
import styles from './stylings/Projects.module.css';
import * as motion from "motion/react-client";
import LinkIcon from '../images/link.png';
import GithubIcon from '../images/github.png';
import EasyFit from '../images/EasyFit.png';
import GetItDone from '../images/GetItDone.png';
import EventApp from '../images/EventApp.png';
import EasyFitLogo from '../images/EasyFit-logo.png';
import { IconLibrary } from '../images/IconLibrary';
import CloseIcon from '../images/close.svg';

const Projects = () => {

  const [openedProject, setOpenedProject] = useState(null)


  return ( 
    <div className={styles.projects} id="projects">
        <motion.div whileHover={{ scale: '1.05', zIndex: 100 }} initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.5, ease: "easeOut" }} className={styles.project}>
          <div className={styles.top}>
            <h3>Fitness App</h3>
          </div>
          <img className={styles['project-image']} alt='EasyFit' src={EasyFit} />

          <div className={styles['project-info']}>
            <h3>EasyFit</h3>
            <p>EasyFit is a fitness tracker made with React, Redux and Typescript. You can create custom items and use them for creating custom exercises/workouts, or just use default items. You can log goals, food, exercises, and workout.</p>
            <h4>Technologies</h4>
            <div className={styles["technologies-container"]}>
              <div className={styles.technology}><div className={styles['image-bg']}><img alt='' className={styles['technology-icon']} src={IconLibrary.React} /></div> <p>React</p></div>
              <div className={styles.technology}><div className={styles['image-bg']}><img alt='' className={styles['technology-icon']} src={IconLibrary.Redux} /></div> <p>Redux</p></div>
            </div>
            <div className={styles.buttons}>
              <a href="https://stefan0712.github.io/fitness-app/" target='_blank' className={styles['project-button']}>
                <img src={LinkIcon} alt=''></img>Try it
              </a>
              <a href="https://github.com/Stefan0712/fitness-app" target='_blank' className={styles['project-button']}>
                <img src={GithubIcon} alt=''></img>Repository
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: '1.05', zIndex: 100 }} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.5, ease: "easeOut" }} className={styles.project}>
          <div className={styles.top}>
              <h3>Pomodoro Timer</h3>
            </div>
            <img className={styles['project-image']} alt='EasyFit' src={GetItDone} />
            <div className={styles['project-info']}>
              <h3>Get it done</h3>
              <p>A simple pomodoro app that allows users to also track tasks. You can edit the duration of sessions, the frequency of long breaks, add, edit, remove tasks, hide/show UI components, and keep track of work sessions.</p>
              <h4>Technologies</h4>
              <div className={styles["technologies-container"]}>
                <div className={styles.technology}><div className={styles['image-bg']}><img alt='' className={styles['technology-icon']} src={IconLibrary.React} /> </div> <p>React</p></div>
                <div className={styles.technology}><div className={styles['image-bg']}><img alt='' className={styles['technology-icon']} src={IconLibrary.Redux} /> </div><p>Redux</p></div>
              </div>
              <div className={styles.buttons}>
                <a href="https://stefan0712.github.io/get-it-done/" target='_blank' className={styles['project-button']}>
                  <img src={LinkIcon} alt=''></img>Try it
                </a>
                <a href="https://github.com/Stefan0712/get-it-done" target='_blank' className={styles['project-button']}>
                  <img src={GithubIcon} alt=''></img>Repository
                </a>
              </div>
              </div>

        </motion.div>
        <motion.div whileHover={{ scale: '1.05', zIndex: 100 }} initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.5, ease: "easeOut" }} className={styles.project}>
            <div className={styles.top}>
              <h3>Event Management App</h3>
            </div>
          <img className={styles['project-image']} alt='EasyFit' src={EventApp} />
            <div className={styles['project-info']}>
              <h3>Event Management</h3>
              <p>An Event management app. You can create or join events, assign tasks to users, rules, and schedule. It uses React for front-end, Leaflet for maps, Express and MongoDB for the back-end.</p>
              <h4>Technologies</h4>
              <div className={styles["technologies-container"]}>
                <div className={styles.technology}><div className={styles['image-bg']}><img alt='' className={styles['technology-icon']} src={IconLibrary.React} /></div> <p>React</p></div>
                <div className={styles.technology}><div className={styles['image-bg']}><img alt='' className={styles['technology-icon']} src={IconLibrary.Redux} /></div> <p>Redux</p></div>
                <div className={styles.technology}><div className={styles['image-bg']}><img alt='' className={styles['technology-icon']} src={IconLibrary.Leaflet} /></div> <p>Leaflet</p></div>
                <div className={styles.technology}><div className={styles['image-bg']}><img alt='' className={styles['technology-icon']} src={IconLibrary.Express} /></div> <p>Express</p></div>
                <div className={styles.technology}><div className={styles['image-bg']}><img alt='MongoDB' className={styles['technology-icon']} src={IconLibrary.Mongo} /></div> <p>MongoDB</p></div>
              </div>
              <div className={styles.buttons}>
                <a href="https://github.com/Stefan0712/event-management-app" target='_blank' className={styles['project-button']}>
                  <img src={GithubIcon} alt=''></img>Repository
                </a>
              </div>
              </div>
        </motion.div>
    </div>
  );
}
 
export default Projects;