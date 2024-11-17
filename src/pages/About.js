import { motion } from "framer-motion";


const About = () => {


 
    return ( 
        <div className="about-page" id="about">
            
            <motion.div 
                    initial={{ opacity: 0, x: -100 }} 
                    whileInView={{ opacity: 1, x: 0 }}  
                    exit={{ opacity: 0, x: -100 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}  
                     className="about-section top-section">
                <div className="header">ABOUT ME</div>
                    <div className="about-content">
                        <p>
                        My name is <b>Stefan Vladulescu</b>, currently living in <b>Tulcea, 
                        Romania</b>, graduated <b>Management at Ovidius University Constanta</b>I am also a self-taught web developer. 
                        While my degree is in Management, my passion for technology and the web inspired me to pursue web development.
                        </p>
                </div>
            </motion.div>
            <motion.div 
                    initial={{ opacity: 0, x: 100 }} 
                    whileInView={{ opacity: 1, x: 0 }}  
                    exit={{ opacity: 0, x: -100 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}  
                     className="about-section top-section">
                <div className="header">EDUCATION</div>
                    <div className="about-content">
                        
                        <p>I attended <b>Colegiul Economic “Delta Dunării" Tulcea</b> from 2015 to 2019, then I continued at Ovidius University Constanta in 2020, where I earn my Bachelor's degree in Management in 2023. </p>
                        <div className="languages">
                            <div className="language">
                                <div className="language-name">Romanian</div>
                                <div className="language-graph"><div className="line"></div><div className="line"></div><div className="line"></div><div className="line"></div></div>
                                <div className="language-level">Native</div>
                            </div>
                            <div className="language">
                                <div className="language-name">English</div>
                                <div className="language-graph"><div className="line"></div><div className="line"></div><div className="line"></div></div>
                                <div className="language-level">Advanced</div>
                            </div>
                            <div className="language">
                                <div className="language-name">Japanese</div>
                                <div className="language-graph"><div className="line"></div></div>
                                <div className="language-level">Basic</div>
                            </div>
                        </div>
                        
                </div>
            </motion.div>
            <motion.div 
                    initial={{ opacity: 0, x: -100 }} 
                    whileInView={{ opacity: 1, x: 0 }}  
                    exit={{ opacity: 0, x: -100 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}  
                     className="about-section">
                <div className="header">CERTIFICATES</div>
                    <div className="about-content courses">
                        <div className="course">
                            <div className="course-name">
                                <p>Digital Marketing</p>
                            </div>
                            <div className="course-meta">
                                <p>Hubspot Academy</p>
                                <p>Apr 2024</p>
                            </div>
                        </div>
                        <div className="course">
                            <div className="course-name">
                                <p>Digital Marketing and E-Commerce</p>
                            </div>
                            <div className="course-meta">
                                <p>Google</p>
                                <p>Jul 2024</p>
                            </div>
                        </div>
                        
                        <div className="course">
                            <div className="course-name">
                                <p>Google UX Design Specialization</p>
                            </div>
                            <div className="course-meta">
                                <p>Coursera</p>
                                <p>Dec 2023</p>
                            </div>
                        </div>
                        <div className="course">
                            <div className="course-name">
                                <p>The Web Developer Bootcamp</p>
                            </div>
                            <div className="course-meta">
                                <p>Udemy</p>
                                <p>Mar 2023</p>
                            </div>
                        </div>
                        <div className="course">
                            <div className="course-name">
                                <p>Digital Marketing Fundamentals</p>
                            </div>
                            <div className="course-meta">
                                <p>Google</p>
                                <p>Apr 2022</p>
                            </div>
                        </div>
                        <div className="course">
                            <div className="course-name">
                                <p>PL-900 Microsoft Power Platform Fundamentals</p>
                            </div>
                            <div className="course-meta">
                                <p>Microsoft</p>
                                <p>Nov 2021</p>
                            </div>
                        </div>
                </div>
            </motion.div>
            <motion.div 
                    initial={{ opacity: 0, x: 100 }} 
                    whileInView={{ opacity: 1, x: 0 }}  
                    exit={{ opacity: 0, x: -100 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}  
                     className="about-section">
                <div className="header">EXPERIENCE</div>
                    <div className="about-content">
                    <p>
                        Although I do not have any formal work experience, I believe I have developed a strong foundation in web development. 
                        Most of my knowledge comes from practical projects. I have always believed that the best way to learn development is by doing it. 
                        I started with the basics while preparing for the Romanian National ICT Olympiad. Later, 
                        I expanded my skills through <a href="https://www.freecodecamp.org/" target="_blank">FreeCodeCamp</a> and <a href="https://www.codecademy.com/" target="_blank">CodeCademy</a>, which helped me improve my proficiency in HTML, CSS, and JavaScript. 
                        For React, I followed <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank">Web Dev Bootcamp</a> on Udemy and worked through <a href="https://www.theodinproject.com/" target="_blank">The Odin Project</a>. 
                        There, I learned React.js for frontend development, Express.js for backend, and MongoDB for databases.
                        Since then, I have continued to build various projects. Below, you can see my most recent and notable ones.
                    </p>

                </div>
            </motion.div>
            
        </div>
     );
}
 
export default About;