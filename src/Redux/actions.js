import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../Redux/reducer';
import axios from 'axios';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware),
);
export const store = createStore(reducer, enhancer);

// export const store = createStore(
//     reducer, 
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(thunkMiddleware),
//     );

export const changePersonalData = (data) => ({
            type: 'CHANGE_PERSONAL_DATA',
            payload: data,
        })

export const changeDeliveryMethod = (method) => ({
            type: 'CHANGE_DELIVERY_METHOD',
            payload: method,
        })

export const changePaymentMethod = (method) => ({
            type: 'CHANGE_PAYMENT_METHOD',
            payload: method,
        })

export const changeActiveStep = (value) =>  {
    if (value <= 3 && value >= 0) {
        return {
            type: 'CHANGE_ACTIVE_STEP',
            payload: value,
          };
    } 
}

export const thunkCreator = (payer) => {
    return (dispatch) => {
        try {
            const apiUrl = `https://5c3755177820ff0014d92711.mockapi.io/orders`;
            axios.post(apiUrl, payer).then(({data}) => {
                alert(`Your data ${JSON.stringify(data)} was successfully send to the server!`);
                dispatch( {
                    type: 'POST_DATA',
                    payload: data,
                })
            });
        } catch {
            alert('Post request has failed! Please, try again!');
          }
    }
}
