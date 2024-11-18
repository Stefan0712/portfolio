import { useState } from 'react';
import FitnessApp from '../projects/FitnessApp';
import EventManagementApp from '../projects/EventManagementApp.js';
import './stylings/projects.css';
import ProjectManagementApp from '../projects/ProjectManagementApp.js';
import YelpCamp from '../projects/YelpCamp.js';
import WordpressBlog from '../projects/WordpressBlog.js';


const Projects = () => {

    const [currentPage, setCurrentPage] = useState(<FitnessApp />);
    const [selectedPage, setSelectedPage] = useState('fitness-app');
    const [selectedPageName, setSelectedPageName] = useState('Fitness App')


    const handlePageSelection = (slug, component) =>{
      setSelectedPage(slug);
      setCurrentPage(component);
      switch(slug){
        case 'fitness-app':
          setSelectedPageName('Fitness App');
          break;
        case 'event-management-app':
          setSelectedPageName('Event Management App');
          break;
        case 'YelpCamp':
          setSelectedPageName('YelpCamp');
          break;
        case 'simple-project-tracker':
          setSelectedPageName('Project Tracker');
          break;
        case 'wordpress-blog':
          setSelectedPageName('Wordpress Blog');
          break;
        default:
          setSelectedPageName(null);
      }
    };
    return ( 
        <div className="projects-page" id="projects">
            <div className='side-navigation'>
            <div className='project-buttons'>
              <h2>Projects</h2>
              <button className={selectedPage === 'fitness-app' ? 'selected-page-button' : ''} onClick={()=>handlePageSelection('fitness-app', <FitnessApp />)}>Fitness App</button>
              <button className={selectedPage === 'event-management-app' ? 'selected-page-button' : ''} onClick={()=>handlePageSelection('event-management-app', <EventManagementApp />)}>Event Management App</button>
              <button className={selectedPage === 'yelpcamp' ? 'selected-page-button' : ''} onClick={()=>handlePageSelection('YelpCamp', <YelpCamp />)}>YelpCamp</button>
              <button className={selectedPage === 'project-management-app' ? 'selected-page-button' : ''} onClick={()=>handlePageSelection('simple-project-tracker', <ProjectManagementApp />)}>Project Management App</button>
              <button className={selectedPage === 'wordpress-blog' ? 'selected-page-button' : ''} onClick={()=>handlePageSelection('wordpress-blog', <WordpressBlog />)}>WordPress Blog</button>
            </div>
            <div className='tip-modal'>
                <img className='icon' src='../portfolio/icons/info.svg' alt='tips'></img>
                <p>Press inside of the right section to enable scrolling inside of it, and out of it to scroll the rest of the app.</p>
            </div>
            <a href={`https://github.com/Stefan0712/${selectedPage}`} target='_blank' className='github-button' style={{justifyContent: 'center'}}>
              <img src='https://stefan0712.github.io/portfolio//icons/github.png' className='github-icon icon' alt='github'></img>
              <p>See {selectedPageName} on Github</p>
            </a>
        </div>
        <div className='project-content'>
          {currentPage}
        </div>
        </div>
     );
}
 
export default Projects;