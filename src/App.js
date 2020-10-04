import React from 'react';
import HeaderComponent from './Components/HeaderComponent'
import { BrowserRouter as Router,Switch } from 'react-router-dom';
import ProductSolutionsComponent from './Components/ProductSolutionsComponent'
import AboutComponent from './Components/AboutComponent'
function App() {
    return (
        <div className="App" >
            <Router>
                <HeaderComponent />
                <Switch>
                    <AboutComponent/>
                    {/* <ProductSolutionsComponent /> */}
                </Switch>
            </Router>
        </div>
    );
}

export default App;