import React,{useEffect, useState} from 'react'
import "./creation.css"
import { Button, TextField } from '@mui/material'
import Axios from 'axios'
import toast from 'react-hot-toast'

export default function Creation({userData,setUserData}) {
 const  [details,setDetails] = useState({
   name:'',
   first_name:'',
   date_of_birth:'',
   monthly_net_salary:'',
   account_number:new Date().getTime(),
 }) 

 
  const handleChange=(e)=>{
    const {name,value}= e.target;
    setDetails({...details, [name]:value})
    console.log(name,value);
  }

  const handleSubmit=async(e)=>{
      e.preventDefault(e)
      if(!details.name){
        toast.error('un champ est vide')
      }
      else{
       await Axios.post('http://localhost:3000/users', {...details})
        .then((result)=>console.log(result.data))
        .catch(err=>console.log(err))
        .finally(()=>{
           setUserData([...userData, details])
        })
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
		                <TextField className='form-control mb-3'  name='name'   onChange={handleChange}/>
                    <span className='mt-3'>Your Name:</span>
		                <TextField className='form-control mb-3'  name='first_name'   onChange={handleChange}  required/>
                    <span className='mt-3'>Date of Birth:</span>
		                <TextField className='form-control mb-3'  name='date_of_birth'  type="date"  onChange={handleChange} required/>
                     <span className='mt-3'>Salaire Net Mensuel:</span>
		                <TextField className='form-control mb-3'  name='monthly_net_salary'  type="number"   onChange={handleChange} required/>
		                 <span className='mt-3'>Compte number:</span>
                    
		         
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
