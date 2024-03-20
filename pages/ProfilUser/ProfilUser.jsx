import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'


const ProfilUser = () => {
    const {id}= useParams()

const [users, setUsers]=useState()

    useEffect(()=>{
       axios.get(`http://localhost:3000/users/${id}`)
       .then(res=>{
       setUsers(res.data)
        console.log(res.data);
       })
    },[])
    
  return (
    <div>
        <div>{users?.name}</div>
        <div>{users?.first_name}</div>
        <div>{users?.date_of_birth}</div>
        <div></div>
        <div></div>
    </div>
  )
}

export default ProfilUser
