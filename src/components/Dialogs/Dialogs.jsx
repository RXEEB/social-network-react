import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Redirect} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const Dialogs = (props) => {
    const classes = useStyles();
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    // if(!props.isAuth)
    //     return <Redirect to ="/login"/>


    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={css.messages}>
                <div  className={css.post}>{ messagesElements }</div>

            </div>

            {/*<div className={css.textarea}>*/}

            {/*            <textarea  value={newMessageBody}*/}
            {/*                      onChange={onNewMessageChange}*/}
            {/*                      placeholder='Enter your message'/>*/}

            {/*</div>*/}

            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" onChange={onNewMessageChange} value={newMessageBody} label="Сообщение" variant="outlined" />

            </form>





            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={onSendMessageClick}
            >
                Send
            </Button>
            <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
    )

    // return (
    //     <div className={classes.root}>
    //         <Grid item xs={6}>
    //             <Paper className={classes.paper}>
    //                 <div >
    //                     {dialogsElements}
    //                 </div>
    //             </Paper>
    //         </Grid>
    //         <Grid item xs={6}>
    //             <Paper className={classes.paper}>
    //                 <div >
    //                     <div >{messagesElements}</div>
    //                 </div>
    //                 <textarea value={newMessageBody}
    //                           onChange={onNewMessageChange}
    //                           placeholder='Enter your message'/>
    //                 <div>
    //                     <button onClick={onSendMessageClick}>Send</button>
    //                 </div>
    //             </Paper>
    //         </Grid>
    //     </div>
    // )


}

export default Dialogs;