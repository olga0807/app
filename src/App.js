import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';


import Layout from './HOC/Layout/Layout';
import Dashboard from "./containers/Content/Dashboard/Dashboard";
import Users from "./containers/Content/Users/Users";
import Regions from "./containers/Content/Regions/Regions";
import Adapters from "./containers/Content/Adapters/Adapters";
import Catalog from "./containers/Content/CatalogManagement/Catalog/Catalog";
import Types from "./containers/Content/CatalogManagement/Types/Types";
import Categories from "./containers/Content/CatalogManagement/Categories/Categories";
import Manufacturers from "./containers/Content/CatalogManagement/Manufacturers/Manufacturers";
import Families from "./containers/Content/CatalogManagement/Families/Families";
import Models from "./containers/Content/CatalogManagement/Models/Models";
import LicenceGenerator from "./containers/Content/LicenceGenerator/LicenceGenerator";





class App extends Component {

    render() {
        return (
            <Layout>
                <Switch>

                    <Route exact path="/">
                        <Redirect to="/dashboard" />
                    </Route>

                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/users" component={Users} />
                    <Route path="/regions" component={Regions} />
                    <Route path="/adapters" component={Adapters} />

                    <Route exact path="/catalog-management" >
                        <Redirect to="/catalog-management/catalog" />
                    </Route>

                    <Route path="/catalog-management/catalog" exact component={Catalog} />
                    <Route path="/catalog-management/types" exact component={Types} />
                    <Route path="/catalog-management/categories" exact component={Categories} />
                    <Route path="/catalog-management/manufacturers" exact component={Manufacturers} />
                    <Route path="/catalog-management/families" exact component={Families} />
                    <Route path="/catalog-management/models" exact component={Models} />

                    <Route path="/catalog-management/licence-generator" exact component={LicenceGenerator} />

                    <Route render={() => <h1>Not found</h1>}/>

                </Switch>
            </Layout>
        );
    }
}

export default App;
