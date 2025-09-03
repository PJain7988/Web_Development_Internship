import React from 'react'
import { LuLoaderCircle } from "react-icons/lu";
const Loader = () => {
  return (
    <div className='bg-red-600'>
        <LuLoaderCircle size={40} className='animate-spin' />
    </div>
  )
}

export default Loader;