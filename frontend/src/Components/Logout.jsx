import React from 'react';

const Logout = () => {
const HandleLogout = () => {
    const baseURL = "http://localhost:3000/ "
    window.localStorage.clear();
    window.location.href = baseURL;
  }
    return (
         <button className="btn btn-danger" onClick={HandleLogout}>Logout</button>
    );
}

export default Logout;
