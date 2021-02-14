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
        1: false,
        2: false,
        3: false,
        4: true,
    },
  };

 function reducer(state = initialState, action) {

    switch (action.type) {
      case 'CHANGE_FIRST_NAME':
        return { ...state,
            payer: {...state.payer,
                firstName: action.payload
            } 
           
        };
        case 'CHANGE_LASTNAME':
            return { ...state,
                payer: {...state.payer,
                    lastName: action.payload
                } 
            }
        case 'CHANGE_COUNTRY':
            return { ...state,
                payer: {...state.payer,
                    country: action.payload
                } 
            }
            
        case 'CHANGE_CITY':
            return { ...state,
                payer: {...state.payer,
                    city: action.payload
                } 
            } 
            
        case 'CHANGE_PHONENUM':
            return { ...state,
                payer: {...state.payer,
                    phone : action.payload
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

        case 'CHANGE_FIRST_STEP_AVAILABILITY': 
            return { ...state,
                    stepsAvailable: {
                        ...state.stepsAvailable,
                        1: action.payload,
                    }
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