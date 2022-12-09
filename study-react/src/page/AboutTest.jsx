import React from "react";
import { Outlet } from "react-router-dom";

const AboutTest = () => {
    return (  
        <div>
            <h3>AboutTest입니다</h3>
            <Outlet />
        </div>
    );
}
 
export default AboutTest;