import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../util/API_URL';
import { NavLink } from 'react-router-dom';



const User = () => {

    let [user, setUser] = useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}`).then(response=>{
            console.log(response.data)
            
            setUser(response.data)
        })
    },[]);

    let demo = ()=>{
        console.log("3333333333")
    }


  return (
    <>
<div class="container my-5">
  <div class="row">
    <div class="col-12">
      <table class="table table-bordered table-dark table-striped">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
          
            {
                user.map((value,index)=>{
                    return(
                        <tr>
                        <td>{index+1}</td>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        <td>{value.address.city}</td>
            
                        <td>
                          <NavLink to={"/details/"+(value.id)} class="btn btn-primary">View</NavLink>
                        </td>
                        </tr>
                    )
                })
            }
            
          
        </tbody>
      </table>
    </div>
  </div>
</div>
    </>

  )
}

export default User