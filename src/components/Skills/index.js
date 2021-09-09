import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import webdev from "assets/lottie/webdev.json";
import aws from "assets/media/aws.svg";
import css3 from "assets/media/CSS3.svg";
import expressjs from "assets/media/express.svg";
import firebase from "assets/media/firebase.svg";
import git from "assets/media/git.svg";
import html5 from "assets/media/HTML5.svg";
import javascript from "assets/media/javascript.svg";
import mongodb from "assets/media/mongodb.svg";
import nodejs from "assets/media/nodejs-icon.svg";
import reactjs from "assets/media/React.svg";
import redux from "assets/media/redux.svg";
import sass from "assets/media/sass.svg";
import typescript from "assets/media/Typescript.svg";
import GreetingLottie from "components/GreetingLottie";

const skills = [
  {
    image: html5,
    title: "HTML5",
  },
  {
    image: css3,
    title: "CSS3",
  },
  {
    image: sass,
    title: "Sass",
  },
  {
    image: javascript,
    title: "JavaScript",
  },
  {
    image: typescript,
    title: "TypeScript",
  },
  {
    image: reactjs,
    title: "ReactJS",
  },
  {
    image: redux,
    title: "Redux",
  },
  {
    image: nodejs,
    title: "NodeJS",
  },
  {
    image: expressjs,
    title: "ExpressJS",
  },
  {
    image: mongodb,
    title: "MongoDB",
  },
  {
    image: firebase,
    title: "Firebase",
  },
  {
    image: aws,
    title: "aws",
  },
  {
    image: git,
    title: "Git",
  },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div id="skills">
      <div className="heading">
        <h2 data-aos={"fade-right"} data-aos-duration="300">
          WHAT I DO
        </h2>
        <span
          className="span"
          data-aos={"fade-left"}
          data-aos-duration="300"
        ></span>
        <p data-aos={"fade-up"} data-aos-duration="500">
          CRAZY FRONT-END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
        </p>
      </div>
      <div className="content">
        <div className="lottie" data-aos={"fade-up"} data-aos-duration="500">
          <GreetingLottie animationData={webdev} />
        </div>
        <div className="skillsContainer">
          <div>
            {skills.map((item, index) => (
              <div
                className="skill"
                key={index}
                data-aos={"fade-up"}
                data-aos-duration="500"
              >
                <p>{item.title}</p>
                <img src={item.image} alt={item.title} />
              </div>
            ))}
          </div>
          <div data-aos={"fade-up"} data-aos-duration="500">
            <p>
              Develop highly interactive Front end / User Interfaces for your
              web applications.
            </p>
            <p>Integration of third party service such as Firebase and aws.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
