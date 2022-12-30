import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import {AiOutlineLike, AiTwotoneDislike} from 'react-icons/ai'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Media_2 = () => {

    const {register, handleSubmit} = useForm();


    const [like, setLike] = useState(false);



   

   




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







    const {data:post = [] , isLoading, refetch:likeRefetch} = useQuery({
        queryKey:['post'],
        queryFn: async () => {
            const res = await fetch('https://endgame-interview-project-server.vercel.app/post')
            const data = await res.json();
            return data;

            
        }
     })







     const {data:comments = [] , refetch} = useQuery({
        queryKey:['comments'],
        queryFn: async () => {
            const res = await fetch('https://endgame-interview-project-server.vercel.app/comment')
            const data = await res.json();
            return data;
        }
     })


     






     const likehandler = (data, id) => {
        const updateLike = data + 1;
        const allData = {
            updateLike,
        }

        const fetchFunction = async () => {
            const loadFetch = await fetch(`http://localhost:5000/likes?id=${id}`, {
                method: 'PATCH',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(allData)
            })
            const response = await loadFetch.json()
            console.log(response);
            likeRefetch()
        }
        fetchFunction()
    }



     if(isLoading){
        return <p>LOading...</p>
     }




    
    return (
        <div>
            
            {
                post?.map(p => {
                    return (
                        <div key={p._id}  className="flex justify-center" >
                          

<div className="card w-96 bg-base-100 shadow-xl mb-10">
  <div className="card-body">
    <h2 className="card-title">{p.status}</h2>
  
    
  </div>
  <figure><img src={p.image} alt="Shoes" className='rounded-xl mb-3' /></figure>
  <hr />
  <div className='flex justify-between mt-2 mb-5'>
    {/* <button onClick={() => setLike((prevLike) => !prevLike)}>Like: {like ? <AiOutlineLike size='25px' /> : <AiTwotoneDislike size='25px'/> }</button> */}

     <button onClick={() =>likehandler(p.like, p._id)} ><AiOutlineLike size='25px' /></button>
      <p>{p.like}</p>
      {/* <button>  <AiTwotoneDislike size='25px'/></button> */}
     

       
       

        <form onSubmit={handleSubmit(handleComment)}>
            <input type="text" {...register ('com', {required:'Text is required'})}  placeholder="write a comment here" className="input input-bordered w-full" /> 

            <button className="btn btn-active  btn-info  text-white btn-sm mt-5" type='submit'>Comment</button>
        </form>
    
  </div>

  <Link to={`/mediadetails/${p._id}`}><button className='btn btn-info text-white btn-sm w-full'>Details</button></Link>


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
                    )
                })
            }


        </div>
    );
};

export default Media_2;