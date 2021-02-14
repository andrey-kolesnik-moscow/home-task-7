import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../Redux/reducer';
import axios from 'axios';

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export const changeFirstName = (name) => ({
            type: 'CHANGE_FIRST_NAME',
            payload: name,
        })

export const changeLastName = (lastName) => ({
            type: 'CHANGE_LASTNAME',
            payload: lastName,
        })

export const changeCountry = (country) => ({
            type: 'CHANGE_COUNTRY',
            payload: country,
        })

export const changeCity = (city) => ({
            type: 'CHANGE_CITY',
            payload: city,
        })

export const changePhone = (phone) => ({
            type: 'CHANGE_PHONENUM',
            payload: phone,
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

export const changeFirstStepAvailability = (value) => ({
        type: 'CHANGE_FIRST_STEP_AVAILABILITY',
        payload: value,
        })

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
