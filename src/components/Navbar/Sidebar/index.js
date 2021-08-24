import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import NavItems from "../NavItems"

const useStyles = makeStyles((theme) => ({
  list: {
    width: 200,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    '& ul': {
      listStyleType: "none",
      padding: "20px",
      '& li': {
        margin: "20px",
        cursor: "pointer",
      },

    },

  },
}));


export default function SideBar({ drawerClose }) {

  const classes = useStyles();

  return (
    <div className={classes.list}>
      <NavItems drawerClose={drawerClose} />
    </div>
  )
}
