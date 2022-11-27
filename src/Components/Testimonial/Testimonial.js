import React from 'react'
import '../Testimonial/Testimonial.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    const data = [
        {
            name: 'Adem',
            position: 'CEO',
            desc: 'Normal distribution of letters, as opposed to using "Content here,  content here", making it look like readable',
            imgUrl: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
        }
    ]

    return (
        <div className="container testimonial-section">

            <div className="about-title">
                <h5>Testimonial</h5>
                <span className="line"></span>
            </div>


        </div>
    )
}

export default Testimonial