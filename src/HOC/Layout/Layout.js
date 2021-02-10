import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTachometerAlt, faUsers, faGlobe, faList, faCog, faFileAlt, faChevronDown, faChevronUp, faTimes } from '@fortawesome/free-solid-svg-icons';

import './Layout.css';

import SideBar from '../../containers/SideBar/SideBar';
import ContainerFluid from '../../HOC/Layout/LayoutComponents/ContainerFluid/ContainerFluid';
import Container from '../../HOC/Layout/LayoutComponents/Container/Container';


const layout = (props) => {

    //Adding FontAwesome Icons
        library.add(faTachometerAlt, faUsers, faGlobe, faList, faCog, faFileAlt, faChevronDown, faChevronUp, faTimes );

        return (
            <ContainerFluid stylesExtra={{backgroundColor: '#EFF0F0'}}>
                <Container stylesExtra={{backgroundColor: '#EFF0F0'}}>
                    <SideBar/>
                    <main className="Content">
                        {props.children}
                    </main>
                </Container>
            </ContainerFluid>
        )
    };

export default layout;


