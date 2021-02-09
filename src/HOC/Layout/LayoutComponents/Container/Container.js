import React from 'react';

import './Container.css';

const container = (props) => (
    <div className="Container" style={props.stylesExtra}>
        {props.children}
    </div>
);

export default container;


