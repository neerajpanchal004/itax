import React from 'react'
import AppLayout from '../components/AppLayout'


const Page = () => {
    return (
        <AppLayout>
            <div>
                <div className='flex-cols text-center font-serif mt-20'>
                    <p className='text-3xl sm:text-4xl lg:text-5xl'>About Us</p>
                    <p className='lg:text-xl'>Know Who We Are</p>
                </div>
                <div className=' flex-cols lg:flex  w-full mt-10'>
                    <img src='./image/about-1.jpg' alt="About us" className=' bg-zinc-200 w-full  lg:w-[50%]' />
                    <div className='mx-10 mt-10 lg:mt-32'>
                        <p className='text-2xl'>5+ Years of Experience</p>
                        <p className='my-4'>We are a company that makes it easy to manage your taxes and other daily needs. We started this journey in the year 2019 with a simple idea: people don't have the knowledge or time to manage their own accounts, so we're here to help! We've made it possible for you to do what you need, when you need it. Our products are available online, on your phone, and even in person at our offices!</p>
                        <button className='bg-blue-900 text-white px-5 py-2 rounded-lg'>Learn More</button>
                    </div>
                </div>

                <div className='flex-cols text-center font-serif my-10 lg:my-20'>
                    <p className=' text-3xl sm:text-4xl lg:text-5xl'>Company Story</p>
                    <p className='lg:text-xl mt-5'>Learn About Our Journey</p>
                </div>

                {/* timeline */}
                <div>
                    {/* 2018 */}
                    <div className='flex  mx-20 justify-around gap-x-10'>
                        <div className='p-5 rounded-lg w-full my-5 sm:my-0  sm:w-1/3 shadow-xl h-fit'>
                            <p className='font-bold'>The Beginning</p>
                            <p>The founder develops an idea, registers the company with the government, obtains the necessary legal documents and licenses, and obtains any necessary approvals or clearances from both state and central government agencies.</p>
                        </div>
                        <div className='sm:flex-col sm:flex items-center hidden '>
                            <div className='w-1 h-20 bg-blue-800'></div>
                            <div className='rounded-full  flex flex-col items-center justify-center w-28 h-28  border-2 border-blue-800'>
                                <p className=''>2018</p>

                            </div>
                            <div className='w-1 h-40 lg:h-24 bg-blue-800'></div>

                        </div>
                        <div className=' hidden sm:w-1/3 sm:block'>

                        </div>
                    </div>

                    {/* 2018 */}

                    {/* 2019 */}
                    <div className='flex  mx-20 justify-around gap-x-10'>
                        <div className=' hidden sm:w-1/3 sm:block'>

                        </div>

                        <div className=' hidden sm:flex flex-col items-center'>
                            <div className='w-1 h-40 lg:h-28 bg-blue-800'></div>
                            <div className='rounded-full  flex flex-col items-center justify-center w-28 h-28  border-2 border-blue-800'>
                                <p className=''>2019</p>

                            </div>
                            <div className='w-1 h-80 lg:h-28 bg-blue-800'></div>

                        </div>
                        <div className='p-5 rounded-lg w-full my-5 sm:my-0 sm:w-1/3 shadow-xl h-fit'>
                            <p className='font-bold'>In 2019</p>
                            <p>In December 2019, Itax Easy Private Limited began development of the company's web and app development. We have prepared all the things that are needed to develop our company and idea. Itax Easy Private Limited has a great team who are very dedicated in their work. The team members are very professional, honest and hardworking. They always do their best to make sure that everything is done on time.</p>
                        </div>

                    </div>
                    {/* 2019 */}

                    {/* 2020 */}
                    <div className='flex  mx-20 justify-around gap-x-10'>
                        <div className='p-5 rounded-lg w-full my-5 sm:my-0 sm:w-1/3 shadow-xl h-fit'>
                            <p className='font-bold'>In 2020</p>
                            <p>In the year 2020, the company started meeting people and took Lic of india as well as star health and started doing business In the year 2020, the company started meeting people and took Lic of india as well as star health and started doing business</p>
                        </div>


                        <div className=' hidden sm:flex flex-col items-center'>
                            <div className='w-1 h-40 lg:h-20 bg-blue-800'></div>
                            <div className='rounded-full  flex flex-col items-center justify-center w-28 h-28  border-2 border-blue-800'>
                                <p className=''>2020</p>

                            </div>
                            <div className='w-1 h-40 lg:h-28 bg-blue-800'></div>

                        </div>
                        <div className=' hidden sm:w-1/3 sm:block'>

                        </div>


                    </div>
                    {/* 2020 */}

                    {/* 2021 */}
                    <div className='flex  mx-20 justify-around gap-x-10'>
                        <div className='hidden  sm:w-1/3 sm:block'>

                        </div>

                        <div className=' hidden sm:flex flex-col items-center'>
                            <div className='w-1 h-20 bg-blue-800'></div>
                            <div className='rounded-full  flex flex-col items-center justify-center w-28 h-28  border-2 border-blue-800'>
                                <p className=''>2021</p>

                            </div>
                            <div className='w-1 h-40 lg:h-28 bg-blue-800'></div>

                        </div>
                        <div className='p-5 rounded-lg  w-full my-5 sm:my-0 sm:w-1/3 shadow-xl h-fit'>
                            <p className='font-bold'>In 2021</p>
                            <p>The founder develops an idea, registers the company with the government, obtains the necessary legal documents and licenses, and obtains any necessary approvals or clearances from both state and central government agencies.</p>
                        </div>

                    </div>
                    {/* 2021*/}


                    {/* 2022 */}
                    <div className='flex  mx-20 justify-around gap-x-10'>
                        <div className='p-5 rounded-lg w-full my-5 sm:my-0 sm:w-1/3 shadow-xl h-fit'>
                            <p className='font-bold'>In 2022</p>
                            <p>Itaxeasy Pvt Ltd, a company that provides online tax filing and compliance services, announced a partnership with Yes Bank in 2022. As part of the partnership, Yes Bank will offer Itaxeasy's services to its customers, making it easier for them to file their taxes online. Itaxeasy, in turn, will benefit from the partnership by gaining access to Yes Bank's customer base and expanding its reach in the market. The partnership is expected to be mutually beneficial for both companies, as it combines Itaxeasy's expertise in tax filing with Yes Bank's strong customer base and banking services.</p>
                        </div>


                        <div className='hidden sm:flex flex-col items-center'>
                            <div className='w-1 h-72 lg:h-40 bg-blue-800'></div>
                            <div className='rounded-full  flex flex-col items-center justify-center w-28 h-28  border-2 border-blue-800'>
                                <p className=''>2022</p>

                            </div>
                            <div className='w-1 h-96 lg:h-40 bg-blue-800'></div>

                        </div>
                        <div className=' hidden sm:w-1/3 sm:block'>

                        </div>


                    </div>
                    {/* 2022 */}


                    {/* 2023 */}
                    <div className='flex  mx-20 justify-around gap-x-10'>
                        <div className='hidden sm:w-1/3 sm:block'>

                        </div>

                        <div className='hidden sm:flex flex-col items-center'>
                            <div className='w-1 h-96 lg:h-56 bg-blue-800'></div>
                            <div className='rounded-full  flex flex-col items-center justify-center w-28 h-28  border-2 border-blue-800'>
                                <p className=''>2023</p>

                            </div>
                            <div className='w-1 h-[32rem] lg:h-60 bg-blue-800'></div>

                        </div>
                        <div className='p-5 rounded-lg  w-full my-5 sm:my-0 sm:w-1/3 shadow-xl h-fit'>
                            <p className='font-bold'>In 2023</p>
                            <p>At Itax Easy Private Limited, we believe that everyone deserves to have access to the financial services they need. That's why we've created 'ITAXEASY', a mobile application that makes it easy for you to manage your finances--and make sure you're paying the right amount of taxes. We know that going through the process of filing your taxes can be confusing and time-consuming, but with our easy-to-use app, it's never been easier. You can get all the information you need about your taxes in one place, from start to finish--and then just click 'submit' when it's done! And if you ever want to learn more about how taxes work or what might be affecting them in your particular situation? Our team of experts is here for you. We'll help answer any questions or concerns you might have about how things were calculated or what other factors might be affecting your tax return.
                            </p>
                        </div>

                    </div>
                    {/* 2023*/}

                </div>
                {/* timeline */}

                {/* our mission */}
                <div className='text-center my-12 lg:my-24'>
                    <p className='text-3xl sm:text-4xl lg:text-5xl'>Our Mission</p>
                    <p className='lg:text-xl'>Learn About Our Mission</p>
                </div>
                <div>
                    <div className='flex-cols lg:flex'>
                        <div className='w-full lg:w-1/2  px-10 lg:px-20 py-10 lg:py-40' >
                            <p className='w-full'>A mission statement is typically longer and more detailed than a vision statement and should be specific, measurable and most importantly actionable.For example, a finance company's mission statement may be to 'provide accessible and affordable financial services to underserved communities, while maintaining the highest standards of integrity and customer service.' This mission statement communicates the company's commitment to serving specific customer groups and its emphasis on ethical behavior.
                            </p>

                        </div>
                        <img src='./image/mission.jpg' alt='our mission' className=' w-full lg:w-1/2' />

                    </div>

                    <div className='h-28 w-[80%] rounded-r-full shadow-2xl relative bottom-28 flex flex-cols items-center  justify-center  bg-slate-100'>
                        <p>Our Vision is to make The World Powerful</p>
                    </div>
                </div>

                {/* our mission */}

                {/* our vision */}
                <div className='text-center my-12 lg:my-24'>
                    <p className='text-3xl sm:text-4xl lg:text-5xl'>Our Vision</p>
                    <p className='lg:text-xl'>Learn About Our Vision</p>
                </div>
                <div>
                    <div className='flex-cols lg:flex'>
                        <img src='./image/grow.png' alt='our mission' className=' w-full lg:w-1/2' />

                        <div className='w-full lg:w-1/2  px-10 lg:px-20 py-10 lg:py-40' >
                            <p className='w-full'> A mission statement is typically longer and more detailed than a vision statement and should be specific, measurable and most importantly actionable.For example, a finance company's mission statement may be to "provide accessible and affordable financial services to underserved communities, while maintaining the highest standards of integrity and customer service." This mission statement communicates the company's commitment to serving specific customer groups and its emphasis on ethical behavior.
                            </p>

                        </div>

                    </div>

                    <div className='h-28 w-[80%] rounded-r-full shadow-2xl relative bottom-28 flex flex-cols items-center  justify-center  bg-slate-100'>
                        <p>Our Vision is to make The World Powerful</p>
                    </div>
                </div>
                {/* our vision */}



                {/* footer */}
                <div className='flex justify-center py-5 bg-gray-200 items-center'>
                    <p className='text-xs'>Copyright 2024 | All rights reserved by iTaxEasy</p>
                </div>
                {/* footer */}

            </div>
        </AppLayout>

    )
}

export default Page