import styles from '../pages/stylings/Projects.module.css';
import CloseIcon from '../images/close.svg';
import { useState } from 'react';
import * as motion from "motion/react-client";

const Gallery = ({closeGallery, images, constraintsRef}) => {


    const [currentImage, setCurrentImage] = useState(0);


    const nextImage = () =>{
        if(currentImage < images.length - 1){
            setCurrentImage(currentImage=>currentImage+1)
        }
    }
    const prevImage = () =>{
        if(currentImage > 0){
            setCurrentImage(currentImage=>currentImage-1);
        }
    }
    const [isAppClosing, setIsAppClosing] = useState(false);


    console.log("Galler.js")
    const handleClose = () =>{
        setTimeout(()=>closeGallery(), 150);
        setIsAppClosing(true);
    }

    return ( 
        <div className={`${styles.gallery} ${isAppClosing ? styles['closing-app'] : ''}`}>
            <div className={styles['project-top-bar']}>
                <h3>Gallery</h3>
                <button onClick={handleClose}>
                    <img src={CloseIcon} className={styles['close-icon']} alt='' />
                </button>
            </div>
            <div className={styles['project-content']}>
                <h1>Gallery</h1>
            </div>
        </div>
    );
}
 
export default Gallery;