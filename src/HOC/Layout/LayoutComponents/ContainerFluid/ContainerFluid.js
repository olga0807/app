import React from 'react';

import './ContainerFluid.css';

const containerFluid = (props) => (

    <div className="ContainerFluid" style={props.stylesExtra}>
        {props.children}
    </div>

);

export default containerFluid;


