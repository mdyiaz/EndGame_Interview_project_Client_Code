import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import registerpic from '../../assest/register.webp'
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {

    const {handleSubmit, register , formState: {errors}} = useForm();

    const {createUser, updateUser} = useContext(AuthContext);

    const [signUpError, setSignUpError] = useState('');

    const navigate = useNavigate();

    const handleSignUp = data => {
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('User Created Successfully');
            const userInfo = {
                displayName: data.name
            }

            updateUser(userInfo)
            .then(() => {
                saveUser(data.name , data.email);
            })
            .catch(err => console.log(err))
        })
        .catch(error => {
            setSignUpError(error.message)
            console.log(error)})
    }



        const saveUser = (name, email) => {
            const user = {name, email};
            fetch('https://endgame-interview-project-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/');
            })
        }



    return (
        <div>
        {/* SignUp HEADER START_____________________________________________________________________ */}
        <h1 className="text-5xl font-bold text-center text-slate-700 mb-20 mt-16">Register Now !</h1>
         {/* signup HEADER END_____________________________________________________________________ */}




         {/* signup body section start__________________________________________________________________________________ */}

         <div className='grid lg:grid-cols-2 sm:grid-cols-1'>

           <div>
               <img src={registerpic} alt="" />
           </div>

           <div>

           <form onSubmit={handleSubmit(handleSignUp)} >


       <div className="form-control w-full max-w-xs">
               <label className="label">
                   <span className="label-text">Name</span>
               </label>
           <input type="name" {...register ('name', {required:'Name is required'})}  placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs" />

       {errors.name &&  <p className='text-red-500'>{errors.name?.message}</p>  }
       </div>
 



   <div className="form-control w-full max-w-xs">
       <label className="label">
           <span className="label-text">Email</span>
        </label>
       <input type="email" {...register ('email', {required:'Email is required'})}  placeholder="Enter email" className="input input-bordered w-full max-w-xs" />

       {errors.email &&  <p className='text-red-500'>{errors.email?.message}</p>  }

   </div>



<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Password</span>
</label>

<input type="password" {...register ('password',
{required:'Pasword is required' , 
minLength: {value: 6, message:'Must be 6 characters'} ,
pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: 'password must be uppercase, lowercase, number and special charecters'}})} 
placeholder="Enter email" className="input input-bordered w-full max-w-xs" />

{errors.password &&  <p className='text-red-500'>{errors.password?.message}</p>  }

</div>




 
<button className="btn btn-active btn-primary w-full max-w-xs mt-5" type='submit'>Sign Up !</button>

<div>
{signUpError && <p className='text-red-500'>{signUpError}</p>}
</div>

</form>

<p className='mt-2'>Already Have an Account_? <Link to='/login' className='text-orange-700'> Login</Link></p>


           </div>
           <hr />
          


         </div>

       {/* signup body section start__________________________________________________________________________________ */}

   </div>
    );
};

export default Register;