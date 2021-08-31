import React, { useCallback, useEffect } from 'react';

import Categories from '../components/Categories';
import Sortpopup from '../components/Sortpopup';
import PizzaBlock from '../components/PizzaBlock';

import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filtersAction';
import { addPizzaToCartAction } from '../redux/actions/cartAction';

import { fetchPizzas } from '../redux/actions/pizzaAction';

import LoadingPizzasBlock from '../components/LoadingPizzasBlock';



const arrCategories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const arrSort = [
    { name: 'популярности', type: 'rating', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавиту', type: 'name', order: 'asc' },
];

const Home = () => {
    const dispatch = useDispatch();
    // pizzaReducer
    const stateReduxPizzas = useSelector( ( state ) => {
        return {
            pizzas: state.pizzaReducer.pizzas
        };
    } );
    // pizzaReducer
    const stateReduxIsLoaded = useSelector( ( state ) => {
        return {
            isLoaded: state.pizzaReducer.isLoaded
        };
    } );
    // filterReducer
    const stateReduxFilter = useSelector( ( state ) => {
        return {
            sortBy: state.filtersReducer.sortBy,
            category: state.filtersReducer.category
        };
    } );

    const cartItem = useSelector( ( { cartReducer } ) => cartReducer.items );


    useEffect( () => {
        // http://localhost:3000/pizzas?_order=asc&_sort=price
        // http://localhost:3000/db.json

        dispatch( fetchPizzas( stateReduxFilter.sortBy, stateReduxFilter.category ) );

        // fetch( 'http://localhost:3000/db.json' )
        //   .then( ( res ) => res.json() )
        //   .then( ( body ) => {
        //     setPizzas( body.pizzas );
        //   } );
    }, [stateReduxFilter.category, stateReduxFilter.sortBy] );

    // диспатч для filtersReducer

    const onClickCategory = useCallback( ( index ) => {
        dispatch( setCategory( index ) );
    }, [] );

    const onClickSortType = useCallback( ( type ) => {
        dispatch( setSortBy( type ) );
    }, [] );

    // добавление пицц
    const onClickAddPizza = ( obj ) => {
        dispatch( addPizzaToCartAction( obj ) );
    };

    return (
        <>
            <div className="container">
                <div className="content__top">

                    <Categories
                        arrCategories={ arrCategories }
                        onClickCategory={ onClickCategory }
                        activeCategory={ stateReduxFilter.category }
                    />
                    <Sortpopup
                        arrSort={ arrSort }
                        activeSortType={ stateReduxFilter.sortBy.type }
                        onClickSortType={ onClickSortType }
                    />

                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {
                        stateReduxIsLoaded.isLoaded
                            ? stateReduxPizzas.pizzas.map( ( pizza ) => <PizzaBlock
                                key={ pizza.id } { ...pizza }
                                onClickAddPizza={ onClickAddPizza }
                                addedCart={ cartItem[pizza.id] && cartItem[pizza.id].items.length }
                            /> )
                            : Array( 12 ).fill( 0 ).map( ( _, index ) => <LoadingPizzasBlock key={ index } /> )
                    }
                </div>
            </div>
        </>
    );
};


export default Home;