import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllDeliveryman = () => {

    const [deliverymans, setDeliverymans] = useState([]);

    useEffect(() => {
        AllDeliverymanList();
    }, [])

    const AllDeliverymanList = () => {
        axios.get("deliveryMan/list")
            .then(resp => {
                console.log(resp.data);
                setDeliverymans(resp.data);
            }).catch(err => {
                console.log(err);
            });
    }

// Delete Admin
    const deleteDeliveryman = (id) => {
        axios.get(`deliveryMan/delete/${id}`)
        // axios.get("http://127.0.0.1:8000/api/product/details/"+id+"/"+name)
            .then(resp => {
                    if(resp.data === 'Deleted')
                        {
                            AllDeliverymanList();
                            console.log(resp.data);
                        }
                console.log(resp.data);
            }).catch(err => {
                console.log(err);
            });
    }
    

    return (
        <div className="container">
            <h1>DeliveryMan List</h1>

            <table>
                <tr>
                    <th>Image</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Joining Date</th>
                    <th>Address</th>
                    <th colSpan={3}>Action</th>
                </tr>
                
                {
                    deliverymans.map(a => (
                        <tr >
                            <td>
                                <img src={`http://127.0.0.1:8000/storage/deliveryMans_images/${a.image}`} width="80px" height="90px" alt="" />
                            </td>
                            <td>{a.f_name}</td>
                            <td>{a.l_name}</td>
                            <td>{a.email}</td>
                            <td>{a.phone}</td>
                            <td>{a.dob}</td>
                            <td>{a.gender}</td>
                            <td>{a.joining_date}</td>
                            <td>{a.address}</td>
                            <td><Link className="buttonDetails3" to={"/deliveryMan/details/" + a.id + "/" + a.f_name}><p>Details</p></Link></td>
                            <td><Link className="buttonDetails3" to={"/edit/deliveryMan/" + a.id }><p>Edit</p></Link></td>
                            <td><button className="buttonDetails3" onClick={() =>deleteDeliveryman(a.id)} ><p>Delete</p></button></td>   
                        </tr>
                    ))
                }
            </table>
        </div>
    )


}
export default AllDeliveryman; 