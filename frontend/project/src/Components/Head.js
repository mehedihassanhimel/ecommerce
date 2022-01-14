import React from "react";
import { Link } from "react-router-dom";
const Head = () =>{
    return(
        <div class="jumbotron jumbotron-fluid btn btn-outline-light text-dark">
            <header className='navbar'>
            {/* <div className='navbar__title navbar__item'></div> */}
            <div class='navbar'>
            <Link className="button  button2" to="/home">Home</Link>
            <Link className="button  button2" to="/add/category">Add Category</Link>
                <Link className="button  button2" to="/category/list">Category List</Link>
                <Link className="button  button2" to="/add/product">Add Product</Link>
                <Link className="button  button2" to="/product/list">Product List</Link>
                
                <Link className="button  button2" to="/add/deliveryMan">Create DeliveryMan</Link>
                <Link className="button  button2" to="/deliveryMan/list">DliveryMan List</Link>
                
                

                {/* <Link className="button  button2" to="#">Manage Order</Link>
                <Link className="button  button2" to="#">Order History</Link> */}
                <Link className="button  button2" to="/customer/list">Customer Status</Link>
                <Link className="button  button2" to="/logout">Logout</Link>
            </div>
            </header>
        </div>
    )
}
export default Head; 