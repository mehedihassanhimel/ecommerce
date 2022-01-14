import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import swal from 'sweetalert';

const Login = () => {

    const [error, setError] = useState([]);
    const [nouser, setNouser] = useState([]);
    const history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const SubmitLogin = (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('username', username);
        formData.append('password', password);


        axios.post("login", formData)
            .then(resp => {
                console.log(resp.data);
                // if (resp.data.status === 200) {
                //     // swal("Success", resp.data.message, "success")
                //     history.push('/home');
                //     console.log(resp.data);
                //     setError([]);
                // }
                if (resp.data.status === 422) {
                    console.log(resp.data);
                    setError(resp.data.errors);
                    setNouser([]);
                }
                else if (resp.data.status === 500) {
                    setNouser(resp.data);
                    console.log(nouser);
                    setError([]);

                } 
                else{
                    var tokenGet = resp.data;

                    var user = {userId : tokenGet.userid, access_token:tokenGet.token};
                    localStorage.setItem('user',JSON.stringify(user));
                    localStorage.setItem('key',tokenGet.token);
                    console.log(localStorage.getItem('user'));
                    console.log(localStorage.getItem('key'));
                    history.push('/home');
                    setError([]);
                }
            }).catch(err => {
                console.log(err);
            });

    }

    return (
        <div class="container">
            <form >

                <div class="loginForm">
                <div className="field">
                <label ><b>Username</b></label>
                        <input
                        placeholder="Enter Username"
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <span>{error.username}</span>
                    </div>

                    <div className="field">
                <label ><b>Password</b></label>
                        <input
                        placeholder="Enter Password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span>{error.password}</span>
                    </div>
                    <span>{nouser.message}</span>

                    

                </div>


                </form>
                <div className="navbar"><button className="" onClick={SubmitLogin}>Login</button></div>
                
        </div>
    )
}
export default Login;

















