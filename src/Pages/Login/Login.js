import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from  '../../assest/login.png';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {

    const {register, formState: {errors}, handleSubmit} = useForm();

    const {signIn, googleSignIn} = useContext(AuthContext);

    const [loginError, setLoginError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();


    const from = location.state?.from?.pathname || '/';



    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch(error => {
            
            console.log(error.message)
            setLoginError(error.message);
        })
    }


    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch(err => console.error(err));
      }
    return (
        // <div className='h-[800px] flex justify-center items-center'>
        //     <h1>This is Login Page</h1>
        // </div>

        <div className=''>
             
        {/* LOGIN HEADER START_____________________________________________________________________ */}
            <h1 className="text-5xl font-bold text-center text-slate-700 mb-20 mt-16">Login now !</h1>
        {/* LOGIN HEADER END_____________________________________________________________________ */}



      <div className='grid lg:grid-cols-2 sm:grid-cols-1'>

              <div className='flex justify-center'>
                  <img src={login} alt="" className='w-96' />
              </div>


              <div>
                    {/* step_1: form ta ke eikhane bosaite hobe_____ */}
{/* LOGIN FORM START_________________________________________________________________________________ */}


<form onSubmit={handleSubmit(handleLogin)}>





<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Email</span>
</label>

<input type="email" {...register("email", {required: "Email address is required"})} placeholder="Enter email" className="input input-bordered w-full max-w-xs" />
{errors.email && <p className='text-red-500' role="alert"> {errors.email?.message}</p>}


</div>



<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Password</span>
</label>

<input type="password" {...register("password", {required: "Password is required",
minLength: { value: 6, message: "password must be 6 characters long" }
})} placeholder="Enter email" className="input input-bordered w-full max-w-xs" />
{errors.password && <p className='text-red-500' role="alert"> {errors.password?.message}</p>}





<label className="label">
<span className="label-text">Forget Password</span>
</label>
</div>





<button className="btn btn-active btn-primary w-full max-w-xs mt-3" type='submit'>Login !</button>

<div>

</div>


{/* login korar somoy bhul kisu dile sheii error msg ta eikhane dekhabe______ */}
{loginError && <p className='text-red-500'>{loginError}</p>}

</form>


{/* LOGIN FORM END_________________________________________________________________________________ */}

<p className='mt-2 mx-3'>Don't Have an Account_? <Link to='/register' className='text-orange-700'> Sign Up</Link></p>

<button onClick={handleGoogleSignIn} className="btn btn-outline btn-info mb-10 mt-5 max-w-xs ">Continue with Google</button>

              </div>
             

      </div>




  </div>
    );
};

export default Login;