import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa';
import projectData from '../../assets/data/projectsInfo';





export default function Project() {

    useEffect(() => {
        AOS.init({
            duration: 800
        });
    }, []);

    return (
        <div id="projects">
            <div className="heading">
                <h2 
                    data-aos={"fade-right"} data-aos-duration="300"
                >PROJECTS</h2>
                <span className="span" data-aos={"fade-left"} data-aos-duration="300"></span><br/>
            </div>

            <div className="contain">
                {
                    projectData.map(({ name, info, image, TechStack, url }, key) => (

                        <section className="card" data-aos={"fade-right"} data-aos-duration="300" key={key}>
                            <img src={image} alt={name} />
                            <div>
                                <h3>{name}</h3>
                                <p>{info}
                                    <br />
                                    <span>{`Tech Stack: ${TechStack}`}</span>
                                </p>
                                <a href={url} target="_blank">
                                    <FaGlobe/>
                                </a>
                            </div>
                        </section>

                    ))
                }
            </div>
        </div >
    )
}

