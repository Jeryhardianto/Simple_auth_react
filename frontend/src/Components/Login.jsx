import React, { useState } from 'react'
import { Container, Alert} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

import home from './home'

const Login = () => {

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[loginStatus,setLoginStatus] = useState('');

    const onChangeEmail = (e) =>{
        const value = e.target.value
        setEmail(value)
    }

    const onChangePassowrd = (e) => {
        const value = e.target.value
        setPassword(value)
    }
     const onLogin = (e) =>{
        e.preventDefault();
       
        const options = {
                    method: 'post',
                    url: 'http://localhost/api_login/login.php',
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                    },
                    data: qs.stringify({  
            
                        email: email,
                        password: password
                    })
        }
            axios(options).then(function (response) {
                if (response.data.error_msg) {
                setLoginStatus(response.data.error_msg);
                }else{
              

                }
           
            });
          
     
        
     }

    return (

     <Container style={{ marginTop:"200px" }} >
    
<div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                         <h4>Login</h4>
                           <hr/>
         {(loginStatus)?(            
                                    <div className="alert alert-danger" role="alert">
  {loginStatus}
</div>) : (
    <home/>
)
         }
               
                      
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                  <input type="text" placeholder="Email" className="form-control" value={email} onChange={onChangeEmail} /> 
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Password</label>
                                 <input type="text" placeholder="Password" className="form-control" value={password} onChange={onChangePassowrd}/> 
                                </div>
                                <button className="btn btn-primary" onClick={onLogin} >Sign In</button>
                                <Link to="/register" style={{ marginLeft: "10px" }} className="btn btn-success">
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

  
                
    </Container>
    )
}

export default Login
