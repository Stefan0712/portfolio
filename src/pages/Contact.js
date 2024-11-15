import { useState } from "react";
import Minigame from "../components/Minigame";


const Contact = () => {
    const [images, setImages] = useState(['/assets/meme1.png','/assets/meme2.png','/assets/meme3.png','/assets/meme4.png'])
    const [currentItem, setCurrentItem] = useState(0)


    const nextItem = () =>{
        if(currentItem < images.length - 1){
            setCurrentItem((item)=>item+=1)
        }
    }
    const prevItem = () =>{
        if(currentItem > 0){
            setCurrentItem((item)=>item-=1)
        }
    }
    return ( 
        <div className="contact-page" id="contact">
            
            <div className="minigame-container">
                <Minigame />
            </div>
            <div className="contacts">
                <div className="links">
                    
                    <a href="https://github.com/Stefan0712" target="_blank">
                        <img className="icon" src='/icons/github.png' alt='github' />
                    </a>
                    <a href="https://www.linkedin.com/in/stefan-vladulescu/" target="_blank">
                        <img className="icon" src='/icons/linkedin.png' alt='linkedin' />
                    </a>
                    <a href="mailto:s.vladulescu@gmail.com" target="_blank">
                        <img className="icon" src='/icons/mail.png' alt='mail' />
                    </a>
                    
                </div>
                <div className="contact-form">
                    <form>
                        <fieldset>
                            <label>Email*</label>
                            <input type="email" name="email" id="email" required></input>
                        </fieldset>
                        <fieldset>
                            <label>Name*</label>
                            <input type="text" name="name" id="name" required></input>
                        </fieldset>
                        <fieldset>
                            <label>Subject</label>
                            <input type="text" name="subject" id="subject"></input>
                        </fieldset>
                        <fieldset>
                            <label>Message*</label>
                            <textarea name="message" id="message" style={{height: '100px'}} required></textarea>
                        </fieldset>
                        <button className="contact-form-submit-button">Send</button>
                    </form>
                </div>
            </div>

        </div>
     );
}
 
export default Contact;