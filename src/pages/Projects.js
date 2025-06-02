import './stylings/projects.css';
import styles from './stylings/Projects.module.css';
import MobileProjects from '../components/MobileProjects';
import FitnessApp from '../projects/FitnessApp/FitnessApp';

const Projects = () => {
  return ( 
    <div className={styles.projects} id="projects">
        <FitnessApp />
        <MobileProjects />
    </div>
  );
}
 
export default Projects;