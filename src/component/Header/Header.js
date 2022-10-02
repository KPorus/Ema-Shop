import React from 'react';
import logo from '../../images/Logo.svg'
import { IoIosMenu,IoMdClose} from "react-icons/io";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   const [state, setstate] = useState(false);

   let navBtn = (state)=>{
    setstate(!state);
   }
    return (
        <div >
            <div className='md:w-11/12 mx-auto flex items-center justify-between '>
            
            <logo className='py-4'><Link to = "/"><img src={logo} alt=""></img></Link></logo>
 
   
             <div className={` text-slate-200 sm:block sm:static  absolute ${state ? 'top-16 mb-10 bg-slate-900 flex flex-col z-10 text-center pl-2' : 'top-[-100%]'}`}>
             <Link className='pr-7 hover:text-red-500 ease-in-out duration-300' to='/order'>Order</Link>
             <Link className='pr-7 hover:text-red-500 ease-in-out duration-300' to='/order-review'>Order Review</Link>
             <Link className='pr-7 hover:text-red-500 ease-in-out duration-300' to='/order-Manage'>Order Manage</Link>
             <Link className='pr-7 hover:text-red-500 ease-in-out duration-300' to='/login'>login</Link>
             </div>      

            <div className='text-2xl text-slate-100 sm:hidden' onClick={()=>navBtn(state)} >
             {state === false && (<IoIosMenu/>)}
                {state === true && (<IoMdClose/>)}
                </div>   
         </div>
        </div>
    );
};

export default Header;