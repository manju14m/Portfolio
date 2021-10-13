import projectData from "assets/data/projectsInfo";
import { FaGlobe } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export default function Project() {


  return (
    <div id="projects">
      <div className="heading">
        <h2 data-aos={"fade-right"}>
          PROJECTS
        </h2>
        <span
          className="span"
          data-aos={"fade-left"}
        ></span>
        <br />
      </div>

      <div className="contain">
        {projectData.map(({ name, info, image, TechStack, url }, key) => (
          <section
            className="card"
            data-aos={"fade-right"}
            key={key}
          >
            <img src={image} alt={name} />
            <div>
              <h3>{name}</h3>
              <p>
                {info}
                <br />
                <span>{`Tech Stack: ${TechStack}`}</span>
              </p>
              <span>
                <a href={url} rel="noreferrer" target="_blank">
                  <FaGlobe />
                </a>
                <a
                  href="https://github.com/manju14m"
                  rel="noreferrer"
                  target="_blank"
                >
                  <SiGithub />
                </a>
              </span>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
