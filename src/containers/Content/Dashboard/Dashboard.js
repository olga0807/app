import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/actions';

import Table from './Table/Table';
import Spinner from '../../../components/UI/Spinner/Spinner';

import Header from './Header/Header';
class Dashboard extends Component {

    myref; //Infnite Scroll ref

    constructor(props) {
        super(props);
        this.myref = React.createRef();

        this.state = {
            headerShowed: true,
            tempID: [],
        };


        //Infinite scroll observer
        this.intersectionObserver = new IntersectionObserver((enteries) => {
            const ratio = enteries[0].intersectionRatio;

            // Сhecking if the end of the document has been reached and if the last item data has been retrieved from the server
            if (ratio > 0 && this.props.lastID.length ) {
                this.sendRequest();
            }
        })
    }

    componentDidMount() {

        this.props.setDashboardData();
        this.props.setLastID();
        this.intersectionObserver.observe(this.myref.current)

    };

    sendRequest = () => {

        const currentID = this.props.lastIDFetched; //the last entry that was loaded and is currently displayed
        const tempID = this.state.tempID; //ID that is currently being processed - to avoid sending a second request to the server if the user uses the scroll too quickly
        const lastID = this.props.lastID; //last ID on the server

        if (currentID !== lastID && currentID !== tempID) {
            this.setState({
                tempID: currentID
            });

            this.props.onLoadData(currentID);
        }  else if (currentID === lastID){
            this.intersectionObserver.disconnect();
        }
    };


    onCloseHeader = () => {
        this.setState({
            headerShowed: false
        })
    };

    render() {
        let content =  <Spinner />;
        if (this.props.error) {
            content = <h1>Database Error!</h1>
        }


        let tableContent = this.props.dashboardData.map(row =>
                <tr key={Math.random()}>
                    <td>{row.name}</td>
                    <td>{row.version}</td>
                    <td>{row.region}</td>
                </tr>
            )
        ;
        const totalItemsShowed = this.props.dashboardData.length;


        let loadingInfo = null;
        if (this.props.error) {
            loadingInfo = <h1>Database Error</h1>
        } else if (this.props.isLoading) {
            loadingInfo= <Spinner/>
        }

        if (this.props.dashboardData.length) {
            content =
                <section className="Dashboard">
                    { this.state.headerShowed ? <Header totalItems = {totalItemsShowed} closeHeader = {this.onCloseHeader} /> : null}
                    <Table
                        headers = {this.props.tableHeaders}
                        sortingHandler = {this.props.onSorting}>

                        {tableContent}
                    </Table>
                    {loadingInfo}
                </section>
        }


        return (
            <div>
                {content}

                <div ref={this.myref}> </div>

            </div>
        )}}


const mapStateToProps = state => {
    return {
        tableHeaders: state.db.tableHeaders,
        dashboardData: state.db.dashboardData,
        lastIDFetched: state.db.lastIDFetched,
        lastID: state.db.lastID,
        error: state.db.error,
        isLoading: state.db.isLoading,

    };
};

const mapDispatchToProps = dispatch => {
    return {

        setDashboardData: (data) => dispatch(actionCreators.fetchDashboardData(data)),
        setLastID: (data) => dispatch(actionCreators.fetchLastID(data)),
        onSorting:  (name) => dispatch(actionCreators.dashboardSorting(name)),
        onLoadData:(data) => dispatch(actionCreators.fetchNewData(data)),

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
