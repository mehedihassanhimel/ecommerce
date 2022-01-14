
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { name } = useParams();
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`product/details/${id}/${name}`)
            .then(resp => {
                console.log(resp.data);
                setDetails(resp.data);
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


    return (
        <div className="container">
            <br/><br/><br/><br/>
            <div className="">
                <h1>Product details</h1>
                <img src={`http://127.0.0.1:8000/storage/product_images/${details.image}`} width="180px" height="190px" alt="" />
                <h3>Product Name:{details.name}</h3>
                {
                    categories.map(c => {
                        if (details.c_id == c.id) {
                            return <h3>Category:{c.name}</h3>
                        }
                    })
                }
                <h3>Price: {details.price}</h3>
                <h3>Quantity: {details.quantity}</h3>
                <h3>Description: {details.description}</h3>
                <h3>Stock date: {details.stock_date}</h3>
            </div>
        </div>

    )

}
export default ProductDetail;