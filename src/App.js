import React from 'react';
import HeaderComponent from './Components/HeaderComponent'
import { BrowserRouter as Router,Switch } from 'react-router-dom';
import ProductSolutionsComponent from './Components/ProductSolutionsComponent'
import AboutComponent from './Components/AboutComponent'
import VisionComponent from './Components/VisionComponent'

function App() {
    return (
        <div className="App" >
            <Router>
                <HeaderComponent />
                <Switch>
                    {/* <AboutComponent/> */}
                    <VisionComponent/>
                    {/* <ProductSolutionsComponent /> */}
                </Switch>
            </Router>
        </div>
    );
}

export default App;