import React from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Home from './compnents/home';
import About from './compnents/about';
import Product from './compnents/product';
import ProductList from './compnents/productList';
import Navbar from './compnents/navbar'
export default function Routes(){
    return(
        <div>
            <BrowserRouter>
            <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route exact path="/product" component={Product} />
                    <Route path="/product/:id" component={ProductList} />
                    <Route path="*" component={()=> <h1>Page Not Found...</h1>} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}