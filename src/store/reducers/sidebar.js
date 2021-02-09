import * as actionTypes from '../actions/actions';

const initialState = {
    results: [],
    navMenu: [
        {
            name: 'Dashboard',
            link: '/dashboard',
            icon: "tachometer-alt"
        },
        {
            name: 'Users',
            link: '/users',
            icon: 'users'
        },
        {
            name: 'Regions',
            link: '/regions',
            icon: 'globe'
        },
        {
            name: 'Adapters',
            link: '/adapters',
            icon: 'list'
        },
        {
            name: 'Catalog Management',
            link: '/catalog-management',
            icon: 'cog',
            subMenu: ['Catalog', 'Types', 'Categories', 'Manufacturers', 'Families', 'Models']
        },
        {
            name: 'Licence generator',
            link: '/licence-generator',
            icon: 'file-alt'
        }
    ]
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case actionTypes.SUBMENU_SHOW:

            //Since the icon that hides submenu is part of the menu item, the clicked item id is checked
            if (action.id !== 'subMenuIcon') {
                const menu = state.navMenu;
                const updatedMenu = menu.map( item => {
                    if (item.name === action.name && item.subMenu) {
                        return {
                            ...item,
                            showedSubMenu: true
                        }
                    } else {
                        return {
                            ...item,
                            showedSubMenu: false
                        }
                    }
                });
                return {
                    ...state,
                    navMenu: updatedMenu
                }
            }

        case actionTypes.SUBMENU_HIDE :
            //Since the icon that hides submenu is part of the menu item, the clicked item id is checked
            if(action.id === 'subMenuIcon') {
                const menu = state.navMenu;
                const updatedMenu = menu.map( item => {
                    return {
                        ...item,
                        showedSubMenu: false
                    }});

                return {
                    ...state,
                    navMenu: updatedMenu
                }
            }
    }



    return state;
};

export default reducer;