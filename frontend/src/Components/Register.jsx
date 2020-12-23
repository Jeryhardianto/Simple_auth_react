import React, { Fragment, useState } from 'react'
import { Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import swal from 'sweetalert';

const Register = () => {
   
    const[nama,setNama] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[error,setError] = useState('');
    const[redirect,setRedirect] = useState(false);

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
 const options = {
                   method: 'post',
            url: 'http://localhost:8012/api_login/register.php',
            data: qs.stringify({  
                 nama: nama,
                 email: email,
                 password: password
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        }
             axios(options).then(function (result) {
                console.log(result.data.user);
                if (result.data.user) {
                    //localStorage.setItem('userData', result.data.user);
                   // setRedirect(true)
                 swal({
          title: "Done!",
          text: "User telah berhasil didaftar silakan ke menu login!",
          icon: "success",
          timer: 5000,
          button: false
        })
                }
                // if (response.data.user) {
                //     console.log(response.data.user);
                //     setLoginStatus(response.data.user);
                  
             else{
                  setError(result.data.error_msg);
                  console.log(result.data.error_msg);
             }
           
            })
 
            setNama('')
            setEmail('')
            setPassword('')
}
 
    return (
     
        <Fragment>
        

<Container style={{ marginTop:"200px" }} >
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                         <h4>Register</h4>
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
                                    <label htmlFor="">Name</label>
                                  <input type="text" placeholder="nama" className="form-control" value={nama} onChange={onChangeName} required/> 
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                  <input type="email" placeholder="Email" className="form-control" value={email} onChange={onChangeEmail} required/> 
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Password</label>
                                 <input type="password" placeholder="Password" className="form-control" value={password} onChange={onChangePassowrd} required/> 
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
        </Fragment>
     
    )


}
export default Register
