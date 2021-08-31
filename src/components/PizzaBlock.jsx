import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Button from './Button';




const PizzaBlock = ( { id, name, imageUrl, price, types, sizes, onClickAddPizza, addedCart } ) => {

    const typeName = ['тонкое', 'традиционное'];
    const sizeName = [26, 30, 40];

    const [activeTypes, setActiveTypes] = useState( types[0] );
    const [activeSize, setActiveSize] = useState( 0 );

    const onSelectType = ( index ) => {
        setActiveTypes( index );
    };
    const onSelectSize = ( size ) => {
        setActiveSize( size );
    };

    // добавление пицц в корзину
    const handleAddPizzaBlock = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            size: sizeName[activeSize],
            type: typeName[activeTypes]
        };
        onClickAddPizza( obj );
    };

    return (
        <>
            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src={ imageUrl }
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">{ name }</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {
                            typeName.map( ( type, index ) => {
                                return (
                                    <li
                                        key={ type }
                                        onClick={ () => onSelectType( index ) }
                                        className={ cn( {
                                            'active': activeTypes === index,
                                            'disabled': !types.includes( index )
                                        } ) }
                                    >{ type }</li>
                                );
                            } )
                        }
                    </ul>
                    <ul>
                        {
                            sizeName.map( ( size, index ) => {
                                return (
                                    <li
                                        key={ index }
                                        onClick={ () => onSelectSize( index ) }
                                        className={ cn( {
                                            'active': activeSize === index,
                                            'disabled': !sizes.includes( size )
                                        } ) }
                                    >{ size } см.</li>
                                );
                            } )
                        }
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от { price } ₽</div>
                    <Button classNameBtn="button--add" outline
                        handleAddPizzaBlock={ handleAddPizzaBlock }
                    >
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        { addedCart && <i>{ addedCart }</i> }
                    </Button>
                </div>
            </div>
        </>
    );
};


PizzaBlock.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    types: PropTypes.arrayOf( PropTypes.number ).isRequired,
    sizes: PropTypes.arrayOf( PropTypes.number ).isRequired,
    addedCart: PropTypes.number
};
// isRequired не обязательно прописыывать но например для строк если не вписать то null и undefinend пропустит

PizzaBlock.defaultProps = {
    types: [],
    sizes: [],
    name: 'Name Pizza',
    // addedCart: 0
};

export default PizzaBlock;