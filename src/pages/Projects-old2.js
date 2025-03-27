import { useState } from 'react';
import './stylings/projects.css';
import styles from './stylings/Projects.module.css';
import AppIcon from '../images/app.svg';
import * as motion from "motion/react-client"
import { useRef } from "react"
import MockProject from '../projects/MockProject';
import Gallery from '../projects/Gallery';

const Projects = () => {
  const constraintsRef = useRef(null)

  const [openedApps, setOpenedApps] = useState([]);
  const [gallery, setGallery] = useState(null);



  const openApp = (appName) =>{
    if(!openedApps.some(item=>item===appName)){
      setOpenedApps(openedApps=>[...openedApps, appName]);
    }

  }
  const closeApp = (appName) =>{
    setOpenedApps(openedApps=>[...openedApps.filter(app=>app!==appName)])
  }
  const openGallery = (images) =>{
    setGallery(images);
  }
  return ( 
    <motion.div ref={constraintsRef} className={styles.projects} id="projects">
      {gallery ? <Gallery constraintsRef={constraintsRef} closeGallery={()=>setGallery(null)} images={gallery} /> : null}
        <div className={styles['project-button']} onClick={()=>openApp('Fitness App')}>
          <img src={AppIcon} alt='' className={styles['app-button-icon']}></img>
          <p>Fitness App</p>
        </div>
        <div className={styles['project-button']} onClick={()=>openApp('Get it done')}>
          <img src={AppIcon} alt='' className={styles['app-button-icon']}></img>
          <p>Pomodoro App</p>
        </div>
        <div className={styles['project-button']} onClick={()=>openApp('Event Management App')}>
          <img src={AppIcon} alt='' className={styles['app-button-icon']}></img>
          <p>Events App</p>
        </div>
        <div className={styles['project-button']} onClick={()=>openApp('YelpCamp')}>
          <img src={AppIcon} alt='' className={styles['app-button-icon']}></img>
          <p>YelpCamp</p>
        </div>
        {!gallery && openedApps && openedApps.length > 0 ? openedApps.map((item, index)=>(
           <MockProject openGallery={openGallery} closeApp={closeApp} appName={item}  key={index} constraintsRef={constraintsRef} />
        )) : null}
    </motion.div>
  );
}
 
export default Projects;







.projects{
  width: 100%;
  min-height: 100%;
  display: flex;
  gap: 10px;
  position: relative;
  overflow: hidden;
}
.project-button{
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  transition: all 0.1s;
  user-select: none;
}
.app-button-icon{
  width: 40px;
  height: 40px;
}
.project-button:hover{
  border: 1px solid white;
  transition: all 0.1s;
}

.gallery{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: black;
  z-index: 50px;
  top: 10px;
  left: 10px;
  padding: 10px;
}




.project-top-bar{
  width: 100%;
  height: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  color: black;
}
.project-top-bar button{
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.project-top-bar button img{
  width: 30px;
  height: 30px;
  filter: invert(1)
}
.project{
  width: 800px;
  height: 500px;
  border: 3px solid white;
  position: absolute;
  background-color: black;
  overflow: hidden;
  animation-name: openProject;
  animation-duration: 0.2s;
  z-index: 10;
}
@keyframes openProject {
  from{
      width: 0px;
      height: 0px;
      opacity: 0;
  }
  to{
      width: 800px;
      height: 500px;
      opacity: 1;
  }
}
.project.closing-app{
  animation-name: closeApp;
  animation-duration: 0.1s;
  width: 0px;
  height: 0px;
  opacity: 0;
}
@keyframes closeApp {
  from{
      width: 800px;
      height: 500px;
      opacity: 1;
  }
  to{
      width: 0px;
      height: 0px;
      opacity: 0;
  }
}
.project-content{
  height: 460px;
  width: 800px;
}