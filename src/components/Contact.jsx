import '../App.css'
import { useState } from 'react'
import join_img from '../assets/images/join-img.png'

function Contact() {

  const [email, setEmail] = useState("");

  return (
    <section className='my-16 mx-12 flex flex-col items-center gap-10 lg:flex-row lg:justify-center scroll-mt-20' id='contact'>

      <div className='flex flex-col items-center gap-5 text-center'>

        <h1 className='text-3xl font-bold lg:text-4xl'>Your Journey <br /> Starts Here</h1>
        <p className='text-sm'>Get up to date with the latest travel and information from us.</p>

        <div className='flex flex-col gap-4'>
          <input
            type="email"
            value={email}
            placeholder='Enter your email'
            className='px-16 py-3 w-full bg-gray-100 rounded-lg outline-none cursor-pointer'
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className='bg-black text-white py-3 rounded-lg'
            onClick={() => setEmail("")}
          >
            Join our newsletter <i className="ri-arrow-right-line" />
          </button>
        </div>

      </div>

      <div>
        <img src={join_img} alt="image" className='max-w-xs rounded-3xl sm:max-w-md' />
      </div>

    </section>
  )
}

export default Contact