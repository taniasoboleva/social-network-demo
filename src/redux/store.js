import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Freedom is so far', likesCount: 0},
                {id: 2, message: 'It\'s my first post', likesCount: 10}],
            newPostText: 'I love you'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Tanjuwa'},
                {id: 2, name: 'Aleksandra'},
                {id: 3, name: 'Katjunja'},
                {id: 4, name: 'Andrey'},
                {id: 5, name: 'Mimulia'},
                {id: 6, name: 'Veronichka'},
                {id: 7, name: 'Pavel'},
                {id: 8, name: 'Ilonuwka'}
            ],
            messages: [
                {id: 1, message: 'Good morning people!'},
                {id: 2, message: 'There are so beautiful'},
                {id: 3, message: 'I want to sleep'},
                {id: 4, message: 'Can you hear me?'}
            ],
            newMessageBody: ""
        },
        sideBar: {
            names: [
                {name: 'Vera'},
                {name: 'Nadezhda'},
                {name: 'Ljubovj'}
            ]
        }
    },
    _callSubscriber() {
        console.log('state was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }
}


window.state = store;
export default store;