import { motion } from "motion/react";


const MobileProjects = () => {

    const projects = [
        {   
            name: 'Fitness App', 
            description: 'An app designed to simplify tracking your activity. You can easily view, create, edit, and delete workouts, logs, activities, and goals. The app was built using a mobile-first approach. The main purpose of creating this app was to learn how to use Redux Store, so the UI was not the main focus yet.',
            git: 'https://github.com/Stefan0712/fitness-app',
            technologies: [
                { name: 'JavaScript', src: 'js.png' },
                { name: 'HTML', src: 'html.png' },
                { name: 'CSS', src: 'css.png' },
                { name: 'React', src: 'react.png' },
                { name: 'Redux', src: 'redux.png' },
                { name: 'React Router', src: 'react-router.png' }
            ]
        },
        {   
            name: 'Event Management App', 
            description: 'This app consists of two parts: the frontend, built with ReactJS, React Router, and styled using pure CSS, and the backend, a simple Express.js app with MongoDB as the database. Users can fully create, edit, view, and delete events, lists, and tasks. It includes basic authentication and authorization, so only the author of an event or task can delete it.',
            git: 'https://github.com/Stefan0712/event-management-app',
            technologies: [
                { name: 'JavaScript', src: 'js.png' },
                { name: 'HTML', src: 'html.png' },
                { name: 'CSS', src: 'css.png' },
                { name: 'React', src: 'react.png' },
                { name: 'MongoDB', src: 'mongo.png' },
                { name: 'React Router', src: 'react-router.png' }
            ]
        },
        {   
            name: 'YelpCamp', 
            description: 'YelpCamp is designed to be the Yelp equivalent for campgrounds. This project was created during my completion of The Web Developer Bootcamp on Udemy. The UI is built primarily with Bootstrap. The app itself uses Express.js and EJS. Authentication is implemented using Passport. Images are stored with Cloudinary, and MongoDB is used as the database.',
            git: 'https://github.com/Stefan0712/YelpCamp',
            technologies: [
                { name: 'JavaScript', src: 'js.png' },
                { name: 'HTML', src: 'html.png' },
                { name: 'CSS', src: 'css.png' },
                { name: 'EJS', src: 'ejs.png' },
                { name: 'Express.js', src: 'express.png' },
                { name: 'MongoDB', src: 'mongo.png' },
                { name: 'Leaflet', src: 'leaflet.png' }
            ]
        },
        {   
            name: 'Simple Project Tracker', 
            description: 'This app is still a work in progress with minimal functionality at the moment. Despite the abundance of productivity apps for task or project tracking, they are often too complex, require many clicks for simple actions, and are either paid or filled with ads. They fail to be simple and quick to use. I aim to create an app that allows users to easily access notes, tasks, projects, and lists from a single screen, and quickly create, edit, or delete them.',
            git: 'https://github.com/Stefan0712/simple-project-tracker',
            technologies: [
                { name: 'JavaScript', src: 'js.png' },
                { name: 'HTML', src: 'html.png' },
                { name: 'CSS', src: 'css.png' },
                { name: 'React', src: 'react.png' },
                { name: 'Redux', src: 'redux.png' },
                { name: 'React Router', src: 'react-router.png' }
            ]
        }
    ]
    
    return ( 
        <div className="mobile-projects">
            <motion.h1 
                initial={{ opacity: 0, x: -100 }} 
                whileInView={{ opacity: 1, x: 0 }}  
                exit={{ opacity: 0, x: -100 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }} 
            >Projects</motion.h1>
            {projects.map((project)=>(
                <motion.div 
                initial={{ opacity: 0, x: 100 }} 
                whileInView={{ opacity: 1, x: 0 }}  
                exit={{ opacity: 0, x: -100 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }} 
                className="mobile-project"
                >
                    <div className="mobile-project-header">
                        <h3>{project.name}</h3>
                        <a href={project.git} target="_blank"><img src="https://stefan0712.github.io/portfolio/icons/github.png" className="icon"></img></a>
                    </div>
                    <p>{project.description}</p>
                    <div className="project-techologies-mobile">
                        {project.technologies.map((technology)=>(
                            <div className="technology">
                                <img className="icon" src={"https://stefan0712.github.io/portfolio/icons/"+technology.src}></img>
                                <div className="icon-name">{technology.name}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
     );
}
 
export default MobileProjects;