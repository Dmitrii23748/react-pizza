const initialState = {
    pizzas: [],
    isLoaded: false
};


const pizzaReducer = ( state = initialState, action ) => {
    if ( action.type === 'SET_PIZZAS' ) {
        return {
            ...state,
            pizzas: action.payload,
            isLoaded: true
        };
    }
    if ( action.type === 'SET_LOADED' ) {
        return {
            ...state,
            isLoaded: action.payload
        };
    }
    return state;
};


export default pizzaReducer;

