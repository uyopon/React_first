let rerenderEntireTree = 228  //КАК Я ПОНЯЛ- В ЭТУ ПЕРЕМЕНЕННУЮ МЫ ПЕРЕПРИСВАИВАЕМ НОВОЕ ЗНАЧЕНИЕ (ЭТИМ НАНИМАЕТСЯ F subscribe) ОНА В ПЕРЕМЕННУЮ
//rerenderEntireTree ПРИСВАЕИВАЕТ НООВЕ ЗНАЧЕНИЕ  - ФУНКЦИИ RERENDER DOM TREE КОТОРУЮ ОНА ПОЛУЧАЕТ В КАЧЕСТВЕ АРГЕМЕНТА

let state = {
    profilePage: {
        Posts: [{ id: 1, message: 'Hi guys', LikesCount: 2 },
        { id: 2, message: 'hello everybody', LikesCount: 0 },
        { id: 3, message: 'my name is john', LikesCount: 1 },
        { id: 4, message: 'I am  here', LikesCount: 8 }],
    newPostsText : ''
    },
    dialogsPage: {
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
            { id: 5, message: 'hi Viktor' },],},}

export const addpost = () => { //функция addpost принимает тект from text area и пушит его в объект state где хранятся все данные
    let newPost = {
        id: 5,
        message: state.profilePage.newPostsText,
        LikesCount: 5};
    state.profilePage.Posts.push(newPost)
    state.profilePage.newPostsText = ''
    rerenderEntireTree(state) }

export const updateNewPostText = (newText) => { //функция addpost принимает тект from text area и пушит его в объект state где хранятся все данные
    state.profilePage.newPostsText = newText
    rerenderEntireTree(state) }

export const subscribe = (observer) => {
    rerenderEntireTree = observer ///НАБЛЮДАТЕЛЬ (ПАТТЕРН)-СПРОСЯТ НА СОБЕСЕДОВАНИИ
}


export default state
