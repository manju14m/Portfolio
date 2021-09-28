import { makeStyles } from "@material-ui/core/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import validation from "./functions/validation";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(() => ({
  loading: {
    display: "flex",
    alignItems: "center",
    color: "white",
    height: "40px",
    padding: "0 30%",
  },
  error: {
    color: "red",
    fontSize: "0.8em",
  },
}));

export default function Contact() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    mail: "",
    phone_number: "",
    message: "",
  });
  const [error, setError] = useState({});
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  // sending user request to mail

  const sendRequest = (event) => {
    event.preventDefault();
    let err = validation(userData);
    if (Object.keys(err).length > 0) {
      setError(err);
      return;
    }
    setError(err);
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        {
          from_name: userData.name,
          to_name: "Manju",
          message: userData.message,
          phone_number: userData.phone_number,
          email: userData.mail,
          reply_to: process.env.REACT_APP_SEND_TO,
        },
        process.env.REACT_APP_USER
      )
      .then(
        (res) => {
          if (res.text === "OK") {
            enqueueSnackbar("Your message has been sent successfully", {
              variant: "success",
            });
            setLoading(false);
          }
        },
        (err) => {
          setLoading(false);
          console.log(err);
        }
      );

    setUserData({
      name: "",
      mail: "",
      phone_number: "",
      message: "",
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  const disable =
    userData.name.length === 0 ||
    userData.mail.length === 0 ||
    userData.phone_number.length === 0 ||
    userData.message.length === 0;

  return (
    <div id="contact">
      <div className="heading">
        <h2 data-aos={"fade-right"} data-aos-duration="300">
          CONTACT
        </h2>
        <span
          className="span"
          data-aos={"fade-left"}
          data-aos-duration="300"
        ></span>
      </div>
      <div className="request" data-aos={"fade-up"} data-aos-duration="300">
        <p>Would you like to work with me? Sounds Good!</p>
        <p>Please leave your details below or Whatsapp Me</p>
      </div>

      <div className="social-media">
        <a
          data-aos={"fade-up"}
          data-aos-duration="500"
          href="https://www.linkedin.com/in/manjunatha-m-b1647a109"
          rel="noreferrer"
          target="_blank"
        >
          <SiLinkedin className="linkedin" />
        </a>
        <a
          data-aos={"fade-up"}
          data-aos-duration="700"
          href="https://github.com/manju14m"
          rel="noreferrer"
          target="_blank"
        >
          <SiGithub className="github" />
        </a>
        <a
          data-aos={"fade-up"}
          data-aos-duration="900"
          href="mailto:manju14m@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <SiGmail className="mail" />
        </a>
      </div>
      <div
        className="contact-form"
        data-aos={"fade-up"}
        data-aos-duration="500"
      >
        <form className="form">
          <input
            type="text"
            placeholder="Name *"
            name="name"
            onChange={handleChange}
            value={userData.name}
            className="text1"
          />
          <p className={classes.error}> {error.name ? error.name : <br />} </p>

          <input
            type="email"
            placeholder="Email *"
            name="mail"
            onChange={handleChange}
            value={userData.mail}
          />
          <p className={classes.error}> {error.mail ? error.mail : <br />} </p>

          <input
            type="number"
            placeholder="Phone Number *"
            onChange={handleChange}
            value={userData.phone_number}
            name="phone_number"
            max="10"
          />
          <p className={classes.error}>
            {" "}
            {error.phone_number ? error.phone_number : <br />}{" "}
          </p>

          <textarea
            style={{ height: "80px" }}
            type="text"
            onChange={handleChange}
            value={userData.message}
            placeholder="Your Message *"
            name="message"
          ></textarea>
          <p className={classes.error}>
            {" "}
            {error.message ? error.message : <br />}{" "}
          </p>

          <button
            type="submit"
            onClick={sendRequest}
            className={classes.loading}
            disabled={disable}
          >
            {loading ? <CircularProgress style={{ color: "white" }} /> : "send"}
          </button>
        </form>
      </div>
    </div>
  );
}
