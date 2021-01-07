
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}]
            };

        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;