import React, { useState, useEffect } from "react";


const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            setShowScrollTopButton(true);
        } else {
            setShowScrollTopButton(false);
        }
        });
    }, []);

    const scrollTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };
    return (
        <div>
        
        </div>
    );
    };

export default ScrollToTop;
