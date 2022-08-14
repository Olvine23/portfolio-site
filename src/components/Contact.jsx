import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full  sm:h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/47b0cad4-645a-40bb-906e-00be390342ff" className='flex flex-col max-w-[600px] w-full'>
            <div className='pt-12 mt-10 pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#28c7fa] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> Hit me up with a message or send me an email - <span className='font-bold text-[#28c7fa]'>olivinegeorge@gmail.com</span> </p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:text-[#0a192f] font-bold hover:bg-[#28c7fa] hover:border-[#28c7fa] px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
        </form>
    </div>
  )
}

export default Contact