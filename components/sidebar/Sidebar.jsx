import React from 'react';
import Nav from '../nav/Nav';
import { FaUniversity } from 'react-icons/fa';
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className=" w-100 ">
            <div className='sidebarLogo'>
                <FaUniversity className='text-primary logoBanque'/>
                <h1 className='text-info '> Ma Banque</h1>
            </div>
                <ul className='p-0 w-100  mt-4'>
                        <Nav/>
                </ul>
        </div>
    );
};

export default Sidebar;
