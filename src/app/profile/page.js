"use client"
import React, { useState } from 'react'
import AppLayout from '../components/AppLayout'
import { CiCircleChevRight } from "react-icons/ci";
import { MdErrorOutline } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/slices/userSlice';



const ProfilePage = () => {
    const dispatch = useDispatch()
    const userInfo = useSelector((state) => state.user)
    const { firstname, lastname, email,pan, aadhar, phone , address,gender,pincode} = userInfo;
    const [toggle, setToggle] = useState(false)

    const obj = {
        firstname: "", 
        lastname: "",  
        email:"" ,
        pan:"",
        aadhaar:"",
        phone:"",
        pincode:"",
        gender:"",
        address:""
    }

 function handleChange(obj){
    
    dispatch(add(obj))
    alert("updated")
 }
  
    return (
        <AppLayout>
            <div>
                <div className='flex-cols lg:flex py-5 sm:px-16 lg:px-32 justify-center lg:justify-between'>
                    <div className=' flex flex-col w-full sm:96 lg:w-96 text-center rounded-lg shadow-2xl'>
                        <div className='h-[120px]  w-full bg-cover rounded-t-lg' style={{ backgroundImage: 'url("./image/profile-bg.jpg")' }}>
                            <img src='./image/dummy-profile-pic.jpg' alt='profile' className='rounded-full w-32 relative top-14 mx-auto' />
                        </div>
                        <div className='mt-20'>
                            <p className='font-bold'>{firstname}{lastname}</p>
                            <p>{email}</p>
                        </div>
                        <div>
                            <div className='flex justify-around mt-5 py-5 border-b-[0.5px] border-slate-300'>
                                <div className='flex-col items-center'>
                                    <MdErrorOutline color='red' size={20} className='mx-auto' />
                                    <p>Aadhar</p>
                                </div>

                                <div className='flex-col items-center '>
                                    <CiCircleChevRight color='green' size={20} className='mx-auto' />
                                    <p>Pan</p>
                                </div>

                                <div className='flex-col items-center '>
                                    <CiCircleChevRight color='green' size={20} className='mx-auto' />
                                    <p>Buisness Profile</p>
                                </div>




                            </div>


                            <div className='flex py-5 mx-5 border-b-[0.5px] border-slate-300'>

                                <div className='flex-col items-center '>
                                    <CiCircleChevRight color='green' size={20} className='mx-auto' />
                                    <p>Pan Aadhar Link</p>
                                </div>

                            </div>



                        </div>
                        <button className='rounded-2xl bg-blue-600 text-white w-36 mx-auto py-2 my-5 ' onClick={() => setToggle(true)}>Edit profile</button>


                    </div>
                    <div className='w-[50%] py-20 px-10'>
                        <p className='text-3xl'>Your Profile</p>
                        <div className='grid grid-cols-1 lg:gap-x-20 lg:grid-cols-2 mt-5'>
                            {/* PAN */}
                            <div className='flex-col'>
                                <p>PAN</p>
                                <input type="text" placeholder="Enter your pan number" onChange={(e)=>obj.pan = e.target.value } className='p-3 rounded-lg bg-slate-200 mt-1 w-80  lg:w-auto' />
                            </div>

                            {/* AADHAR */}

                            <div className='flex-col'>
                                <p>AADHAR</p>
                                <input type="text" placeholder="Enter your aadhar number" onChange={(e)=>obj.aadhar = e.target.value } className='p-3 rounded-lg bg-slate-200 mt-1 w-80  lg:w-auto ' />
                            </div>

                            {/* FIRST NAME */}

                            <div className='flex-col'>
                                <p>FIRST NAME</p>
                                <input type="text" placeholder="Enter your first name" onChange={(e)=>obj.firstname = e.target.value } className='p-3 rounded-lg bg-slate-200 mt-1 w-80  lg:w-auto' />
                            </div>
                            {/* LAST NAME */}

                            <div className='flex-col'>
                                <p>LAST NAME</p>
                                <input type="text" placeholder="Enter your last name" onChange={(e)=>obj.lastname = e.target.value } className='p-3 rounded-lg bg-slate-200 mt-1 w-80  lg:w-auto' />
                            </div>

                            {/* EMAIL */}

                            <div className='flex-col'>
                                <p>EMAIL</p>
                                <input type="email" placeholder="Enter your email" onChange={(e)=>obj.email = e.target.value } className='p-3 rounded-lg bg-slate-200 mt-1 w-80  lg:w-auto' />
                            </div>

                            {/* PHONE NUMBER */}


                            <div className='flex-col'>
                                <p>PHONE NUMBER</p>
                                <input type="number" placeholder="Enter your phone number" onChange={(e)=>obj.phone = e.target.value } className='p-3 rounded-lg bg-slate-200 mt-1 w-80  lg:w-auto' />
                            </div>

                            {/* ADDRESS */}

                            <div className='flex-col'>
                                <p>ADDRESS</p>
                                <input type="text" placeholder="Enter your address" onChange={(e)=>obj.address = e.target.value } className='p-3 rounded-lg bg-slate-200 mt-1 w-80  lg:w-auto' />
                            </div>
                            {/* GENDER */}

                            <div className='flex-col'>
                                <p>GENDER</p>
                                <input type="text" placeholder="Enter your gender" onChange={(e)=>obj.gender = e.target.value } className='p-3 rounded-lg bg-slate-200 mt-1 w-80  lg:w-auto' />
                            </div>

                            {/* PIN CODE */}

                            <div className='flex-col'>
                                <p>PIN CODE</p>
                                <input type="number" placeholder="Enter your pin code" onChange={(e)=>obj.pincode = e.target.value } className='p-3 rounded-lg bg-slate-200 mt-1 w-80  lg:w-auto' />
                            </div>

                            

                        </div>
                        <div className='mt-10 '>
                                {toggle && (
                                    <>
                                        <button className='p-2 rounded-xl text-white bg-blue-700' onClick={()=>handleChange(obj)}>Save</button>
                                        <button className='p-2 rounded-xl text-white bg-blue-700 ml-10 lg:ml-20' onClick={()=>setToggle(false)}>Cancel</button>
                                    </>
                                )}





                            </div>

                    </div>

                </div>
            </div>
        </AppLayout>


    )
}

export default ProfilePage