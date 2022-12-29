import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {AiOutlineLike} from 'react-icons/ai'
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

const MediaDetails = () => {

    const {register, handleSubmit} = useForm();

    const postDetails = useLoaderData();




    const {data:comments = [] , refetch, isLoading} = useQuery({
        queryKey:['comments'],
        queryFn: async () => {
            const res = await fetch('https://endgame-interview-project-server.vercel.app/comment')
            const data = await res.json();
            return data;
        }
     })







    const handleComment = data => {
        // console.log(data);
        const comment = {
            cmnt: data.com,
            name: 'user',
            image: 'https://i.ibb.co/qDQp0k5/logan.jpg'
        }
        fetch('https://endgame-interview-project-server.vercel.app/comment',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            toast.success('Status is added successfully');
            refetch();
        })
    }


    if(isLoading){
        return <p>LOading...</p>
     }




    return (
       <div className='flex justify-center'>

<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{postDetails.status}</h2>
   
  </div>
  <figure><img src={postDetails.image} alt="Shoes" className='rounded-xl' /></figure>



  <div className='flex justify-between mt-2 mb-5'>
        <AiOutlineLike size='25px' />
       

        <form onSubmit={handleSubmit(handleComment)}>
            <input type="text" {...register ('com', {required:'Text is required'})}  placeholder="write a comment here" className="input input-bordered w-full" /> 

            <button className="btn btn-active  btn-info  text-white btn-sm mt-5" type='submit'>Comment</button>
        </form>
    
  </div>

  {
                comments.map(comment => {
                    return (
                        <div >
                            <p className=''>{comment.cmnt}</p>
                            
                        </div>
                    )
                } )
            }
</div>

       </div>
    );
};

export default MediaDetails;