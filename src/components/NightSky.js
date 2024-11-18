
import { useState, useEffect } from "react";


const NightSky = ({currentTheme}) => {
  const [elementsReady, setElementsReady] = useState(false);

  useEffect(() => {
    const parallaxEffect = (event) => {
      const stars = document.querySelectorAll('.star');
      const moon = document.querySelector('.moon');

      if (stars.length > 0 && moon) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        stars.forEach(star => {
          const offsetX = (star.offsetLeft - mouseX) * 0.05;  
          const offsetY = (star.offsetTop - mouseY) * 0.05;    
          star.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });

        const moonOffsetX = (moon.offsetLeft - mouseX) * 0.1;
        const moonOffsetY = (moon.offsetTop - mouseY) * 0.1;
        moon.style.transform = `translate(${moonOffsetX}px, ${moonOffsetY}px)`;
      }
    };

    const checkElementsReady = () => {
      const stars = document.querySelectorAll('.star');
      const moon = document.querySelector('.moon');
      if (stars.length > 0 && moon) {
        setElementsReady(true);
      }
    };

    checkElementsReady();

    if (currentTheme.name === "Galaxy" && elementsReady) {
      document.addEventListener('mousemove', parallaxEffect);
    }

    return () => {
      document.removeEventListener('mousemove', parallaxEffect);
    };
  }, [currentTheme, elementsReady]);  

    return ( 
        <div className="animated-background">
          <div className="moon"></div>
          <div className="stars-container">
            {Array.from({ length: 100 }).map((_, index) => (
              <div key={index} className="star" style={{
                left: `${Math.random() * 100}%`,   
                top: `${Math.random() * 100}%`,    
              }}></div>
            ))}
          </div>
        </div>
     );
}
 
export default NightSky;