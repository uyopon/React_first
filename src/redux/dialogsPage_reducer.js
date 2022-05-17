const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'     

let initialState = {
    newMessageBody: '', 
    Dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' },],
    Messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'how are you' },
        { id: 3, message: 'yo' },
        { id: 4, message: 'hi' },
        { id: 5, message: 'hi Viktor' },],
}



const dialogsPage_reducer = (state = initialState, action) => {

    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageBody = action.body

    }
    else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody
        state.newMessageBody = ''
        state.Messages.push({ id: 6, message: body })
    }
    return state
}

export const addMessgeActionCreator = () => {
    return (
        { type: SEND_MESSAGE }
    )
}

export const updateNewMessageTextActionCretor = (text) => {
    return (
        { type: UPDATE_NEW_MESSAGE_TEXT, body: text }
    )
}
export default dialogsPage_reducer


