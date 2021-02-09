import React from 'react';

import Header from './Header/Header';


const headers = (props) => {

    const content = props.headers.map( item => {
            return (
                <Header label={item.label} name={item.name} sortable={item.sortable} sortOn={item.sortOn} key={Math.random()}
                        clicked={() => props.sorting(item.name)}/>)
        }
    );

    return (
        <tr>
            {content}
        </tr>
    )
};

export default headers;


