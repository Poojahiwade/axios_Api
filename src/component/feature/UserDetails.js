import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../util/API_URL'

const UserDetails = () => {

    let [data, setData] = useState("");

    let param = useParams()

    useEffect(()=>{
        let id = param.x;
        console.log(id);
        axios.get(`${API_URL}/${id}`).then(response=>{
            console.log("**",response.data);
            setData(response.data);
        })
    },[])
  return (
    <>
        <h1>User Details</h1>
        <table>
            <tr>
                <td>{data.name}</td>
                <td>{data.name}</td>

            </tr>
        </table>
        Name : <h5>{data.name}</h5>
        UserName : <h5>{data.username}</h5>
        Email : <h5>{data.email}</h5>
        City : <h5>{data.phone}</h5>
    </>
  )
}

export default UserDetails