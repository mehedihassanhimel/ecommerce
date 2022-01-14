import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const EditProduct = () => {
    const history = useHistory();

    const { id } = useParams();


    const [cname, setCname] = useState("");

    const [product, setProduct] = useState([]);
    const [categories, setCategories] = useState([]);

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");
    const [stockDate, setStockDate] = useState("");
    const [image, setImage] = useState("");
    const [pic, setPic] = useState("");

    useEffect(() => {
        axios.get(`edit/product/${id}`)
            .then(resp => {
                // console.log(resp.data);
                setProduct(resp.data);
                setName(resp.data.name);
                setCategory(resp.data.c_id);
                // console.log(resp.data.c_id);
                setPrice(resp.data.price);
                setQuantity(resp.data.quantity);
                setDescription(resp.data.description);
                setStockDate(resp.data.stock_date);
                setPic(resp.data.image);
                console.log(resp.data.image);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        axios.get("category/list")
            .then(resp => {
                // console.log(resp.data);
                setCategories(resp.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    const submitEditProduct = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('id', id);
        formData.append('name', name);
        formData.append('category', category);
        formData.append('price', price);
        formData.append('quantity', quantity);
        formData.append('description', description);
        formData.append('stockDate', stockDate);
        formData.append('image', image);      

        axios.post("edit/product", formData)
            .then(resp => {
            if(resp.data === 200)
            {
                history.push('/product/list');
            }
            console.log(resp.data);
            }).catch(err => {
                console.log(err);
            });

    }

    return (
        <>
            <div className="container">
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <form>

                    <div className="loginForm">
                        <label>Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="loginForm">
                        <label>Category</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                             {
                                categories.map(c => {
                                    if (category == c.id) {
                                        return <option selected value={c.id}>{c.name}</option>
                                    } 
                                    else{
                                        return <option value={c.id}>{c.name}</option>
                                    }

                                })
                            }

                            
                        </select>


                    </div>
                    <div className="loginForm">
                        <label>Price</label>
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="loginForm">
                        <label>Quantity</label>
                        <input
                            type="text"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </div>
                    <div className="loginForm">
                        <label>Description</label>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="loginForm">
                        <label>Product stock date</label>
                        <input
                            type="date"
                            value={stockDate}
                            onChange={(e) => setStockDate(e.target.value)}
                        />
                    </div>
                    <div className="loginForm">
                        <img src={`http://127.0.0.1:8000/storage/product_images/${pic}`} width="80px" height="90px" alt="" />
                        <label>Upload image</label>
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>

                </form>
                <button className="add" onClick={submitEditProduct}>Add</button>
            </div>

        </>

    )

}
export default EditProduct; 