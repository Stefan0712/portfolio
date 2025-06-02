import styles from '../../Project.module.css';
import { useEffect, useState } from 'react';
import {IconLibrary} from '../../../images/IconLibrary';



const Gallery = ({images}) => {

    const [selectedImage, setSelectedImage] = useState(images[0]);


    useEffect(()=>{
        setSelectedImage(images[0])
    },[images])

    const prevImage = () =>{
        const index = images.indexOf(selectedImage);
        if(index > 1){
            setSelectedImage(images[index-1])
        }
    }
    const nextImage = () =>{
        const index = images.indexOf(selectedImage);
        if(index < images.length - 1){
            setSelectedImage(images[index+1])
        }
    }

    return ( 
        <div className={styles.galleryComponent}>
            <button onClick={prevImage} className={styles.galleryNavigationButton}><img src={IconLibrary.leftArrow} alt=''/></button>
            <div className={styles.imageContainer}>
                <img src={selectedImage.src} alt='' className={styles.galleryCurrentImage} />
                <p>{selectedImage.title}</p>
            </div>
            <button onClick={nextImage} className={`${styles.galleryNavigationButton} ${styles.rightNavButton}`}><img src={IconLibrary.rightArrow} alt=''/></button>
        </div>
     );
}
 
export default Gallery;