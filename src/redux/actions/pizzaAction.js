import axios from 'axios';




export const setLoaded = ( value ) => ( {
    type: 'SET_LOADED',
    payload: value
} );

// асинхронный экшн
export const fetchPizzas = ( sortBy, category ) => ( dispatch ) => {
    dispatch( setLoaded( false ) );
    // http://localhost:3001
    axios.get( `/pizzas?${ category !== null ? `category=${ category }` : '' }&_sort=${ sortBy.type }&_order=${ sortBy.order }` )
        .then( res => {
            dispatch( setPizzas( res.data ) );
        } );
};





export const setPizzas = ( items ) => ( {
    type: 'SET_PIZZAS',
    payload: items
} );

