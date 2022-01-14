import React, { useState, userEffect } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import swal from 'sweetalert';

const AddCategory = () => {

    const history = useHistory();
    const [name, setName] = useState("");
    const [error, setError] = useState([]);

    const submitCategory = (event) => {
        event.preventDefault();
        
        var obj = {
            "name": name
        }

        axios.post("add/category", obj)
            .then(resp => {
            if(resp.data.status === 200)
            {
                swal("Success",resp.data.message,"success")
                history.push('/category/list');
                console.log(resp.data);
                setError([]);
            }
            else if(resp.data.status === 422){
                console.log(resp.data);
                setError(resp.data.errors);
            }
            // console.log(resp.data);
            }).catch(err => {
                console.log(err);
            });

    }

    return (
        <>
        <div className="container">
        <form>
            
                <div className="loginForm">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <span>{error.name}</span>
                </div>
                
        </form>
        <button className="add" onClick={submitCategory}>Add</button>
        </div>
        {/* <button onClick={loginSubmit}>Login</button> */}
        </>
    )
}
export default AddCategory; 