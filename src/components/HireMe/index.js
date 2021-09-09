import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-scroll";

export default function Hire() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div className="hire">
      <h2 data-aos={"zoom-in"} data-aos-duration="300">
        I Am Available For Freelancer
        <span style={{ color: "chocolate" }}> !</span>
      </h2>
      <Link
        to="contact"
        data-aos={"fade-up"}
        data-aos-duration="300"
        activeClass="active"
        spy={true}
        smooth={true}
        exact="true"
        offset={-30}
        duration={300}
      >
        Contact Me
      </Link>
      {/* </a> */}
    </div>
  );
}
