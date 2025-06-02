import styles from './Project.module.css';


const SideMenu = ({currentSection, setCurrentSection}) => {
    return ( 
        <div className={styles.sideMenu}>
            <button className={`${styles.sideButton} ${currentSection === 'overview' ? styles.selectedSideButton : ''}`} onClick={()=>setCurrentSection('overview')}>Overview</button>
            <button className={`${styles.sideButton} ${currentSection === 'gallery' ? styles.selectedSideButton : ''}`} onClick={()=>setCurrentSection('gallery')}>Gallery</button>
            <button className={`${styles.sideButton} ${currentSection === 'features' ? styles.selectedSideButton : ''}`} onClick={()=>setCurrentSection('features')}>Features</button>
            <button className={`${styles.sideButton} ${currentSection === 'planned' ? styles.selectedSideButton : ''}`} onClick={()=>setCurrentSection('planned')}>Planned Features</button>
            <button className={`${styles.sideButton} ${currentSection === 'commits' ? styles.selectedSideButton : ''}`} onClick={()=>setCurrentSection('commits')}>Commits</button>
        </div>
     );
}
 
export default SideMenu;