import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CustomerList = () => {

    const [customer, setCustomer] = useState([]);

 

   
    useEffect(() => {
        AllCustomerList();
    }, [])

    const AllCustomerList = () => {
        axios.get("customer/list")
        .then(resp => {
            console.log(resp.data);
            setCustomer(resp.data);
        }).catch(err => {
            console.log(err);
        });
    }


   // ActiveCustomer
   const ActiveCustomer = (id) => {
    axios.get(`active/customer/${id}`)
        .then(resp => {
                if(resp.data === 200)
                    {
                        AllCustomerList();
                        console.log(resp.data);
                    }
        }).catch(err => {
            console.log(err);
        });
}
    


   // ActiveCustomer
   const DeactiveCustomer = (id) => {
    axios.get(`deactive/customer/${id}`)
        .then(resp => {
                if(resp.data === 200)
                    {
                        AllCustomerList();
                        console.log(resp.data);
                    }
        }).catch(err => {
            console.log(err);
        });
}

    return (
        <div className="container">
            <h1>Customer List</h1>

            <table>
                <tr>
                <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Status</th>
            {/* <th></th> */}
                    <th colSpan={2}>Action</th>
                </tr>
                
                {
                    customer.map(a => (
                        <tr >
  
                            <td>{a.name}</td>
                            <td>{a.uname}</td>
                            <td>{a.email}</td>
                            <td>{a.phone}</td>
                            <td>{a.address}</td>
                            <td>{a.status}</td>
 
                            <td><button className="buttonDetails3" onClick={() =>ActiveCustomer(a.id)} ><p>Active</p></button></td> 
                            <td><button className="buttonDetails3" onClick={() =>DeactiveCustomer(a.id)} ><p>Deactive</p></button></td>  
                            
                           
                        </tr>
                    ))
                }
            </table>
        </div>
    )


}
export default CustomerList; 