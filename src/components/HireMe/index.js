import { Link } from "react-scroll";

export default function Hire() {


  return (
    <div className="hire">
      <h2 data-aos={"zoom-in"}>
        I Am Available For Freelancer
        <span style={{ color: "chocolate" }}> !</span>
      </h2>
      <Link
        to="contact"
        data-aos={"fade-up"}
        activeClass="active"
        spy={true}
        smooth={true}
        exact="true"
        offset={-30}
        duration={300}
      >
        Contact Me
      </Link>
    </div>
  );
}
