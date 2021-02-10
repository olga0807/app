import React from 'react';

import CloseButton from '../../../../components/UI/Buttons/CloseButton/CloseButton';

import './Header.css';

const header = (props) => {

        return(
            <div className="DashboardHeader" >
                <span> {props.totalItems} <span style={{fontSize: '18px'}}>Live</span></span>
                <CloseButton  size="xs" clicked = {props.closeHeader}/>
            </div>
        )
    }

;

export default header;


