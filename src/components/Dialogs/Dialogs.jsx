import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';


import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {

    let state =  props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = state.messages.map( m => <Message message={m.message}/> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())


    }
    let onNewMessageChange = (event) => {
       let body = event.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))


    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>

            <div>
                <div>
                    <TextareaAutosize  value={newMessageBody} onChange={onNewMessageChange}
                        aria-label="minimum height" rowsMin={3} placeholder="Send message.." />
                </div>
                <div>
                    <Button  onClick={onSendMessageClick}
                        variant="contained" color="primary">
                        SEND
                    </Button>



                </div>
            </div>
        </div>
    )
}

export default Dialogs;