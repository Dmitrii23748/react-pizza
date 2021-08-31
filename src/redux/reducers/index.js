import { combineReducers } from 'redux';

import filtersReducer from './filtersReducer';
import pizzaReducer from './pizzaReducer';
import cartReducer from './cartReducer';



const rootReducers = combineReducers( {
    pizzaReducer,
    filtersReducer,
    cartReducer
} );


export default rootReducers;
