import React from 'react'
import "./HeroSection.css"
import { motion } from "framer-motion"
import {NavLinks} from "../Navbar/NavbarElements"

function HeroSection (){
    return(
        <div className = "hero-container">
            <h1>Darryl Sullivan</h1>
            <p>Check out my latest projects</p>
            <div className = "hero-btns">
                <motion.button
                    whileHover={{ 
                        scale: 1.5, 
                    }}
                    animate={{ rotate: 360 }}
                        transition={{ duration: 1 }}
                        size={150}
                        background={"transparent"}
                        radius={30}
                    whileTap={{ scale: 0.9 }}
                >
                    <NavLinks to="/projects">Projects</NavLinks>
                </motion.button>
            </div>
        </div>
    )
}

export default HeroSection