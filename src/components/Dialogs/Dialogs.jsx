import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);
    let newMessageBody = state.newMessageBody;
    //sozdala peremennuju
    // let history = useHistory();

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <React.Redirect to="/login" />;
    //pomenjala funkciju
    // if (!props.isAuth) return history.push("/login");

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <MessageReduxForm onSubmit={addNewMessage} />
        </div>

    )

}
const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field component= {Textarea}
                   validate={[required, maxLength50]}
                   name="newMessageBody" placeholder="Enter your message"/>
            </div>
        <div>
            <button>Send</button>
        </div>
    </form>
    )}

const MessageReduxForm = reduxForm ({ form: 'dialogAddMessageForm' }) (AddMessageForm)


export default Dialogs;