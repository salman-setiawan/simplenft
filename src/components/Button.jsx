import React from 'react'

const Button = (props) => {
  return (
    <div>
        <div className='bg-[#242424] hover:bg-blue-500 py-3 font-semibold text-white flex justify-center'>
          {props.text}
        </div>
    </div>
  )
}

export default Button