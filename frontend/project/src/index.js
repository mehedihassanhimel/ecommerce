import React from 'react';
import ReactDOM from 'react-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Head from "./Components/Head";
import Home from "./Components/Home";
// import AllAdmin from './Components/Admin/AllAdmin';
import Login from './Components/Login';

import axios from 'axios';

import AllCategory from './Components/Category/AllCategory';
import AddCategory from './Components/Category/AddCategory';
import EditCategory from './Components/Category/EditCategory';
import AllProduct from './Components/Deliveryman/Product/AllProduct';
import AddProduct from './Components/Deliveryman/Product/AddProduct';
import EditProduct from './Components/Deliveryman/Product/EditProduct';

import ProductDetail from './Components/Deliveryman/Product/ProductDetail';
import AllDeliveryman from './Components/Deliveryman/AllDeliveryman';
import DeliverymanDetail from './Components/Deliveryman/DeliverymanDetail';
import AddDeliveryman from './Components/Deliveryman/AddDeliveryman';
import EditDeliveryman from './Components/Deliveryman/EditDeliveryman';
import Logout from './Components/Logout';
import CustomerList from './Components/Customer/CustomerList';




axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

var token = null; if (localStorage.getItem('user')) { var obj = JSON.parse(localStorage.getItem('user')); token = obj.access_token; } axios.defaults.baseURL = "http://127.0.0.1:8000/api/"; axios.defaults.headers.common["Authorization"] = token;


ReactDOM.render(
  <React.StrictMode>

    <Router>

      <Switch>
        <Route exact path="/">

          <Login></Login>
        </Route>
        <Route exact path="/home">
          <Head />
          <Home />
        </Route>

        <Route exact path="/deliveryMan/list">
          <Head />
          <AllDeliveryman />
        </Route>
        <Route exact path="/deliveryMan/details/:id/:name">
          <Head />
          <DeliverymanDetail />
        </Route>
        <Route exact path="/add/deliveryMan">
          <Head />
          <AddDeliveryman />
        </Route>
        <Route exact path="/edit/deliveryMan/:id">
          <Head />
          <EditDeliveryman />
        </Route>
        <Route exact path="/category/list">
          <Head />
          <AllCategory />
        </Route>
        <Route exact path="/add/category">
          <Head />
          <AddCategory />
        </Route>
        <Route exact path="/edit/category/:id/:name">
          <Head />
          <EditCategory />
        </Route>
        <Route exact path="/product/list">
          <Head />
          <AllProduct />
        </Route>
        <Route exact path="/add/product">
          <Head />
          <AddProduct />
        </Route>
        <Route exact path="/edit/product/:id">
          <Head />
          <EditProduct />
        </Route>
        <Route exact path="/product/details/:id/:name">
          <Head />
          <ProductDetail />
        </Route>
        <Route exact path="/logout">
          <Head />
          <Logout/>
        </Route>
        <Route exact path="/customer/list">
          <Head />
          <CustomerList />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
