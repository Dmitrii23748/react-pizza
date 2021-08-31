import React from 'react';


const Categories = React.memo( ( { activeCategory, arrCategories, onClickCategory } ) => {
    //onClickItem

    // const [activeItem, setActiveItem] = useState( null );
    // const indexActiveCategories = ( index ) => {
    //     // setActiveItem( index );
    //     onClickItem( index );
    // };

    return (
        <>
            <div className="categories">
                <ul>
                    <li
                        className={ activeCategory === null ? 'active' : '' }
                        onClick={ () => onClickCategory( null ) }
                    >Все</li>
                    {
                        arrCategories && arrCategories.map( ( name, index ) => {
                            return (
                                <li key={ `${ name }_${ index }` }
                                    onClick={ () => onClickCategory( index ) }
                                    className={ activeCategory === index ? 'active' : '' }
                                >
                                    { name }</li>
                            );
                        } )
                    }
                </ul>
            </div>
        </>
    );
} );



export default Categories;