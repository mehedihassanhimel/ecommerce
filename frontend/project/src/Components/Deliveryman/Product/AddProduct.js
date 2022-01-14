import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import swal from 'sweetalert';

const AddProduct = () => {

    const history = useHistory();
    const [error, setError] = useState([]);

    const [categories, setCategories] = useState([]);

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");
    const [stockDate, setStockDate] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        axios.get("category/list")
            .then(resp => {
                console.log(resp.data);
                setCategories(resp.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);



    const submitProduct = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('category', category);
        formData.append('price', price);
        formData.append('quantity', quantity);
        formData.append('description', description);
        formData.append('stockDate', stockDate);
        formData.append('image', image);
        // var obj = {
        //     "name": name,
        //     "category": category,
        //     "price": price,
        //     "quantity": quantity,
        //     "description": description,
        //     "stockDate": stockDate,
        //     "image": image
            
        // }

        axios.post("add/product", formData)
            .then(resp => {
                if (resp.data.status === 200) {
                    swal("Success", resp.data.message, "success")
                    history.push('/product/list');
                    console.log(resp.data);
                    setError([]);
                }
                else if (resp.data.status === 422) {
                    console.log(resp.data);
                    setError(resp.data.errors);
                }
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
                            onChange={(e) => setName(e.target.value)}
                        />
                        <span>{error.name}</span>
                    </div>
                    <div className="loginForm">
                        <label>Category</label>
                        <select value={category} name="category" onChange={(e) => setCategory(e.target.value)}>
                            <option>Select a category</option>
                            {
                                categories.map(c => (

                                    <option value={c.id}>{c.name}</option>

                                ))
                            }
                        </select>
                        <span>{error.category}</span>
                    </div>
                    <div className="loginForm">
                        <label>Price</label>
                        <input
                            type="text"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <span>{error.price}</span>
                    </div>
                    <div className="loginForm">
                        <label>Quantity</label>
                        <input
                            type="text"
                            name="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                        <span>{error.quantity}</span>
                    </div>
                    <div className="loginForm">
                        <label>Description</label>
                        <input
                            type="text"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <span>{error.description}</span>
                    </div>
                    <div className="loginForm">
                        <label>Stock date</label>
                        <input
                            type="date"
                            name="stockDate"
                            value={stockDate}
                            onChange={(e) => setStockDate(e.target.value)}
                        />
                        <span>{error.stockDate}</span>
                    </div>
                    <div className="loginForm">
                        <label>Upload image</label>
                        <input
                            type="file"
                            name="image"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                        <br/>
                        <span>{error.image}</span>
                    </div>

                </form>
                <button className="add" onClick={submitProduct}>Add</button>
            </div>

        </>
    )
}
export default AddProduct; 