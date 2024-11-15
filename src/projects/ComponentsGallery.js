import { useState, useEffect } from "react";


const ComponentsGallery = ({images}) => {

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(()=>{
        setCurrentImage(0)
    },[images])

    const next = () =>{
        if(currentImage < images.length - 1){
            setCurrentImage((image)=>image +=1);
        }
    }
    const prev = () =>{
        if(currentImage > 0){
            setCurrentImage((image)=>image -=1);
        }
    }
    return ( 
        <div className="component-gallery">
            <div className="image-caption">{images[currentImage]?.caption}</div>
            <div className="image-container">
                <img className="gallery-image" src={'/assets'+images[currentImage]?.src} alt=""></img>
            </div>
            <div className="gallery-controls">
                <img src="/icons/arrow-left.svg" alt="" onClick={prev}></img>
                <div className="dots">
                    {images?.map((img, index)=>(<div className={`dot ${currentImage === index ? 'selected-dot' : ''}`}> </div>))}
                </div>
                <img src="/icons/arrow-right.svg" alt="" onClick={next}></img>
            </div>
        </div>
     );
}
 
export default ComponentsGallery;