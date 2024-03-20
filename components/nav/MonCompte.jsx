import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import './compte.css'



const MonCompte = ({toggleModal, OuvrerModal}) => {
  const [compteNumber, setCompteNumber]=useState("")

  return (
    
         <div className='modalContainer w-100 vh-100 d-flex justify-content-center align-items-center'>
           <div className="ModalContenu">
		               
                    <form  >
                          <button className='btn btn-danger d-flex btnfermerModal' onClick={()=>OuvrerModal(false)}>X</button>
		                 <span className='mt-3'>Enter your Compte number:</span>
                            <div className='d-flex gap-3'>
                               <TextField className='form-control ' value={compteNumber}  name='compteNumber'  type="number"   onChange={(e)=>setCompteNumber(e.target.value)}/>
		                       <Button type="submit" variant='contained' className=''>Valider</Button>
                            </div>
                          <div className='d-flex justify-content-between '>
                             
                             <Button className='mt-3' onClick={()=>OuvrerModal(toggleModal)}>Essayer avec un autre methode?</Button>
                          </div>
                     </form>
	          </div>
        </div>
        
  )
}

export default MonCompte
