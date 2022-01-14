import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import swal from 'sweetalert';

const AddDeliveryman = () => {

    const [error, setError] = useState([]);
    const history = useHistory();

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setConpassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [joiningDate, setJoiningDate] = useState("");
    const [address, setAddress] = useState("");
    const [image, setImage] = useState("");



    const SubmitDeliveryman = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('fname', fname);
        formData.append('lname', lname);
        formData.append('username', username);
        formData.append('password', password);
        formData.append('conpassword', conpassword);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('dob', dob);
        formData.append('conpassword', conpassword);
        formData.append('gender', gender);
        formData.append('joiningDate', joiningDate);
        formData.append('address', address);
        formData.append('image', image);
        // var obj = {
        //     "fname": fname,
        //     "lname": lname,
        //     "username": username,
        //     "password": password,
        //     "conpassword": conpassword,
        //     "email": email,
        //     "phone": phone,
        //     "dob": dob,
        //     "gender": gender,
        //     "joiningDate": joiningDate,
        //     "address": address,
        //     "image": picture.image
        // };


        axios.post("add/deliveryMan", formData)
            .then(resp => {
                if (resp.data.status === 200) {
                    swal("Success", resp.data.message, "success")
                    history.push('/deliveryMan/list');
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
        <br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="container" >
                <form>

                    <div className="loginForm">
                        <label>First name</label>
                        <input
                            type="text"
                            name="fname"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                        />
                        <span>{error.fname}</span>

                    </div>

                    <div className="loginForm">
                        <label>Last name</label>
                        <input
                            type="text"
                            name="lname"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                        />
                        <span>{error.lname}</span>

                    </div>

                    <div className="loginForm">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <span>{error.username}</span>
                    </div>

                    <div className="loginForm">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span>{error.password}</span>
                    </div>
                    <div className="loginForm">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="conpassword"
                            value={conpassword}
                            onChange={(e) => setConpassword(e.target.value)}
                        />
                        {/* <span>{error.fname}</span> */}
                    </div>

                    <div className="loginForm">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span>{error.email}</span>
                    </div>

                    <div className="loginForm">
                        <label>Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <span>{error.phone}</span>
                    </div>

                    <div className="loginForm">
                        <label>Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />
                        <span>{error.dob}</span>
                    </div>
                    <div className="loginForm">
                        <label>Gender</label>
                        {/* <input
                            type="text"
                            name="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                                                />
                        <span>{error.fname}</span> */}
                        <input
                            type="radio"
                            value="Male"
                            name="gender"
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Male

                        <input
                            type="radio"
                            value="Female"
                            name="gender"
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Female
                        <br/>
                        <span>{error.gender}</span>
                    </div>

                    <div className="loginForm">
                        <label>Joining Date</label>
                        <input
                            type="date"
                            name="joiningDate"
                            value={joiningDate}
                            onChange={(e) => setJoiningDate(e.target.value)}
                        />
                        <span>{error.joiningDate}</span>
                    </div>

                    <div className="loginForm">
                        <label>Address</label>
                        <input
                            type="text"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <span>{error.address}</span>
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
                <button  className="add" onClick={SubmitDeliveryman}>Submit</button>
                <br/><br/><br/><br/><br/>
            </div>

        </>
    )
}
export default AddDeliveryman;





