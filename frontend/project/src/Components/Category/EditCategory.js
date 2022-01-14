import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const EditCategory = () => {
    const history = useHistory();
    const { name } = useParams();
    const { id } = useParams();
    const [cname, setCname] = useState("");

    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get(`edit/category/${id}/${name}`)
            .then(resp => {
                console.log(resp.data);
                setCategory(resp.data);
                setCname(resp.data.name);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    const submitEditCategory = (event) => {
        event.preventDefault();
        
        var obj = {
            "name": cname,
            "id":id
        }

        axios.post("edit/category", obj)
            .then(resp => {
            if(resp.data === 200)
            {
                history.push('/category/list');
            }
            console.log(resp.data);
            }).catch(err => {
                console.log(err);
            });

    }

    return (
        <>
        <div className="container">
        <form>
            
                <div className="field">
                    <label>Name</label>
                    <input
                        type="text"
                        value={cname}
                        // name="cname"
                        onChange={(e)=>setCname(e.target.value)}
                    />
                </div>
        </form>
        <button className="add" onClick={submitEditCategory}>Add</button>
        </div>
        </>

    )

}
export default EditCategory; 