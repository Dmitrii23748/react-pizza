import React, { useEffect, useRef, useState } from 'react';



const Sortpopup = React.memo( ( { arrSort, activeSortType, onClickSortType } ) => {
    // открытие закрытие блока с сортировкой
    const [visiblePopup, setVisiblePopup] = useState( false );
    const handleClickPopup = () => {
        setVisiblePopup( !visiblePopup );
    };

    // нашли необходимый блок
    const sortRef = useRef();
    // скрытие\открытие блока с сортировкой цена, популярное и дрю
    const outClickBody = ( e ) => {
        if ( !e.path.includes( sortRef.current ) ) {
            setVisiblePopup( false );
        }
    };
    useEffect( () => {
        document.body.addEventListener( 'click', outClickBody );
    }, [] );

    // выбрали необходимую сортировку
    // const [sortItem, setSortItem] = useState( 0 );
    const handleClickSort = ( index ) => {
        // setSortItem( index );
        onClickSortType( index );
        setVisiblePopup( false );
    };

    // const activeLabel = arrSort[activeSortType].name;
    const activeLabel = arrSort.find( obj => obj.type === activeSortType ).name;


    return (
        <>
            <div
                className="sort"
                ref={ sortRef }
            >
                <div className="sort__label">
                    <svg
                        className={ visiblePopup ? 'rotated' : '' }
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                            fill="#2C2C2C"
                        />
                    </svg>
                    <b>Сортировка по:</b>
                    <span onClick={ handleClickPopup }>{ activeLabel }</span>
                </div>
                {
                    visiblePopup ?
                        (
                            <div className="sort__popup">
                                <ul>
                                    {
                                        arrSort.map( ( item, index ) => {
                                            return (
                                                <li
                                                    key={ `${ item.type }_${ index }` }
                                                    onClick={ () => handleClickSort( item ) }
                                                    className={ activeSortType === item.type ? 'active' : '' }
                                                >{ item.name }</li>
                                            );
                                        } )
                                    }
                                </ul>
                            </div>
                        ) : null
                }
            </div>

        </>
    );
} );

Sortpopup.defaultProps = {
    arrSort: []
};

export default Sortpopup;