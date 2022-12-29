import React, { useContext } from 'react';
import pic from '../../../assest/cap.jpg';
import pic2 from '../../../assest/SpectruM__1_-removebg-preview.png';
import pic3 from '../../../assest/1.png';
import pic4 from '../../../assest/Captain-america-1.jpg';
import pic5 from '../../../assest/daredevil.jpeg';
import pic6 from '../../../assest/Epic_Iron_Man.webp';
import pic7 from '../../../assest/logan.jpg';
import pic8 from '../../../assest/Moon_Knight_Profile.webp';
import pic9 from '../../../assest/spiderman.jpg';
import pic10 from '../../../assest/Thor_in_LoveAndThunder_Poster.webp';

import {MdPeopleAlt} from 'react-icons/md';
import {MdLocationOn} from 'react-icons/md';
import {BsEmojiSmile} from 'react-icons/bs';
import {FaShieldVirus} from 'react-icons/fa';
import {SiAbletonlive} from 'react-icons/si';
import {MdMessage} from 'react-icons/md';
import {BsFillPeopleFill} from 'react-icons/bs';
import {MdOutlineMapsHomeWork} from 'react-icons/md';
import {IoPeople} from 'react-icons/io5';
import {BsFlagFill} from 'react-icons/bs';
import {MdBatterySaver} from 'react-icons/md';
import {BsCalendar2EventFill} from 'react-icons/bs';
import {CgGames} from 'react-icons/cg';
import {BsFillFileEarmarkSpreadsheetFill} from 'react-icons/bs';
import {IoSettingsSharp} from 'react-icons/io5';
import {MdDarkMode} from 'react-icons/md';
import {FcAbout} from 'react-icons/fc';
import {CgSupport} from 'react-icons/cg';
import {BiSearch} from 'react-icons/bi';
import BookingModal from '../../BookingModal/BookingModal';
import {AiOutlineLogin} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const WritingPost_1 = () => {

    const {user, logOut} = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(err => console.log(err))
    }

    
    return (

           
               <div className='grid lg:grid-cols-3 sm:grid-cols-1'>

{/* 1st part starat___________________________________________________________________________________________ */}

                <div>

                <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

        {/* for small part start____________________________________ */}
      <div className='flex'>
          <img src={pic2} alt="" className='w-20'/>
          <div className="relative mt-3">
              <input type="text" placeholder="username@site.com" className="input input-bordered w-full " /> 
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none"><BiSearch/></button>
          </div>
      </div>


      {/* card design____________ */}
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={pic3} alt="Shoes" className=''/></figure>
  <div className="card-body">
   <div className='mx-auto'>
      <img src={pic} alt="" className='w-14 h-14 rounded-full' />
   </div>
    <div className='text-center'>
        <h2 className="text-base font-bold">MD Riaz</h2>
        <p className='mb-1 text-base'>Mern-Stack Developer</p>
        <hr />
    </div>

    <div className='flex justify-center gap-20'>
       <div>
          <p className='font-bold'>6866</p>
          <p>Followers</p>
       </div>
       <div>
          <p className='font-bold'>1</p>
          <p className='mb-1'>Following</p>
       </div>
    </div>
    <hr />

    <div className='text-center'>
      <p className='text-orange-500 text-base font-extrabold'>My Profile</p>
    </div>



    <div className=" ">
       <div className='flex'>
          <FaShieldVirus className=' pr-2' size='25px' color='purple'/>
          <h1 className='text-base mb-2 '> Covid-19 Information Center</h1>
       </div>
        <div className='flex'>
            <SiAbletonlive className=' pr-2' size='25px' color='red'/>
            <h1 className='text-base mb-2'>Live Videos</h1>
        </div>

        <div className='flex'>
            <MdMessage className=' pr-2' size='25px' color='purple'/>
            <h1 className='text-base mb-2'>Messages</h1>
        </div>

       <div className='flex'>
            <BsFillPeopleFill className=' pr-2' size='25px' color='blue'/>
            <h1 className='text-base mb-2'>Groupes</h1>
       </div>

        <div className='flex'>
            <MdOutlineMapsHomeWork className=' pr-2' size='25px' color='blue'/>
            <h1 className='text-base mb-2'>Marketplace</h1>
        </div>


        <div className='flex'>

            <IoPeople className=' pr-2' size='25px' color='blue'/>
            <h1 className='text-base mb-2'>Friends</h1>
        </div>

        <div className='flex'>
          <BsFlagFill className=' pr-2' size='25px' color='orange'/>
          <h1 className='text-base mb-2'>Pages</h1>
        </div>
       

       <div className='flex'>
            <MdBatterySaver className=' pr-2' size='25px' color='purple'/>
            <h1 className='text-base mb-2'>Saved</h1>
       </div>


       <div className='flex'>
          <BsCalendar2EventFill className=' pr-2' size='25px' color='red'/>
          <h1 className='text-base mb-2'>Events</h1>
       </div>


       <div className='flex'>
            <CgGames className=' pr-2' size='25px' color='purple'/>
            <h1 className='text-base mb-2'>Games</h1>
       </div>


       <div className='flex'>

              <BsFillFileEarmarkSpreadsheetFill className=' pr-2' size='25px' color='blue'/>
              <h1 className='text-base mb-2'>Ads Manager</h1>
       </div>


       <div className='flex'>
              <IoSettingsSharp className=' pr-2' size='25px' color='gray'/>
              <h1 className='text-base mb-2'>Settings</h1>
       </div>


       <div className='flex'>

        <MdDarkMode className=' pr-2' size='25px' color='purple'/>
        <h1 className='text-base mb-2'>Dark Mode</h1>

       </div>


       <Link to="/about">  <div className='flex'>

<FcAbout className=' pr-2' size='25px'color='purple'/>
<h1 className='text-base mb-2'>About</h1>

</div></Link>


       <div className='flex'>
          <CgSupport className=' pr-2' size='25px' color='green'/>
          <h1 className='text-base mb-2'>Support</h1>

       </div>




       {
        user?.uid ? 

        <Link onClick={handleLogOut}>
        <div className='flex'>
           <AiOutlineLogin className=' pr-2' size='25px' color='green'/>
           <h1 className='text-base mb-2'>SignOut</h1>
        </div>
        </Link>

        : 

        <Link to="/login">
        <div className='flex'>
           <AiOutlineLogin className=' pr-2' size='25px' color='green'/>
           <h1 className='text-base mb-2'>Login</h1>
        </div>
        </Link>
       }

       
       
        
       
  
    </div>
  </div>
</div>

        {/* for small part start____________________________________ */}

      </ul>
    </div>



{/* for large part___________________________________________________________--- */}

    <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-20">

      <div className='flex'>
          <img src={pic2} alt="" className='w-20'/>
          <div className="relative mt-3">
              <input type="text" placeholder="username@site.com" className="input input-bordered w-full " /> 
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none"><BiSearch/></button>
          </div>
      </div>


      {/* card design____________ */}
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={pic3} alt="Shoes" className=''/></figure>
  <div className="card-body">
   <div className='mx-auto'>
      <img src={pic} alt="" className='w-14 h-14 rounded-full' />
   </div>
    <div className='text-center'>
        <h2 className="text-base font-bold">MD Riaz</h2>
        <p className='mb-1 text-base'>Mern-Stack Developer</p>
        <hr />
    </div>

    <div className='flex justify-center gap-20'>
       <div>
          <p className='font-bold'>6866</p>
          <p>Followers</p>
       </div>
       <div>
          <p className='font-bold'>1</p>
          <p className='mb-1'>Following</p>
       </div>
    </div>
    <hr />

    <div className='text-center'>
      <p className='text-orange-500 text-base font-extrabold'>My Profile</p>
    </div>



    <div className=" ">
       <div className='flex'>
          <FaShieldVirus className=' pr-2' size='25px' color='purple'/>
          <h1 className='text-base mb-2 '> Covid-19 Information Center</h1>
       </div>
        <div className='flex'>
            <SiAbletonlive className=' pr-2' size='25px' color='red'/>
            <h1 className='text-base mb-2'>Live Videos</h1>
        </div>

        <div className='flex'>
            <MdMessage className=' pr-2' size='25px' color='purple'/>
            <h1 className='text-base mb-2'>Messages</h1>
        </div>

       <div className='flex'>
            <BsFillPeopleFill className=' pr-2' size='25px' color='blue'/>
            <h1 className='text-base mb-2'>Groupes</h1>
       </div>

        <div className='flex'>
            <MdOutlineMapsHomeWork className=' pr-2' size='25px' color='blue'/>
            <h1 className='text-base mb-2'>Marketplace</h1>
        </div>


        <div className='flex'>

            <IoPeople className=' pr-2' size='25px' color='blue'/>
            <h1 className='text-base mb-2'>Friends</h1>
        </div>

        <div className='flex'>
          <BsFlagFill className=' pr-2' size='25px' color='orange'/>
          <h1 className='text-base mb-2'>Pages</h1>
        </div>
       

       <div className='flex'>
            <MdBatterySaver className=' pr-2' size='25px' color='purple'/>
            <h1 className='text-base mb-2'>Saved</h1>
       </div>


       <div className='flex'>
          <BsCalendar2EventFill className=' pr-2' size='25px' color='red'/>
          <h1 className='text-base mb-2'>Events</h1>
       </div>


       <div className='flex'>
            <CgGames className=' pr-2' size='25px' color='purple'/>
            <h1 className='text-base mb-2'>Games</h1>
       </div>


       <div className='flex'>

              <BsFillFileEarmarkSpreadsheetFill className=' pr-2' size='25px' color='blue'/>
              <h1 className='text-base mb-2'>Ads Manager</h1>
       </div>


       <div className='flex'>
              <IoSettingsSharp className=' pr-2' size='25px' color='gray'/>
              <h1 className='text-base mb-2'>Settings</h1>
       </div>


       <div className='flex'>

        <MdDarkMode className=' pr-2' size='25px' color='purple'/>
        <h1 className='text-base mb-2'>Dark Mode</h1>

       </div>


     <Link to="/about">  <div className='flex'>

<FcAbout className=' pr-2' size='25px'color='purple'/>
<h1 className='text-base mb-2'>About</h1>

</div></Link>


       <div className='flex'>
          <CgSupport className=' pr-2' size='25px' color='green'/>
          <h1 className='text-base mb-2'>Support</h1>

       </div>



       {
        user?.uid ? 

        <Link onClick={handleLogOut}>
        <div className='flex'>
           <AiOutlineLogin className=' pr-2' size='25px' color='green'/>
           <h1 className='text-base mb-2'>SignOut</h1>
        </div>
        </Link>

        : 

        <Link to="/login">
        <div className='flex'>
           <AiOutlineLogin className=' pr-2' size='25px' color='green'/>
           <h1 className='text-base mb-2'>Login</h1>
        </div>
        </Link>
       }



       
       
       
        
       
  
    </div>
  </div>
</div>
       
    </ul>
    {/* for large part END___________________________________________________________--- */}

  </div>

                </div>


                {/* 1st part end______________________________________________________________________ */}
                     




{/* midd;e part_________________________________________ */}

<div>


<div className="card w-full bg-base-100 shadow-xl  mb-10 ">
  <div className="card-body">
    <h2 className="card-title mb-3">Write a post</h2>
       <div className='flex gap-5'>
            <img src={pic} alt="" className='w-14 h-14 rounded-full' />
            {/* <input type="text" placeholder="What's on your Mind?" className="input input-bordered input-accent w-full rounded-full" /> */}

           


            

            <label htmlFor="booking-modal" className="btn btn-active btn-ghost  rounded-full w-4/5" >What's on your Mind?</label>
       </div>
    <div className="card-actions justify-around">
      <button className="btn btn-ghost btn-sm"><MdPeopleAlt size='25px' color='blue' className='pr-1' />Tag People </button>
      <button className="btn btn-ghost btn-sm"><BsEmojiSmile size='25px' color='lime' className='pr-1'/>feeling/Activity</button>
      <button className="btn btn-ghost btn-sm"><MdLocationOn size='25px' color='red' className='pr-1'/>Check in</button>
    </div>
  </div>
</div>


</div>

<BookingModal></BookingModal>

{/* middle part END_________________________________________ */}






{/* third part START________________________________________________________________ */}
<div className='lg:block hidden ml-20'>

  <h1 className='text-lg font-bold text-center mt-10'>Who is following you</h1>

  <div className='flex mt-5 gap-3 justify-start '>
      <div>
          <img src={pic4} alt="" className='w-16 h-16 rounded-full' />
      </div>

      <div className='mr-7'>
            <p className='font-bold'>Captain America</p>
            <p className='text-sm'>@captainAmerica</p>
      </div>

      <div>
          <button className="btn btn-secondary btn-sm">Button</button>
      </div>
  </div>




  <div className='flex mt-5 gap-3 justify-start '>
      <div>
          <img src={pic5} alt="" className='w-16 h-16 rounded-full' />
      </div>

      <div className='mr-7'>
            <p className='font-bold'>Dare Devil</p>
            <p className='text-sm'>@dareDevil</p>
      </div>

      <div>
          <button className="btn btn-secondary btn-sm">Button</button>
      </div>
  </div>



  <div className='flex mt-5 gap-3 justify-start '>
      <div>
          <img src={pic6} alt="" className='w-16 h-16 rounded-full' />
      </div>

      <div className='mr-7'>
            <p className='font-bold'>Iron Man</p>
            <p className='text-sm'>@ironMan</p>
      </div>

      <div>
          <button className="btn btn-secondary btn-sm">Button</button>
      </div>
  </div>




  <div className='flex mt-5 gap-3 justify-start '>
      <div>
          <img src={pic7} alt="" className='w-16 h-16 rounded-full' />
      </div>

      <div className='mr-7'>
            <p className='font-bold'>Wolverine</p>
            <p className='text-sm'>@wolverine</p>
      </div>

      <div>
          <button className="btn btn-secondary btn-sm">Button</button>
      </div>
  </div>




  <div className='flex mt-5 gap-3 justify-start '>
      <div>
          <img src={pic8} alt="" className='w-16 h-16 rounded-full'/>
      </div>

      <div className='mr-7'>
            <p className='font-bold'>Moon Knight</p>
            <p className='text-sm'>@moonKnight</p>
      </div>

      <div>
          <button className="btn btn-secondary btn-sm">Button</button>
      </div>
  </div>




  <div className='flex mt-5 gap-3 justify-start '>
      <div>
          <img src={pic9} alt="" className='w-16 h-16 rounded-full' />
      </div>

      <div className='mr-7'>
            <p className='font-bold'>SpiderMan</p>
            <p className='text-sm'>@spiderMan</p>
      </div>

      <div>
          <button className="btn btn-secondary btn-sm">Button</button>
      </div>
  </div>



  <div className='flex mt-5 gap-3 justify-start '>
      <div>
          <img src={pic10} alt="" className='w-16 h-16 rounded-full'/>
      </div>

      <div className='mr-7'>
            <p className='font-bold'>Thor</p>
            <p className='text-sm'>@thor</p>
      </div>

      <div>
          <button className="btn btn-secondary btn-sm">Button</button>
      </div>
  </div>

</div>
{/* third part END_________________________________________________________________________ */}

               </div>
            
       
    );
};

export default WritingPost_1;