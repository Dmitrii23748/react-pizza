import React from 'react';
import cn from 'classnames';


const Button = ( { outline, children, classNameBtn, handleAddPizzaBlock } ) => {
    return (
        <>
            <button
                onClick={ handleAddPizzaBlock }
                className={ cn( 'button', classNameBtn, {
                    'button--outline': outline
                } ) }
            >{ children }</button>
        </>
    );
};


export default Button;