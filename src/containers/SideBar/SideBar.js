import React, {Component} from 'react';
import {connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';

import './SideBar.css';
import NavigationItems from "../../components/Navigation/NavigationItems/NavigationItems";


class SideBar extends Component {

    render() {

        return (
            <div className="SideBar" >
                <nav>
                    <NavigationItems menu={this.props.navMenu} showSubMenu={this.props.onShowSubMenu} hideSubMenu={this.props.onHideSubMenu}/>
                </nav>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        navMenu: state.sb.navMenu,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onShowSubMenu: ( name, event) => dispatch({type: actionTypes.SUBMENU_SHOW, name: name, id: event.target.id}),
        onHideSubMenu: ( event) => dispatch({type: actionTypes.SUBMENU_HIDE, id: event.target.id})
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

