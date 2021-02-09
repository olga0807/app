import React from 'react';

import Headers from './Headers/Headers';

import './Table.css';

const table = (props) => (
    <table id="dashboard">
        <thead>
        <Headers headers ={props.headers}  sorting={ props.sortingHandler}   />
        </thead>
        <tbody>
        {props.children}
        </tbody>
    </table>

);

export default table;


