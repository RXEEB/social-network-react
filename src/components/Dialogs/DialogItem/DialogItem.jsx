import React from 'react';
import css from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Divider from '@material-ui/core/Divider';







// const DialogItem = (props) => {
//     let path = "/dialogs/" + props.id;
//
//     return( <div className={s.dialog + ' ' + s.active}>
//         <NavLink to={path}>{props.name} + "sdsd"</NavLink>
//     </div>
//
//     )
// }

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
    },


}));


const DialogItem = (props) => {
    const classes = useStyles();
    let path = "/dialogs/" + props.id;
    return (
        <NavLink className = {css.link} to={path}>

        <List component="nav" className={classes.root} aria-label="mailbox folders">
            <ListItem button>
                {props.name}
            </ListItem>
            <Divider />


        </List>
        </NavLink>
    );
}





export default DialogItem;