import { motion } from "motion/react";


const MobileProjects = () => {

    const projects = [
        {   
            name: 'Fitness App', 
            description: 'EasyFit is a fitness tracker made with React, Redux and Typescript. You can create custom items and use them for creating custom exercises/workouts, or just use default items. You can log goals, food, exercises, and workout.',
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
            description: 'An Event management app. You can create or join events, assign tasks to users, rules, and schedule. It uses React for front-end, Leaflet for maps, Express and MongoDB for the back-end.',
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
            name: 'Pomodoro', 
            description: 'A simple pomodoro app that allows users to also track tasks. You can edit the duration of sessions, the frequency of long breaks, add, edit, remove tasks, hide/show UI components, and keep track of work sessions.',
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