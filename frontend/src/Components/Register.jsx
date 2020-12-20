import React, { useState } from 'react'
import { Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

const Register = () => {
    const[nama,setNama] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const onChangeName = (e) => {
        const value = e.target.value
        setNama(value)
    }
    const onChangeEmail = (e) =>{
        const value = e.target.value
        setEmail(value)
    }

    const onChangePassowrd = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const onRegister = (e) =>{
            e.preventDefault();

            axios({
            method: 'post',
            url: 'http://localhost/api_login/register.php',
            data: qs.stringify({  
                 nama: nama,
                 email: email,
                 password: password
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
            });
        }
 
    return (
     <Container style={{ marginTop:"200px" }} >
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                         <h4>Register</h4>
                           <hr/>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="">Name</label>
                                  <input type="text" placeholder="nama" className="form-control" value={nama} onChange={onChangeName} /> 
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                  <input type="text" placeholder="Email" className="form-control" value={email} onChange={onChangeEmail} /> 
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Password</label>
                                 <input type="text" placeholder="Password" className="form-control" value={password} onChange={onChangePassowrd}/> 
                                </div>
                                <button className="btn btn-primary" onClick={onRegister} >Sign Up</button>
                                <Link to="/" style={{ marginLeft: "10px" }} className="btn btn-warning">
                                    Cancel
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
    </Container>
    )


}
export default Register
