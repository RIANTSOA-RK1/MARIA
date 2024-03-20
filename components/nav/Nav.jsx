import { useState } from "react"
import { Button } from "@mui/material"
import {Link } from "react-router-dom/cjs/react-router-dom.min"
import './Nav.css'
import MonCompte from "./MonCompte"


function Nav() {

   
   
    const [toggleModal, setToggleModal]= useState(false)

    const OuvrerModal=()=>{
         setToggleModal(n=>!n)
    }

    return (
        
       <>
           <ul className='ulNav p-0 d-flex justify-content-center'>
            <li>
               <Link to="/" className="linkNav">Dashboard</Link>
            </li>
            <li>
               <Button className=" btnMonCompte bg-info text-white" onClick={()=>setToggleModal(true)}>Mon Compte</Button>
            </li>

            <li>
                <Link to="/gestion"  className="linkNav ">Gestion des Comptes </Link>
            </li>
            <li>
                <Link to="/retrait-argent"  className="linkNav ">Retrait d'Argent</Link>
            </li>
            <li>
                <Link to="/consultation-solde" className="linkNav ">Consultation de Solde</Link>
            </li>
            <li>
                <Link to="/approvisionnement-solde" className="linkNav ">Approvisionnement de Solde</Link>
            </li>
            <li>
                <Link to="/virement" className="linkNav ">Virement</Link>
            </li>
            <li>
                <Link to="/releves-compte" className="linkNav ">Relevés de Compte</Link>
            </li>
            <li>
                <Link to="/categorisation-operations" className="linkNav ">Catégorisation des Opérations </Link>
            </li>
           
        </ul>
       {toggleModal===true? (
        <MonCompte toggleModal={toggleModal} setToggleModal={setToggleModal} OuvrerModal={OuvrerModal}/>
       ):(
        null
       )
       }
       </>
    )
}

export default Nav

