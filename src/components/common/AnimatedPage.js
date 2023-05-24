import React from 'react';
import { motion } from "framer-motion";


const AnimatedPage = ({ children }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit="exit"
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </>
    )
}

export default AnimatedPage