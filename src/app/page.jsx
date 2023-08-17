"use client"

import React from 'react'
import Image from 'next/image'





export default function page() {

  const [text, setText] = React.useState('')
  function handleText(event) {
    const newText = event.target.value
    setText(newText)

  }

  


  return (
    <div>
      <div className='bg-[url(/77.jpg)] bg-cover min-h-screen '>
        
        <div className='m-auto text-center pt-28 text-black'>
        <div className=' '>
       
          <input  type="text" name="text" id="text"
            placeholder="Type text here "
           
            className="w-1/2 py-5 my-5 outline-none  border-purple-900 border-4 rounded-xl"
            value={text}
            onChange={handleText}
            
          /> 
          </div>
        </div>

        <div className=' text-white  uppercase text-center  text-8xl hover:text-purple-900 hover:animate-bounce m-9 '>
          <h1> welcome
          </h1 >
        </div>
      </div>


      <div className='bg-[url("/bh.jpeg")]  bg-cover   '>

        <div className='text-white hover:text-purple-500 text-3xl uppercase gap-2  font-semibold'>About Me</div>
        {/* <div className='flex grid-col-2 items-center h-[50px] justify-center m-4 p-4 gap-3 '>
flex   py-8 px-3 h-full    border-t-4  border-b-4   border-r-4  border-l-4 rounded-lg
        "
        </div> */}
        <div className=" block  bg-white p-8 mt-5 m-auto   rounded-lg shadow-md w-96 h-aut0  ">
          <Image className=' mx-8 rounded-e-3xl items-center' src="/my.jpg" width="100" height="100" alt="ife" />
          <p className='text-xl space-x-4 text-purple-400  hover:text-purple-600    '>
            AKINSANYA Sofiat  would likely play a crucial role in creating the user interface and experience
            of websites and web applications. They would be proficient in HTML, CSS,
            and JavaScript and may also have  expertise in front-end frameworks like React
            As a front-end developer, i would likely collaborate with other team members,
            including back-end developers, designers, and UX specialists,
            to create successful and user-friendly digital projects.


          </p>
        </div>
      </div>

      {/* <div className='bg-[url("/bgggg.jpg")]  bg-cover min-h-screen'>

  
     
    

      </div> */}

    </div>











  )



}





