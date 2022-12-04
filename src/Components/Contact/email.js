import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="contact-form">
                <label className='form-label'>Name</label>
                <input className='form-control' type="text" name="user_name" required />
            </div>

            <div className="contact-form">
                <label className='form-label'>Email</label>
                <input className='form-control' type="email" name="user_email" required />
            </div>

            <div className="contact-form">
                <label className='form-label'>Message</label>
                <textarea className='form-control' cols="30" rows='4' name="message" required />
            </div>

            <div className="contact-form">
                <input className='form-control' type="submit" value="Send" />
            </div>
        </form>
    );
};