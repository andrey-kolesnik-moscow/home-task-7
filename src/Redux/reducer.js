const initialState = {
    payer: {
        firstName: '',
        lastName: '',
        country: '',
        city: '',
        phone: '',
        deliveryMethod: '',
        paymentMethod: '',
    },
    activeStep: 0,
    stepsAvailable: {
        1: true,
        2: false,
        3: false,
        4: true,
    },
  };

 function reducer(state = initialState, action) {

    switch (action.type) {

            case 'CHANGE_PERSONAL_DATA':
                return { ...state,
                    payer: { ...state.payer,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    country: action.payload.country,
                    city: action.payload.city,
                    phone: action.payload.phone,
                    }
                }
            
        case 'CHANGE_DELIVERY_METHOD':
            return { ...state,
                payer: {...state.payer,
                    deliveryMethod : action.payload,
                },     
                stepsAvailable: {
                    ...state.stepsAvailable,
                    2: true,
                }
            };
        case 'CHANGE_PAYMENT_METHOD':
            return { ...state,
                payer: {...state.payer,
                    paymentMethod : action.payload,
                },   
                stepsAvailable: {
                    ...state.stepsAvailable,
                    3: true,
                }
            };
        case 'CHANGE_ACTIVE_STEP':
            return { ...state,
                activeStep: action.payload,
            };    

        case 'POST_DATA':
            return {
                ...initialState,
            };
      default:
        return state;
    }
  }

export default reducer;