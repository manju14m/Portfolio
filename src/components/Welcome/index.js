import { makeStyles, useTheme } from '@material-ui/core/styles';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';
import { Link } from 'react-scroll';
import Typed from 'react-typed';
import profile from "../../assets/media/profile.jpg";


const useStyles = makeStyles((theme) => ({
    chat: {
        color: '#25d366',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        '&:hover': {
            color: 'white',
            transition: theme.transitions.create(['Color'], {
                duration: theme.transitions.duration.enteringScreen,
            })
        },
    },
    chatContainer: {
        position: 'fixed',
        bottom: '40px',
        right: '10px',
        height: '70px',
        width: '70px',
        borderRadius: '50%',
        zIndex: 1000,
        '&:hover': {
                    backgroundColor: '#25d366',
            transition: theme.transitions.create([' background-color'], {
                duration: theme.transitions.duration.enteringScreen,
            })
        },
        
        [theme.breakpoints.down('xs')]: {
            height: '40px',
            width: '40px',
        },
    },
    typed: {
        fontSize: "1.6rem",
        color: "aqua",
        marginTop: "5px",
    },
}));


export default function Welcome() {

    const classes = useStyles();
    const theme = useTheme()

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);


    const chatUrl = `https://wa.me/${process.env.REACT_APP_PHONE_NUMBER}?text=${process.env.REACT_APP_MESSAGE}`

    return (
        <>
            <div id="welcome">
                <div className="profile">
                    <img src={profile} alt="profile"/>
                </div>
                <div className="header">
                    <h2>Hi, I'm Manju</h2>
                    <Typed className={classes.typed}
                        strings={['Web Developer', 'React Developer', 'MERN Stack Developer']}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                    <div>
                        <a href="https://www.linkedin.com/in/manjunatha-m-b1647a109" target="_blank">
                            <SiLinkedin className="linkedin"/>
                        </a>
                        <a  href="https://github.com/manju14m" target="_blank">
                            <SiGithub className="github"/>
                        </a>
                        <a  href="mailto:manju14m@gmail.com" target="_blank">
                            <SiGmail className="mail"/>
                        </a>
                    </div>

                    <div className="seemore">
                    <Link to="skills">
                        <HiOutlineChevronDoubleDown/>
                    </Link>
                </div>
                </div>
                
            </div>
            
            <div className={classes.chatContainer}>
                <a title="Whatsapp me" href={chatUrl}>
                    <WhatsAppIcon className={classes.chat} />
                </a>
            </div>
        </>
    )
}