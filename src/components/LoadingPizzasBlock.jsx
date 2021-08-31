import React from 'react';

import ContentLoader from "react-content-loader";




const LoadingPizzasBlock = () => {
    return (
        <ContentLoader
            className="pizza-block"
            speed={ 2 }
            width={ 280 }
            height={ 460 }
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="15" cy="3" r="2" />
            <circle cx="129" cy="132" r="104" />
            <rect x="7" y="276" rx="5" ry="5" width="265" height="43" />
            <rect x="5" y="334" rx="8" ry="8" width="264" height="65" />
            <rect x="6" y="417" rx="9" ry="9" width="117" height="67" />
            <rect x="151" y="417" rx="8" ry="8" width="118" height="44" />
            <rect x="198" y="445" rx="0" ry="0" width="0" height="2" />
        </ContentLoader>
    );
};



export default LoadingPizzasBlock;