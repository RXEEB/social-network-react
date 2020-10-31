import React from "react";
import {Face,QuestionAnswer } from '@material-ui/icons'
import s from './Navbar.module.css'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import logo from '../../assets/logo/linkedin.svg'
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';

const useStyles = makeStyles({
    list: {
        width: 250,
        cursor: 'pointer'
    },
    fullList: {
        width: 'auto',
        cursor: 'pointer'
    },

});
function Navbar(props) {


    const classes = useStyles();
    const { history } = props;
    const [state, setState] = React.useState({
        left: false,
    });


    const itemsList = [
        {
            text: "profile",
            icon: <Face />,
            onClick: () => history.push("/")
        },
        {
            text: "Profile",
            icon: <MailIcon />,
            onClick: () => history.push("/profile")
        },
        {
            text: "Dialogs",
            icon: <QuestionAnswer />,
            onClick: () => history.push("/dialogs")
        },

        {
            text: "Users",
            icon: <PeopleAltRoundedIcon />,
            onClick: () => history.push("/users")
        }


    ];




    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <img className={s.logo} src={logo} alt="logo"/>
            <Divider />

            <List>
                {itemsList.map((item, index) => {
                    const { text, icon, onClick } = item;
                    return (
                        <ListItem button key={text} onClick={onClick}>
                            {icon && <ListItemIcon>{icon}</ListItemIcon>}
                            <ListItemText primary={text} />
                        </ListItem>
                    );
                })}
            </List>

        </div>
    );

    return (
        <div>
            {[ 'left',  ].map((anchor) => (
                <React.Fragment key={anchor}>

                    <MenuIcon className={s.btn} onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}

export default withRouter(Navbar);



