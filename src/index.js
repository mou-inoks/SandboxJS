import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import App from './App';


let id = 0

const initialState = [
  {
    id: 1,
    title: 'Important',
    completed: false
  },
  {
    id: 1,
    title: 'Important',
    completed: false
  },
]

const todo_add = 'todo/add'


//STORE -> GLOBALIZED STATE 
function TodoReducer(state = initialState, action){
  switch(action.type){
    case todo_add: 
      return [...state, {id: ++id, completed: false, ...action.payload}]
    default :
      return state
  }
}
//DISPATCH


ReactDOM.render(<App />, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
