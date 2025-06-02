import { useState } from 'react';
import styles from '../Project.module.css';
import SideMenu from '../SideMenu';
import Overview from './sections/Overview';
import Gallery from './sections/Gallery';
import Features from './sections/Features';
import Planned from './sections/Planned';
import Commits from './sections/Commits';


const FitnessApp = () => {

    const [currentSection, setCurrentSection] = useState('overview');

    return ( 
        <div className={styles.project}>
            <h1>EasyFit - Mobile App</h1>
            <div className={styles.projectContainer}>
                <SideMenu currentSection={currentSection} setCurrentSection={setCurrentSection} />
                <div className={styles.content}>
                    {currentSection === 'overview' ? <Overview /> : 
                    currentSection === 'gallery' ? <Gallery /> : 
                    currentSection === 'features' ? <Features /> : 
                    currentSection === 'planned' ? <Planned /> : 
                    currentSection === 'commits' ? <Commits /> : 
                    <Overview />}
                </div>
            </div>
        </div>
     );
}
 
export default FitnessApp;