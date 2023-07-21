'use client'

import React from 'react'
import Image from 'next/image'







export default function page() {

  const [text, setText] = React.useState('')
  function handleText(event) {
    const newText = event.target.value
    setText(newText)

  }

  return (
    <div className='bg-[url(/wall.gif)] bg-cover h-screen  '>

      <div className='m-auto text-center pt-28'>
        <input type="text" name="text" id="text"
          placeholder="Type text here"
          className="w-1/2 py-5 my-5 outline-none border-blue-900 border-4 rounded-xl"
          value={text}
          onChange={handleText}
        />
      </div>

      <div className=' text-white  uppercase text-center  text-8xl hover:text-purple-900 hover:animate-bounce m-9 '>
        <h1> welcome to my portfolio
        </h1 >
      </div>

     

    <div  className="bg-slate-950">
    <img src="/girl.jpeg" width="100" height="100" alt="ife" />
      
      <h2 className='text-white hover:text-sky-500 text-3xl uppercase   font-semibold '>About Me</h2>

      
        <div className="about-text">
          <p className='text-base text-white '>
            As a developer, I have always been passionate about creating elegant and effective solutions to
            complex problems. I have a strong foundation in software development, with a focus on web
            technologies such as HTML, CSS, and JavaScript. I enjoy working on both the front-end and
            back-end of applications, and I am always looking for ways to optimize performance, improve user
            experience, and ensure the highest level of code quality.
          </p>
                 </div>
        </div>
             
    </div>


    
        



  )



}


 


