import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Navbar from "../Navbar/Navbar";
import useStyles from "./styles-header";
import {NavLink} from "react-router-dom";





export default function Header(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{background: '#2c2c2c'}}>
                <Toolbar>
                    <Navbar/>
                    <Typography variant="h6" className={classes.title}>
                        МЕНЮ
                    </Typography>
                    { props.isAuth ? <div>!!!!</div>
                        : <NavLink to ={'/login'}>
                        <Button color="inherit">LOGIN</Button>
                    </NavLink>}


                </Toolbar>
            </AppBar>
        </div>
    );
}