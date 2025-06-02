import styles from '../../Project.module.css';
import GithubIcon from '../../../images/github.png';



const Overview = () => {
    return ( 
        <div className={styles.overviewPage}>
            <div className={styles.top}>
                <div className={styles.description}>
                    <h3>Description</h3>
                    <p>EasyFit is a mobile web app design to allow users to manage their fitness goals easy and quick. Having a simple and clean interface, it can be used to log goals, track progress, and manage activities, such as workouts and exercises.</p>
                    <p>The project started as just a simple project to showcase on my portfolio, but now I am working on making it a full working app that I will use myself and that others can use. It's meant to be used on a mobile device so there is no desktop layout, and for now it is using PWA to be installed locally.</p>
                    <p>The app is made using React, React-Routes, IndexedDB, Typescript, and Redux making it possible to use the app 100% offline, with the option to use the API for exploring new exercises and workouts, backup your data, and in the future the user will be able to import locally meal plans, activity/workout plans, etc.</p>
                    <p>It has all core features mostly working as expected, with most components being reworked, by both improving the UI and optimizing the code. At first I used only JS, but now I started to add Typescript across the app to write safer code, and to make sure that it works flawlessly with the new API that I am working on.</p>
                </div>
                <div className={styles.right}>
                    <h3>Technologies</h3>
                    <ul>
                        <li>ReactJs</li>
                        <li>React-Router</li>
                        <li>HTML, JavaScript, CSS</li>
                        <li>Redux</li>
                        <li>Typescript</li>
                        <li>IndexedDB</li>
                    </ul>
                    <div className={styles.buttons}>
                        <a href="https://stefan0712.github.io/fitness-app/" target='_blank' className={styles['project-button']}>
                            <img src={GithubIcon} alt=''></img> Try it live
                        </a>
                        <a href="https://github.com/Stefan0712/fitness-app" target='_blank' className={styles['project-button']}>
                            <img src={GithubIcon} alt=''></img> Repository
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Overview;