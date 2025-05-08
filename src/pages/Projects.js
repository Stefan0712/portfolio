import './stylings/projects.css';
import styles from './stylings/Projects.module.css';
import * as motion from "motion/react-client";
import LinkIcon from '../images/link.png';
import GithubIcon from '../images/github.png';
import EasyFit from '../images/EasyFit.png';
import GetItDone from '../images/GetItDone.png';
import Portal from '../images/portal.png';
import { IconLibrary } from '../images/IconLibrary';
import MobileProjects from '../components/MobileProjects';

const Projects = () => {
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
        <motion.div whileHover={{ scale: '1.05', zIndex: 100 }} initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.5, ease: "easeOut" }} className={styles.project2}>
            <div className={styles.top}>
              <h3>Fitness API</h3>
            </div>
            <img className={styles['project-image']} alt='EasyFit' src={Portal} />
            <div className={styles['project-info']}>
              <h3>Fitness API and API Portal</h3>
              <p>An API made with ExpressJs and MongoDB, and a frontend made with ReactJs, Typescript, and TailwindCSS. It is still work in progress, but currently it has CRUD functionality for users, workouts, exercises, equipment, posts, and comments. Bcrypt and JWT for basic auth.</p>
              <h4>Technologies</h4>
              <div className={styles["technologies-container"]}>
                <div className={styles.technology}><div className={styles['image-bg']}><img alt='' className={styles['technology-icon']} src={IconLibrary.React} /></div></div>
                <div className={styles.technology}><div className={styles['image-bg']}><img alt='' className={styles['technology-icon']} src={IconLibrary.Express} /></div></div>
                <div className={styles.technology}><div className={styles['image-bg']}><img alt='MongoDB' className={styles['technology-icon']} src={IconLibrary.Mongo} /></div></div>
                <div className={styles.technology}><div className={styles['image-bg']}><img alt='MongoDB' className={styles['technology-icon']} src={IconLibrary.Typescript} /></div></div>
                <div className={styles.technology}><div className={styles['image-bg']}><img alt='MongoDB' className={styles['technology-icon']} src={IconLibrary.Tailwind} /></div></div>
              </div>
              <div className={styles.buttons}>
                <a href="https://github.com/Stefan0712/api-portal" target='_blank' className={styles['project-button']}>
                  <img src={GithubIcon} alt=''></img>Portal
                </a>
                <a href="https://github.com/Stefan0712/fitness-api" target='_blank' className={styles['project-button']}>
                  <img src={GithubIcon} alt=''></img>API
                </a>
              </div>
            </div>
        </motion.div>
        <MobileProjects />
    </div>
  );
}
 
export default Projects;