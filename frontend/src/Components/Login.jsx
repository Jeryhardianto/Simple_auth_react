import React, { Fragment, useState } from 'react'
import { Container} from 'react-bootstrap';
import {Link, Redirect, Route} from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import Register from './Register';




const Login = () => {

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[error,setError] = useState('');
    const[redirect,setRedirect] = useState(false);

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
                    url: 'http://localhost:8012/api_login/login.php',
                 
                    data: qs.stringify({  
            
                        email: email,
                        password: password
                    }),   
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                    }
        }
            axios(options).then(function (result) {
              //  console.log(result.data.user);
                if (result.data.user) {
                   // localStorage.setItem('userData', result.data.user);
                    localStorage.setItem('nama', result.data.user.nama);
                  console.log('token', result);
                    setRedirect(true)
                }
                // if (response.data.user) {
                //     console.log(response.data.user);
                //     setLoginStatus(response.data.user);
                  
             else{
                  setError(result.data.error_msg);

             }
           
            })
            // .catch(e => {
            //     console.log(e.response.data.error_msg);
            // });
          
      
        
     }

     

    return (
<Fragment>
{
    redirect && (
         <Redirect to="/dashboard"/>
    )

}
<Container style={{ marginTop:"200px" }} >
    
<div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                         <h4>Login</h4>
                           <hr/>
         {(error)?(            
                                    <div className="alert alert-danger" role="alert">
  {error}
</div>) : (
    <div></div>
)
         }
               
                      
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                  <input type="email" placeholder="Email" className="form-control" value={email} onChange={onChangeEmail} required/> 
                                
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Password</label>
                                 <input type="password" placeholder="Password" className="form-control" value={password} onChange={onChangePassowrd} required/> 
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
</Fragment>
     
    )
}

export default Login
