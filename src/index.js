import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// action  ={type:'', payload: ''}

const defaultState = {
  count: 0
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'plus':
        return {...state, count: state.count + 1}
           
        
      case 'minus':
        if(state.count > 0) 
        return {...state, count: state.count - 1}


        case 'random': 
        return {...state, count:Math.floor(Math.random(state.count * 100))}
      



      default :
      return state
    }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
 
    <App />
  
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

