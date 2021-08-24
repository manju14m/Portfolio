import React, { useState } from 'react';
import { Link } from 'react-scroll'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'

import SideBar from './Sidebar'


const useStyles = makeStyles((theme) => ({
    drawerOpen: {
        width: 250,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    navitem: {
        display: "flex",
        justifyContent: "flex-end",
        [theme.breakpoints.down(800)]: {
            display: "none",
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "black",
        display: "none",
        alignItems: "center",
        [theme.breakpoints.down(800)]: {
            display: "inline",
            justifyContent: "flex-end",
        },
    },
}));

export default function Navbar() {

    const classes = useStyles()
    const [drawerOpen, setDrawerOpen] = useState(false)

    return (
        <div>
            <div id="navbar">
                <div className={classes.navitem}>
                    <ul className="nav-ul">
                        <li>
                            <Link to="skills"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                exact='true'
                                offset={-30}
                                duration={300}>
                                About
                        </Link>
                        </li>
                        <li>
                            <Link to="projects"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                exact='true'
                                duration={300}
                                offset={-30}
                            >
                                Projects
                        </Link>
                        </li>
                        <li>
                            <Link to="contact"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                exact='true'
                                offset={-30}
                                duration={300}>
                                Contact
                        </Link>
                        </li>
                    </ul>
                </div>

                <IconButton className={classes.menuButton}
                    onClick={() => setDrawerOpen(true)}
                    aria-label="menu">
                    <MenuIcon />
                </IconButton>

                <div className={classes.drawerOpen}>
                    <SwipeableDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} >
                        <SideBar drawerClose={setDrawerOpen} />
                    </SwipeableDrawer>
                </div>
            </div>
        </div>
    )
}