import styles from '../../Project.module.css';
import { featuresList } from './featuresList';
import { useState } from 'react';
import Gallery from './galleryComponent';

const Features = () => {

    const [currentFeature, setCurrentFeature] = useState(featuresList[0])
    return ( 
        <div className={styles.featuresPage}>
            <div className={styles.features}>
                {featuresList.map((item, index)=><button key={'Feature-'+index} onClick={()=>setCurrentFeature(item)} className={`${styles.featureButton} ${currentFeature.name === item.name ? styles.selected : ''}`}>{item.name}</button>)}
            </div>
            <div className={styles.featureContent}>
                <div className={styles.featureInfo}>
                    <h3>{currentFeature.name}</h3>
                    <p className={styles.description}>{currentFeature.description}</p>
                </div>
                <div className={styles.featureGalleryContainer}>
                    <Gallery images={currentFeature.photos} />
                </div>
            </div>
            
        </div>
     );
}
 
export default Features;