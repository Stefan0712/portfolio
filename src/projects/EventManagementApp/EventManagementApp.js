
import styles from './EventManagementApp.module.css';
import Commits from '../../components/Commits';

const EventManagementApp = () => {


    return ( 
        <div className="project event-management-app">
            <h1>Event Management App</h1>
            <p className="project-description">
                The goal of this project was to learn how to use an expressJs backend and mongodb, together with some basic auth. The app features full CRUD capabilities, users being able to create, see, edit, and delete events, tasks, or lists. The database used is a local MongoDB instance, but it was tested with an online cluster.
                The project is separated into two different github repos, one for the frontend and one for the backend. This was made about 8-9 months ago, so expect the UI to be not as polished as I would have wanted it, with the only recent updates being a change of theme across the entire app (I converted the app from a light color palette to a dark one).
                The frontend is made using React, React Router, Leaflet, and Axios, while the backend is made using ExpressJs, Mongoose, Passport and the help of body-parser, cors, dotenv, and passport-local. I had this project hosted, but decided to keep only as github repos because it was not worth paying monthly for the app.
                The app itself is supposed to help anyone to setup and manage events with easy, with a simple system of lists, tasks, and roles. Events can be public, everyone can see and join, or private, only those who already joined or are invited can see the event. People can create lists, in which they can create tasks that can be assigned a user and a due date. Each of them can be edited by any user who
                has the right permissions. There is also a Social section where users can create posts. The whole section is public and everyone can see all the posts and comments, but only the author of that respective post/comment can edit or delete it.
            </p>
            <div className='technologies'>
                

                <div className='technology'>
                    <img className='icon'src="https://stefan0712.github.io/portfolio/icons/js.png" alt=""></img>
                    <div className='icon-name'>JavaScript</div>
                </div>
                <div className='technology'>
                    <img className='icon'src="https://stefan0712.github.io/portfolio/icons/html.png" alt=""></img>
                    <div className='icon-name'>HTML</div>
                </div>
                <div className='technology'>
                    <img className='icon'src="https://stefan0712.github.io/portfolio/icons/css.png" alt=""></img>
                    <div className='icon-name'>CSS</div>
                </div>
                <div className='technology'>
                    <img className='icon'src="https://stefan0712.github.io/portfolio/icons/react.png" alt=""></img>
                    <div className='icon-name'>React</div>
                </div>
                <div className='technology'>
                    <img className='icon'src="https://stefan0712.github.io/portfolio/icons/leaflet.png" alt=""></img>
                    <div className='icon-name'>Leaflet</div>
                </div>
                <div className='technology'>
                    <img className='icon'src="https://stefan0712.github.io/portfolio/icons/react-router.png" alt=""></img>
                    <div className='icon-name'> React Router</div>
                </div>
                <div className='technology'>
                    <img className='icon'src="https://stefan0712.github.io/portfolio/icons/mongo.png" alt=""></img>
                    <div className='icon-name'> MongoDB</div>
                </div>
                <div className='technology'>
                    <img className='icon'src="https://stefan0712.github.io/portfolio/icons/express.png" alt=""></img>
                    <div className='icon-name'>ExpressJs</div>
                </div>
            </div>
            
                 <div className='commits-container'>
                    <h3>Frontend Commits</h3>
                    <Commits repo={'event-management-app-frontend'} />
                </div>
        </div>
     );
}
 
export default EventManagementApp;