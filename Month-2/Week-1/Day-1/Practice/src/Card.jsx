import React from 'react'

const Card = (props) => {
  return (
    <div className='p-2 w-[250px] shadow-2xl'>
        <div className='p-3 w-full h-40 flex justify-center'>
            <img src={props.cardData.img} alt="" className='w-30 h-30 rounded-full'/>
        </div>
        <p className="text-center text-gray-800">{props.cardData.title}</p>
        <p className='text-center text-gray-600'>{props.cardData.desc}</p>
        <button className='p-3 text-white bg-amber-400 w-full rounded-xl hover:bg-amber-300 mt-5'>View</button>
    </div>
  )
}

export default Card