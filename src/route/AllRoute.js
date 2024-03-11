import React from 'react';
import {Routes, Route} from 'react-router-dom'
import User from '../component/feature/User';
import Home from '../component/feature/Home';
import UserDetails from '../component/feature/UserDetails';
import UserApi from '../component/feature/UserApi';


const AllRoute = () => {
    return (
  
            <Routes>
                <Route path='' element={<Home/>}/>
                <Route path='user' element={<User/>}/>
                <Route path='details/:x' element={<UserDetails/>}/>

                <Route path='api' element={<UserApi/>}/>


            </Routes>
    )
}

    export default AllRoute;