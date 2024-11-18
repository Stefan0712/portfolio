import React, { useEffect } from "react";

const SakuraPetals = () => {
    useEffect(() => {
        const container = document.querySelector(".petals-container");

        const createPetal = (noDelay = false) => {
            
            const petal = document.createElement("div");
            petal.classList.add("petal");

            const randomLeft = Math.random() * 100; 
            const randomDelay = noDelay ? 0 : Math.random() * 5;
            const randomDuration = Math.random() * 5 + 5; 

            petal.style.left = `${randomLeft}%`;
            petal.style.top = '-30px'
            petal.style.animationDelay = `${randomDelay}s`;
            petal.style.animationDuration = `${randomDuration}s`;

            container.appendChild(petal);

            petal.addEventListener("animationend", () => {
                petal.remove();
            });
        };
        for (let i = 0; i < 10; i++) {
            createPetal(true);
        }
        const intervalId = setInterval(createPetal, 1000);  

        const handleMouseMove = (e) => {
            const petals = document.querySelectorAll(".petal");
            petals.forEach((petal) => {
                const petalRect = petal.getBoundingClientRect();
                const mouseX = e.clientX;
                const mouseY = e.clientY;

                const petalX = petalRect.left + petalRect.width / 2;
                const petalY = petalRect.top + petalRect.height / 2;

                const distanceX = petalX - mouseX;
                const distanceY = petalY - mouseY;
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

                if (distance < 100) {
                    const angle = Math.atan2(distanceY, distanceX);
                    const moveX = Math.cos(angle) * 20; 
                    const moveY = Math.sin(angle) * 20;
                    petal.style.transform = `translate(${moveX}px, ${moveY}px)`;
                }
            });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            clearInterval(intervalId);
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <div className="petals-container"></div>;
};

export default SakuraPetals;
