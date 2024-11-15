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
                        Romania</b>, graduated <b>Management at Ovidius University Constanta</b>, 
                        and a self-taught web developer. While the subject I graduated was management, 
                        my passion for technology and the web motivated me to get into web development.
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
                        
                        <p>I have been to <b>Colegiul Economic “Delta Dunarii” Tulcea</b> from 2015 to 2019, then I continued at Ovidius University Constanta in 2020, where I for my bachelor in Management in 2023. </p>
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
                                <p>Digital Marketing and E-Commerce</p>
                            </div>
                            <div className="course-meta">
                                <p>Google</p>
                                <p>Jul 2024</p>
                            </div>
                        </div>
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
                                <p>Google UX Design Specialization</p>
                            </div>
                            <div className="course-meta">
                                <p>Coursera</p>
                                <p>Dex 2023</p>
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
                        Despite not having any relevant work experience, I strongly believe that I was able to get a strong grasp of web development. 
                        99% of my knowledge comes from practical projects. I always thought that the best way to learn development is by doing it. 
                        This is why that after getting the basics while preparing for the Romanian National ICT Olympiad, 
                        I decided to continue with <a href="https://www.freecodecamp.org/" target="_blank"></a>FreeCodeCamp and <a href="https://www.codecademy.com/" target="_blank">CodeCademy</a> to improve them. Those two helped me to get better at using HTML, CSS and JS, 
                        and for React I went with a <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank">Web Dev Bootcamp</a> on Udemy and <a href="https://www.theodinproject.com/" target="_blank">The Odin Project</a>, where I learn Reactjs as frontend, and ExpressJs for backend and MongoDb. From that point, I just kept building different projects.
                        Bellow you can see the most recent and notable ones.
                    </p>

                </div>
            </motion.div>
            
        </div>
     );
}
 
export default About;