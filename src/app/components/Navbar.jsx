
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (

        <div className='flex justify-center gap-10 p-4 border-b-2 border-b-slate-500 bg-slate-200  w-screen'>
            <Link href="/profile" className=' p-2 rounded-xl hover:text-white hover:bg-blue-700'>Profile</Link>
            <Link href="/about" className=' p-2 rounded-xl hover:text-white hover:bg-blue-700'>about</Link>
        </div>


    )
}

export default Navbar