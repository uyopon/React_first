import { rerenderEntireTree } from "../render";

let state = {

    profilePage: {
        Posts: [{ id: 1, message: 'Hi guys', LikesCount: 2 },
        { id: 2, message: 'hello everybody', LikesCount: 0 },
        { id: 3, message: 'my name is john', LikesCount: 1 },
        { id: 4, message: 'I am  here', LikesCount: 8 }],
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
            { id: 5, message: 'hi Viktor' },],
    },
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        LikesCount: 5
    };

    state.profilePage.Posts.push(newPost)
    rerenderEntireTree(state) //STATE -ВЫЗЫВАЕМ ОТРИСОВЫВАЮЩУЮ ФУНКЦИЮ И ПЕРЕДАЕМ ЕЙ СЕ ДАННЫЕ
}





//  Posts: [{id:1,message:'Hi guys',LikesCount:2},
//  {id:2,message:'hello everybody',LikesCount:0},
//  {id:3,message:'my name is john',LikesCount:1},
//  {id:4,message:'I am  here',LikesCount:8}],

//  Dialogs: [
//      { id: 1, name: 'Dima' },
//      { id: 2, name: 'Andrey' },
//      { id: 3, name: 'Sveta' },
//      { id: 4, name: 'Sasha' },
//      { id: 5, name: 'Viktor' },
//      { id: 6, name: 'Valera' },],

//  Messages: [
//      { id: 1, message: 'hi' },
//      { id: 2, message: 'how are you' },
//      { id: 3, message: 'yo' },
//      { id: 4, message: 'hi' },
//      { id: 5, message: 'hi Viktor' },],
//  }

export default state

// let state = {
//     Posts: [{id:1,message:'Hi guys',LikesCount:2},
//     {id:2,message:'hello everybody',LikesCount:0},
//     {id:3,message:'my name is john',LikesCount:1},
//     {id:4,message:'I am  here',LikesCount:8}],

//     Dialogs: [
//         { id: 1, name: 'Dima' },
//         { id: 2, name: 'Andrey' },
//         { id: 3, name: 'Sveta' },
//         { id: 4, name: 'Sasha' },
//         { id: 5, name: 'Viktor' },
//         { id: 6, name: 'Valera' },],

//     Messages: [
//         { id: 1, message: 'hi' },
//         { id: 2, message: 'how are you' },
//         { id: 3, message: 'yo' },
//         { id: 4, message: 'hi' },
//         { id: 5, message: 'hi Viktor' },],
//     }