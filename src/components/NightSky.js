
import { useState, useEffect } from "react";


const NightSky = ({currentTheme}) => {
    // Use state to track when the stars and moon elements are ready
  const [elementsReady, setElementsReady] = useState(false);

  useEffect(() => {
    // Function to initialize parallax effect
    const parallaxEffect = (event) => {
      const stars = document.querySelectorAll('.star');
      const moon = document.querySelector('.moon');

      // Ensure the elements are available
      if (stars.length > 0 && moon) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        stars.forEach(star => {
          const offsetX = (star.offsetLeft - mouseX) * 0.05;  // Adjust parallax strength
          const offsetY = (star.offsetTop - mouseY) * 0.05;    // Adjust parallax strength
          star.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });

        const moonOffsetX = (moon.offsetLeft - mouseX) * 0.1;
        const moonOffsetY = (moon.offsetTop - mouseY) * 0.1;
        moon.style.transform = `translate(${moonOffsetX}px, ${moonOffsetY}px)`;
      }
    };

    // Function to check if the elements are ready
    const checkElementsReady = () => {
      const stars = document.querySelectorAll('.star');
      const moon = document.querySelector('.moon');
      if (stars.length > 0 && moon) {
        setElementsReady(true);
      }
    };

    // Check elements' readiness on mount or when the theme changes
    checkElementsReady();

    // Add event listener for the parallax effect when the "Galaxy" theme is active
    if (currentTheme.name === "Galaxy" && elementsReady) {
      document.addEventListener('mousemove', parallaxEffect);
    }

    // Cleanup the event listener when the component unmounts or theme changes
    return () => {
      document.removeEventListener('mousemove', parallaxEffect);
    };
  }, [currentTheme, elementsReady]);  // Re-run the effect whenever the currentTheme or elementsReady changes

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