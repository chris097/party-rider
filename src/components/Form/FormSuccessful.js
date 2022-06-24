import React from 'react'

const FormSuccessful = (props) => {
  return (
      <div className='bg-white relative flex justify-center rounded-md items-center pl-6 text-black w-full mb-4 h-10'>
          <span>
            <svg width="25" height="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 17.25C4.44365 17.25 0.75 13.5563 0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5563 0.75 17.25 4.44365 17.25 9C17.25 13.5563 13.5563 17.25 9 17.25ZM9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75ZM11.4697 6.21967L7.5 10.1893L5.78033 8.46967L4.71967 9.53033L7.5 12.3107L12.5303 7.28033L11.4697 6.21967Z" fill="#34A853"/>
            </svg>
            </span>
          <div className='text-lg ml-2'>{props.message}. You successful joined the waitlist.</div>
    </div>
  )
}

export default FormSuccessful