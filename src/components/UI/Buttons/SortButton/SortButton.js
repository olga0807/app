import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const sortButton = (props) => (
    <FontAwesomeIcon icon={props.icon} onClick = {props.clicked} />
);

export default sortButton;


