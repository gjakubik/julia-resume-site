/** @jsxImportSource @emotion/react */
import { motion } from 'framer-motion';

import { colors } from '../../constants';
import './style.css'

const imageWidth = '100px';
const buttonbg = colors.peach;

function ContactButton({link, image}) {

    return (
        <a href={link} className="linkedin-text">
            <motion.div 
                className="contact-button-container" 
                css={{backgroundColor: buttonbg}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}    
            >
                <img width={imageWidth} src={image} alt="LinkedIn" className="linkedin-icon" />
            </motion.div>
        </a>
    )
}

export default ContactButton;