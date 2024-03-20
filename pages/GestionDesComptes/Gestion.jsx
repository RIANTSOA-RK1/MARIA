import React, { useState, useEffect } from 'react';
import { fetchUser } from '../../utils/service/ApiUser';
import Creation from './Creation';

function Gestion() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await fetchUser();
                setUserData(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        

    <div className="home d-flex justify-content-center w-100 ">
         <div className=''>

         <h1 className='titreListe'>Listes de Nos Clients</h1>
        <div className="listePersonnes">
           
            <thead className="header">
                <tr className=''>
                    <th className="titre bg-info ">Name</th>
                    <th className="titre bg-success ">Firstname</th>
                    <th className="titre bg-primary ">Date of Birth</th>
                    <th className="titre bg-secondary">Monthly Salary </th> 
                    <th className="titre bg-dark">Account Number</th>
                </tr>
            </thead>
            <tbody className="bodyListe" >
                {userData.map((user, index) => (
                    <tr key={index} className={index%2===0? "btnwhiteIndex":"btnGrayIndex" }>
                        <td className="liste">{user.name}</td>
                        <td className="liste">{user.first_name}</td>
                        <td className="liste">{user.date_of_birth}</td>
                        <td className="liste">{user.monthly_net_salary}€</td>
                        <td className="liste countNumber">{user.account_number}</td>
                    </tr>
                ))}
            </tbody>
        </div>
         </div>
        
           
           <Creation/>
    
    </div>

    );
}

export default Gestion;
