import React, { useContext } from 'react';
import pic from '../../assest/cap.jpg'
import {BiPhotoAlbum} from 'react-icons/bi'
import {BsPeopleFill} from 'react-icons/bs'
import {AiOutlineSmile} from 'react-icons/ai'
import {HiMapPin} from 'react-icons/hi2'
import {IoFlag} from 'react-icons/io5'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const BookingModal = () => {

    const {register, handleSubmit} = useForm();
  

    const imgHostKey = process.env.REACT_APP_imgbb_key;

    const navigate= useNavigate();

    const postStatus = data =>{
            const image = data.image[0];
            const formData = new FormData();
            formData.append('image', image);
            const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
            fetch(url, {
                method: 'POST',
                body: formData
            })
            .then(res => res.json())
            .then(imgData => {
                if(imgData.success){
                    console.log(imgData.data.url);
                    const post = {
                        status: data.text,
                        image: imgData.data.url,
                        like: 0,
                        time: new Date().getTime()
                    }

                    fetch('https://endgame-interview-project-server.vercel.app/post', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(post)
                    })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        toast.success('Status is added successfully');
                        navigate('/media2');

                    })
                }
                
            })
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg text-center mb-5 font-bold">Create Post</h3> <hr />
    <div className='flex mt-4 mb-4 gap-2'>
        <img src={pic} alt="" className='rounded-full w-12 h-12' />
        <p className='font-extrabold text-sm'>MD Riaz</p>
    </div>


    {/* form START______________________________________________________ */}
    <form onSubmit={handleSubmit(postStatus)}>

        {/* <input type="text" className="textarea textarea-ghost w-full h-28 mb-5 text-sm text-black" placeholder="What's on your mind?"></input> */}
            





        <div className="form-control w-full ">
           <input type="text" {...register ('text', {required:'Text is required'})}  placeholder="What's on your mind?" className="textarea textarea-ghost w-full h-28 mb-5 text-sm text-black" />
       </div>
       <hr />



            {/* optional start____________________________________
            <div className='mt-4 flex justify-between mb-5'>
                <p className='font-bold'>Add to your post</p>
                <div className='flex gap-5'>
                    <BiPhotoAlbum color='green' size='25px'/>
                    <BsPeopleFill color='blue' size='25px'/>
                    <AiOutlineSmile color='orange' size='25px'/>
                    <HiMapPin color='red' size='25px'/>
                    <IoFlag color='cyan' size='25px'/>
                </div>

            </div>
                <hr /> */}



        <div className="form-control w-full mb-3 mt-3 ">
           <input type="file" {...register ('image')}  placeholder="What's on your mind?" className="textarea textarea-ghost w-full" />
       </div>
       <hr />

       
        <button className="btn btn-active  btn-info w-full text-white btn-sm mt-5" type='submit'>Post</button>
    </form>


        {/* form END______________________________________________________ */}



    </div>
</div>
        </>
    );
};

export default BookingModal;