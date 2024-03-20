import React from 'react'

const Loader = ({text}) => {
  return (
    <div className='bg-black h-[100vh] text-white overflow-y-hidden flex justify-center items-center font-bold'>
        {text}{"..."}
    </div>
  )
}
export default Loader;
