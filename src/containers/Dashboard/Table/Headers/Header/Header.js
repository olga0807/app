import React from 'react';

import SortButton from '../../../../../components/UI/Buttons/SortButton/SortButton';

const header = (props) => {
    let sortIcon = null;

    if (props.sortable) {
        sortIcon = <SortButton icon = {props.sortOn ? "chevron-down" : "chevron-up"}/>
    }

    return (
        <th onClick={props.clicked}>
            {props.label}
            <span> {sortIcon} </span>
        </th>
    )
};

export default header;


