import * as actionTypes from '../actions/actions';


const initialState = {

    tableHeaders: [
        {label: "Display Name", name: "name", sortable: true, sortOn: false},
        {label: "Version", name: "version", sortable: false},
        {label: "Region", name: "region", sortable: true, sortOn: false},
    ],
    dashboardData: [],
    lastID: [],
    lastIDFetched: [],
    error: false,
    isLoading: false
};

const reducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case actionTypes.SET_DASHBOARD_DATA:
            //Transforming the server response into an array of objects
            const tableData = Object.keys(action.data).map(function(key) {
                return {
                    id: key,
                    name: action.data[key].name,
                    version: action.data[key].version,
                    region:action.data[key].region,
                }
            });

            const lastId = tableData[tableData.length-1].id;

            return {
                ...state,
                dashboardData: tableData,
                lastIDFetched: lastId
            };



        case actionTypes.SET_LAST_ID:
            const lastItem = Object.keys(action.data);

            return {
                ...state,
                lastID: lastItem[0]
            };


        case actionTypes.IS_LOADING:
            return {
                ...state,
                isLoading: action.status
            };



        case actionTypes.ERROR:
            return {
                ...state,
                error: true
            };


        case actionTypes.ADD_NEW_DATA:
            //Transforming the fetched data into an array of objects
            const fetchedData = Object.keys(action.data).map(function(key) {
                return {
                    id: key,
                    name: action.data[key].name,
                    version: action.data[key].version,
                    region:action.data[key].region,
                }
            }).slice(1);

            const oldArray  = state.dashboardData;
            const newArray = fetchedData;
            const mergedData = [...oldArray, ...newArray];

            return {
                ...state,
                dashboardData: mergedData,
                isLoading: false,
                lastIDFetched: mergedData[mergedData.length-1].id,
            };

        case actionTypes.DASHBOARD_SORTING:
            const updatedTableHeaders = state.tableHeaders.map( item => {
                    if ( item.name === action.name) {
                        return {
                            ...item,
                            sortOn: !item.sortOn,
                        }
                    } else {
                        return {
                            ...item,
                        }
                    }
                }
            );
            const tableContent = state.dashboardData;
            let updatedTableContent;

            if (state.sortASC === true) {
                updatedTableContent =  tableContent.sort((a,b) => (a[action.name] > b[action.name]) ? 1 : ((b[action.name] > a[action.name]) ? -1 : 0))
            } else {
                updatedTableContent =  tableContent.sort((a,b) => (b[action.name] > a[action.name]) ? 1 : ((a[action.name] > b[action.name]) ? -1 : 0))
            }

            return {
                ...state,
                tableHeaders: updatedTableHeaders,
                dashboardData: updatedTableContent,
                sortASC: !state.sortASC
            };



    }
    return state;
};

export default reducer;