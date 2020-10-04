import React from 'react';
import HeaderComponent from './Components/HeaderComponent'
import { BrowserRouter as Router,Switch } from 'react-router-dom';
import ProductSolutionsComponent from './Components/ProductSolutionsComponent'
function App() {
    return (
        <div className="App" >
            <Router>
                <HeaderComponent />
                <Switch>
                    <ProductSolutionsComponent />
                </Switch>
            </Router>
        </div>
    );
}

export default App;