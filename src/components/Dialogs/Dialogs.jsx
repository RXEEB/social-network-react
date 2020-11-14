import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
// import useStyles from "./DialogsStyleMUI";
// import {Grid} from "@material-ui/core";
// import Paper from "@material-ui/core/Paper";

const Dialogs = (props) => {

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
    // const classes = useStyles();


    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={css.messages}>
                <div  className={css.post}>{ messagesElements }</div>

            </div>

            <div className={css.textarea}>

                        <textarea  value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder='Enter your message'/>

            </div>
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