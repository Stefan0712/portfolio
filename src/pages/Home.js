import { motion } from "motion/react";


const Home = ({changeTheme, themes, currentTheme}) => {
    return ( 
        <div className="home-page" id="home">
            <motion.div 
                    initial={{ opacity: 0, x: -100 }} 
                    whileInView={{ opacity: 1, x: 0 }}  
                    exit={{ opacity: 0, x: -100 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}  
                      className="left">
                <h1>VLADULESCU STEFAN</h1>
                <h2>Your new Junior Web Developer</h2>
            </motion.div>
            <div className="right">
                {themes?.map((theme)=>(
                    <motion.div 
                    initial={{ opacity: 0, x: 100 }} 
                    whileInView={{ opacity: 1, x: 0 }}  
                    exit={{ opacity: 0, x: -100 }}
                    viewport={{ once: false, amount: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}  
                      className="theme" onClick={()=>changeTheme(theme)} style={{backgroundImage: `url(${theme.background})`}}>
                        <h2>{theme.name}</h2>
                    </motion.div>
                ))}
                
            </div>
        </div>
     );
}
 
export default Home;