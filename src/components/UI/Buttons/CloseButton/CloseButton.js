import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const closeButton = (props) => (
    <FontAwesomeIcon icon="times" size={props.size} onClick = {props.clicked} style={{cursor: 'pointer'}}/>
);

export default closeButton;


