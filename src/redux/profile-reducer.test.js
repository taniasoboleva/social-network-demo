import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Freedom is so far', likesCount: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 10}]
};

test('length of post should be incremented', () => {
    //1.initial data
    let action = addPostActionCreator("tania-miau");

    //2.action
    let newState = profileReducer (state, action);
    //3.expectation
    expect(newState.posts.length).toBe(3);
});

test('message of post should be correct', () => {
    //1.initial data
    let action = addPostActionCreator("tania-miau");

    //2.action
    let newState = profileReducer (state, action);
    //3.expectation
    expect(newState.posts[2].message).toBe("tania-miau");
});

test('after deleting length of messages should be decremented', () => {
    //1.initial data
    let action = deletePost(1);
    //2.action
    let newState = profileReducer (state, action);
    //3.expectation
    expect(newState.posts.length).toBe(1);
});

test('after deleting length should not be decremented, if id is incorrect', () => {
    //1.initial data
    let action = deletePost(100);
    //2.action
    let newState = profileReducer (state, action);
    //3.expectation
    expect(newState.posts.length).toBe(2);
});