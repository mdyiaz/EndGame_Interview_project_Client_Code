import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai';
import {ImDisplay} from 'react-icons/im';
import {BiMessageDots} from 'react-icons/bi';
import {FcAbout} from 'react-icons/fc';


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link><AiOutlineHome/></Link></li>
        
        <li><Link><ImDisplay/></Link></li>
        <li><Link><BiMessageDots/></Link></li>
        <li><Link><FcAbout/></Link></li>
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case font-extrabold text-4xl text-blue-600">SpectruM</Link>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-20">
        <li><Link><AiOutlineHome size='25px'/></Link></li>
        <li><Link><ImDisplay size='25px'/></Link></li>
        <li><Link><BiMessageDots size='25px'/></Link></li>
        <li><Link><FcAbout size='25px'/></Link></li>
    </ul>
  </div>
  <div className=" dropdown dropdown-end navbar navbar-end ">
   <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people"  alt=''/>
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-10 p-2 shadow bg-base-100 rounded-box w-52">
        <li className='text-blue-600 font-bold'><Link>Profile</Link></li>
        <li className='text-blue-600 font-bold'><Link to='/login'>Login</Link></li>
        <li className='text-blue-600 font-bold'><Link to='/register'>Register</Link></li>
      </ul>
  </div>



  











  
</div>





















    );
};

export default Navbar;