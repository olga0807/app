import axios from "axios";


//SideBar actions
export const SUBMENU_SHOW = 'SUBMENU_SHOW';
export const SUBMENU_HIDE = 'SUBMENU_HIDE';

//Dashboard actions
export const SET_DASHBOARD_DATA = "SET_DASHBOARD_DATA";
export const DASHBOARD_SORTING = "DASHBOARD_SORTING";
export const SET_LAST_ID = "SET_LAST_ID";
export const ADD_NEW_DATA = "ADD_NEW_DATA";

export const ERROR = "ERROR";

export const IS_LOADING = "IS_LOADING";

const initialLoad = 12; //fetched items initially
const itemsToAdd = initialLoad+1; // fetched items on scroll


export function fetchDashboardData() {

    return function(dispatch) {
        return  axios.get( 'https://test-1419e-default-rtdb.firebaseio.com/dashboard.json?orderBy="$key"&limitToFirst=' + initialLoad,
        )
            .then(({ data }) => {
                dispatch(setDashboardData(data));
            })
            .catch( error => {
                dispatch(errorCatched(error));
            } );

    }}

export const setDashboardData = ( data ) => {
    return {
        type: SET_DASHBOARD_DATA,
        data: data
    };
};

export function fetchLastID() {

    return function(dispatch) {
        return  axios.get( 'https://test-1419e-default-rtdb.firebaseio.com/dashboard.json?orderBy="$key"&limitToLast=1',
        )
            .then(({ data }) => {
                dispatch(setLastDataID(data));
            })
            .catch( error => {
                dispatch(errorCatched(error));
            } );

    }
}

export const setLastDataID = ( data ) => {
    return {
        type: SET_LAST_ID,
        data: data
    };
};


export const dashboardSorting = (name) => {
    return {
        type: DASHBOARD_SORTING,
        name: name
    };
};

export function fetchNewData(data) {

    return function (dispatch) {

        dispatch(isLoading(true));


        return axios.get('https://test-1419e-default-rtdb.firebaseio.com/dashboard.json?orderBy="$key"&startAt="' + data +
            '"&limitToFirst=' + '' + itemsToAdd + '')

            .then(({data}) => {
                dispatch(addNewData(data))
            })
    }}

export const addNewData = (data) => {
    return {
        type: ADD_NEW_DATA,
        data: data,
    };
};


export const isLoading = (status) => {
    return {
        type: IS_LOADING,
        status: status
    };
};



export const errorCatched = () => {
    return {
        type: ERROR,
    };
};
