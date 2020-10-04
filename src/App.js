import React from 'react';
import HeaderComponent from './Components/HeaderComponent'
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import ProductSolutionsComponent from './Components/ProductSolutionsComponent'
function App() {
    return (
        <div className="App" >
            <Router>
                <HeaderComponent />
                <Switch>
                    {/* <Route path='/' exact component={HomeComponent} /> */}
                    <Route path="/product-solutions" component={ProductSolutionsComponent} />
                    {/* <Route path="/company/aboutus" component={} />
                    <Route path="/company/vision-mission-values" component={} />
                    <Route path="/company/quality-control" component={} />
                    <Route path="/company/director-message" component={} />
                    <Route path="/company/affiliation" component={} />
                    <Route path="/careers/whytdc" component={} />
                    <Route path="/contact/headoffice" component={} />
                    <Route path="/contact/manufacturing-unit" component={} />
                    <Route path="/contact/product-solutions" component={} /> */}
                </Switch>
            </Router>
        </div>
    );
}

export default App;