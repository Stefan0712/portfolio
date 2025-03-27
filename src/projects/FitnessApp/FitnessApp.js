import Commits from '../../components/Commits';
import styles from './FitnessApp.module.css';
import {ImageLibrary} from './ImageLibrary';
import { useState } from 'react';

const FitnessApp = ({openGallery}) => {

    
    
    return ( 
        <div className={styles.project}>
           <div className={styles.info}>
            <div className={styles["project-info-block"]}>
                    <div className={styles['info-block-title']}>
                        <h3>Description</h3>
                    </div>
                    <div className={styles['info-block-description']}>
                        <p>
                            Made with ReactJs and Redux, the goal is to make a fully working offline fitness app that I will personally use daily. It uses pure CSS stylings and the minimum possible number
                            of third-party packages. I also started to add Typescript and I plan on adding online features later on.
                        </p>
                    </div> 
                </div>
                <div className={styles["project-info-block"]}>
                    <div className={styles['info-block-title']}>
                        <h3>You can </h3>
                    </div>
                    <div className={styles['info-block-description']}>
                        <ul>
                            <li>Create, view, edit, and delete exercises and workouts.</li>
                            <li>Log foods, goals, and exercises, and view and delete logs.</li>
                            <li>View, Create, Edit, and delete daily goals.</li>
                            <li>Create custom equipment, fields, and tags.</li>
                            <li>Create exercises with how many fields you want, even custom ones.</li>
                            <li>Do workouts with a simple and minimal interface.</li>
                            <li>Access a pre-made list of exercises and workouts, save them and edit you copy as you want</li>
                            <li>See all goals in the dashboard and edit the layout of it</li>
                        </ul>
                    </div> 
                </div>
                <div className={styles["project-info-block"]}>
                    <div className={styles['info-block-title']}>
                        <h3>Planned features</h3>
                    </div>
                    <div className={styles['info-block-description']}>
                        <ul>
                            <li>Auth and cloud back-ups</li>
                            <li>Plan workouts ahead and make </li>
                            <li>Share workouts and exercises</li>
                            <li>Community tab with posts, comments, likes, etc.</li>
                            <li>Better profiles with friend lists</li>
                            <li>Achievements</li>
                            <li>A react-native bersion</li>
                        </ul>
                    </div> 
                </div>
                
                <div className={styles.commits}>
                    <h4>Last 3 commits</h4>
                    <Commits repo={'fit-tracker'} />
                </div>    
            </div>   
            <div className={styles.summary}>
                <button className={styles['summary-button']}>Github</button>
                <button className={styles['summary-button']}>Try it</button>
                <button className={styles['summary-button']} onClick={()=>openGallery(ImageLibrary)}>Gallery</button>
                <div className={styles.technologies}>
                    <div className={styles.technology}>
                        <img className='icon'src="https://stefan0712.github.io/portfolio/icons/js.png" alt=""></img>
                        <div className='icon-name'>JavaScript</div>
                    </div>
                    <div className={styles.technology}>
                        <img className='icon'src="https://stefan0712.github.io/portfolio/icons/html.png" alt=""></img>
                        <div className='icon-name'>HTML</div>
                    </div>
                    <div className={styles.technology}>
                        <img className='icon'src="https://stefan0712.github.io/portfolio/icons/css.png" alt=""></img>
                        <div className='icon-name'>CSS</div>
                    </div>
                    <div className={styles.technology}>
                        <img className='icon'src="https://stefan0712.github.io/portfolio/icons/react.png" alt=""></img>
                        <div className='icon-name'>React</div>
                    </div>
                    <div className={styles.technology}>
                        <img className='icon'src="https://stefan0712.github.io/portfolio/icons/redux.png" alt=""></img>
                        <div className='icon-name'>Redux</div>
                    </div>
                    <div className={styles.technology}>
                        <img className='icon'src="https://stefan0712.github.io/portfolio/icons/react-router.png" alt=""></img>
                        <div className='icon-name'>React Router</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FitnessApp;