import React from 'react'
import contact from '../../Assests/contact.jpg'
import '../Contact/contact.css'

const Contact = () => {
  return (
    <div className='container contact-section' id='Contacts'>
        <div className="row">
            <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5'>
                <div className="contact-form-image">
                    <img src={contact} alt="contact-img"/>
                </div>
            </div>
            <div className='col-xl-7 col-lg-7 col-md-7 col-sm-7'>
                <div className="contact-form-design">
                    <div className="text-center">
                        <h5>Contact Me</h5>
                    </div>
                    <form>
                        <div className="contact-form">
                            <label className='form-label'>Name</label>
                            <input type="text" className='form-control'/>
                        </div>

                        <div className="contact-form">
                            <label className='form-label'>E-mail</label>
                            <input type="Email" className='form-control'/>
                        </div>
                        <div className="contact-form">
                            <label className='form-label'>Message</label>
                            <textarea className='form-control' cols="30" rows="4"></textarea>
                        </div>

                        <div className="button-submit">
                            <p>Send</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact