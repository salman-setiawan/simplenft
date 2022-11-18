import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="w-96">
        <div className='bg-[#242424] shadow-sha1 hover:scale-[1.02] ease-in-out duration-200'>
          <img src={props.img} alt="card_img" />
          <div className='px-5 py-5'>
              <div className='font-semibold mb-0.5'>
                  {props.title}
              </div>
              <div className='text-xs'>
                  {props.desc}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card