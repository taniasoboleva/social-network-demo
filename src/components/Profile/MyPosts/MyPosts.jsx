import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = React.memo(props => {
    let postsElements =
        [...props.posts].reverse().map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.posts}>
                {postsElements}
            </div>
            <AddNewPostReduxForm onSubmit={addNewPost}/>
        </div>
    )
});

const maxLength10 = maxLengthCreator(15);
const minLength4 = minLengthCreator(1);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component={Textarea} placeholder={"Post message"}
                   validate={[required, maxLength10, minLength4 ]}/>
    </div>
    <div>
        <button>Add post</button>
    </div>
        </form>
)}
let AddNewPostReduxForm = reduxForm ({ form: 'profileAddPostForm' }) (AddNewPostForm)


export default MyPosts;