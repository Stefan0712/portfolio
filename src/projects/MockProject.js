import { useState } from 'react';
import CloseIcon from '../images/close.svg';
import styles from '../pages/stylings/Projects.module.css';
import * as motion from "motion/react-client";
import FitnessApp from './FitnessApp/FitnessApp';
import EventManagementApp from './EventManagementApp/EventManagementApp';
import YelpCamp from './YelpCamp/YelpCamp';

const MockProject = ({closeApp, appName, constraintsRef, openGallery}) => {
    const [isAppClosing, setIsAppClosing] = useState(false);



    const handleClose = () =>{
        setTimeout(()=>closeApp(appName), 150);
        setIsAppClosing(true);
    }
    return ( 
        <motion.div
            drag
            dragConstraints={constraintsRef}
            dragTransition={{ bounce: 0, power: 0 }}
            className={`${styles.project} ${isAppClosing ? styles['closing-app'] : ''}`}>

            <div className={styles['project-top-bar']}>
                <h3>{appName}</h3>
                <button onClick={handleClose}>
                    <img src={CloseIcon} className={styles['close-icon']} alt='' />
                </button>
            </div>
            <div className={styles['project-content']}>
                {appName === 'Fitness App' ? <FitnessApp openGallery={openGallery} /> : appName === 'Get it done' ? null : appName === 'Event Management App' ? <EventManagementApp openGallery={openGallery} /> : appName === 'YelpCamp' ? <YelpCamp /> : null}
            </div>

        </motion.div>
     );
}
 
export default MockProject;