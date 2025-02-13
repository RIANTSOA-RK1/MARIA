import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import "./creation.css"
import { Button, TextField } from '@mui/material'
import { FaQuestion } from 'react-icons/fa'
import Axios from 'axios'
import toast from 'react-hot-toast'

export default function Register() {
 const  [details,setDetails] = useState({
   username:'',
   name:'',
   dateDeNaissance:'',
   salaire:'',
   compteNumber:'',
 }) 

 
  const handleChange=(e)=>{
    const {name,value}= e.target;
    setDetails({...details, [name]:value})
    console.log(name,value);
  }

  const handleSubmit=async(e)=>{
      e.preventDefault(e)
      if(!details.email.includes('@')){
        toast.error('Email Adress non valide')
      }else if(details.password !==details.confirmedPassword){
        toast.error('password must be same')
      }
      else{
       await Axios.post('http://localhost:5555/createUser', {...details})
        .then((result)=>console.log(result.data))
        .catch(err=>console.log(err))
      }
  }

  const [creer, setCreer]=useState(true)

  const creerCompte=()=>{
    setCreer(creer=>!creer)
  }

  return (
    <div className=' d-flex justify-content-center '>
      <div>
        {creer===true? (
          <div>
            <div className='d-flex  mb-3'>
                
                <h1 className='text-info'>{creer===true? "Création d'un Compte" : "Modifier Mon Compte"}</h1>
               
            </div>
            
              <div className="loginContenu">
		         <h1> Nouveau compte</h1>
            <form onSubmit={handleSubmit} >
                   <span className='mt-3'>Your First Name:</span>
		                <TextField className='form-control mb-3'  name='username'   onChange={handleChange}/>
                    <span className='mt-3'>Your Name:</span>
		                <TextField className='form-control mb-3'  name='name'   onChange={handleChange}/>
                    <span className='mt-3'>Date of Birth:</span>
		                <TextField className='form-control mb-3'  name='dateDeNaissance'  type="date"  onChange={handleChange}/>
                     <span className='mt-3'>Salaire Net Mensuel:</span>
		                <TextField className='form-control mb-3'  name='salaire'  type="number"   onChange={handleChange}/>
		                 <span className='mt-3'>Compte number:</span>
                    <TextField className='form-control '  name='compteNumber'  type="number"   onChange={handleChange}/>
		         
                  <div className='d-flex justify-content-between '>
                     <Button type="submit" variant='contained' className='mt-3'>Valider</Button>
                     <Button className='mt-3' onClick={()=>creerCompte(false)}>Avez vous dejà un compte?</Button>
                  </div>
             </form>
	          </div>
          </div>
            ):(
             <div className='modificationCompte'>
                <div className='d-flex  mb-3'>
                
                     <h1 className='text-info'>{creer===true? "Création d'un Compte" : "Modifier Mon Compte"}</h1>
               
                 </div>
                     <div className="loginContenu">
		                 <h1> Modification </h1>
                    <form onSubmit={handleSubmit} >
                          
		                         <span className='mt-3'>Compte number:</span>
                            <TextField className='form-control '  name='compteNumber'  type="number"   onChange={handleChange}/>
		                 
                          <div className='d-flex justify-content-between '>
                             <Button type="submit" variant='contained' className='mt-3'>Valider</Button>
                             <Button className='mt-3' onClick={()=>creerCompte(false)}>Retour</Button>
                          </div>
                     </form>
	                  </div>
             </div>
            )
            }
      </div>
    </div>
 
  )
}
