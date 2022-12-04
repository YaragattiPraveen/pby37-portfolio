import { motion } from 'framer-motion'
import React from 'react'
import contact from '../../Assests/contact.jpg'
import '../Contact/contact.css'
import { Email } from './email'

const imgAnimate = {
    offscreen: { x: -600 },
    onscreen: { x: 0 },
}

const divAnimate = {
    offscreen: { x: 600 },
    onscreen: { x: 0 },
}
const Contact = () => {
    
    return (
        <div className='container contact-section' id='Contacts'>
            <motion.div initial="offscreen" whileInView="onscreen"
                viewport={{ once: false, amount: 0.1 }} className="row">
                <motion.div variants={imgAnimate} transition={{
                    duration: 1,
                    type: 'spring',
                    bounce: 0.4
                }} className='col-xl-5 col-lg-5 col-md-5 col-sm-5'>
                    <div className="contact-form-image">
                        <img src={contact} alt="contact-img" />
                    </div>
                </motion.div>
                <motion.div variants={divAnimate} transition={{
                    duration: 1,
                    type: 'spring',
                    bounce: 0.4
                }} className='col-xl-7 col-lg-7 col-md-7 col-sm-7'>
                    <div className="contact-form-design">
                        <div className="text-center">
                            <h5>Contact Me</h5>
                        </div>
                        <Email/>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Contact