
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import swal from 'sweetalert';

const Logout = () => {
    
   const history = useHistory();
//    const [tokenKey, setTokenKey] = useState("");

    useEffect(() => {
        // setTokenKey(localStorage.getItem('key'));
        axios.get(["logout",localStorage.getItem('key')].join('/'))
            .then(resp => {
                if (resp.data.status === 200) {
                    swal("Success", resp.data.message, "success")
                    history.push('/');
                    console.log(resp.data);
                    
                }
                console.log(resp.data);

            }).catch(err => {
                console.log(err);
            });
    }, []);

   
    return (
     <></>
    )
}
export default Logout;

















