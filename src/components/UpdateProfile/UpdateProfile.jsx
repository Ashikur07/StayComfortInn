import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const UpdateProfile = () => {

    const { user } = useContext(AuthContext);

    useEffect(() => {
        document.title = 'Update Profile';
      }, []);

    const handleUpdateInfo = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photo.value;
      
        // update profile
        updateProfile(user, {
            displayName: name,
            photoURL: photoURL,
        })
        .then()
        .catch()

        swal({
            title: "Profile Successfully update..!",
            icon: "success",
            timer: 1500,
        });

        setTimeout(() => {
            window.location.reload();
        }, 1500);

    }

    return (
        <div className='flex flex-col lg:flex-row gap-5 lg:gap-3 lg:mx-60 py-10 lg:py-20'>

            <div className='animate__animated animate__backInLeft mx-5 lg:mx-0 py-14 lg:py-8 px-5 lg:mb-12 rounded-xl lg:rounded-3xl text-center lg:w-[550px] lg:h-[470px] bg-blue-950'>

                <p className='text-xl font-bold text-white pb-6'>Current Profile</p>

                <div className="avatar mb-6">
                    <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} />
                    </div>
                </div>

                <h1 className='text-[#D9AAFF] text-2xl font-bold'>{user.displayName}</h1>
                <p className='text-[#AEA1BD] pt-3 text-sm'>UID : {user.uid}</p>
                <p className='text-[#AEA1BD] py-1 text-base font-bold'>{user.email}</p>
                <h3 className='text-white text-sm'>Registered : {user.metadata.creationTime}</h3>

            </div>


            <div className='animate__animated animate__backInDown mb-24 lg:mb-5 text-white mx-5 lg:mx-0 px-8 lg:px-14 py-8 rounded-xl lg:rounded-3xl lg:h-[470px] lg:w-full bg-blue-950'>

                <h1 className='pb-6 text-xl font-bold  border-b-2 border-dashed'>Update Now!</h1>

                <form onSubmit={handleUpdateInfo}>
                    <p className='pt-8 pb-2 text-lg '>Your Name</p>
                    <input className='text-black font-semibold p-3 mb-4 border rounded-md w-full border-red-600' type="text" name='name' placeholder='Enter Your Name' required />

                    <p className='pb-1 text-lg'>Photo URL</p>
                    <input className='text-black font-semibold p-3 mb-2 border rounded-md w-full border-red-600' type="text" name='photo' placeholder='Enter Photo URL' required />

                    <button className='ml-20 lg:ml-[250px] text-white text-lg mt-5 lg:mt-10 px-10 btn btn-success'>Save</button>
                </form>

            </div>

        </div >
    );
};

export default UpdateProfile;