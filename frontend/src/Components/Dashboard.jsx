import React from 'react';
import Logout from './Logout';

const Dashboard = () => {
    const user = localStorage.getItem('nama');
   // console.log('user', user);
    return (
        <div className="jumbotron">
        <div className="container"  >
            <h3>Selamat datang, {user}</h3>
            <Logout/>
        </div>

        </div>
    );
}

export default Dashboard;
