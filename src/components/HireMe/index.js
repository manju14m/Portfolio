import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

export default function Hire() {

    useEffect(() => {
        AOS.init({
            duration: 500
        });
    }, []);

    return (
        <div className="hire" >
            <h2 data-aos={"zoom-in"} data-aos-duration="300">I Am Available For Freelancer<span style={{ color: "chocolate" }}> !</span></h2>
            <a href="#contact" data-aos={"fade-up"} data-aos-duration="300">Contact Me
            </a>
        </div>
    )
}



