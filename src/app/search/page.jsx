import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
export default function page() {
  return (
    <div>
      <div>
      <FaGithub />
      <div> 
      <Link href="https://github.com/Sofiat0/6b3-wk1/"  > <div className=' bg-[url(/html.png)]  m-auto flex flex-col item-center border-4 mt-28 border-orange-500 p-4 rounded-xl bg-cover h-[300px] w-[300px] '></div> </Link> 
      <Link href="https://github.com/Sofiat0/6B3-WK2/">  </Link>   
       </div>

      <div>
      <Link href="https://github.com/Sofiat0/6B3-WK2/"> <div  className='bg-[url(/css.png)]  m-auto flex flex-col item-center  border-4 mt-28 border-orange-500 p-4 rounded-xl bg-cover h-[300px] w-[300px] '></div>  </Link> 
      <Link href="https://github.com/Sofiat0/6B3-wk4/">  </Link> 
      <Link href="https://github.com/Sofiat0/6B3-Wk5/">  </Link> 
       </div>

      <div>
      <Link href="https://github.com/Sofiat0/6B3-Next"> <div  className='bg-[url(/nextjs.png)] m-auto flex flex-col items-center bg-cover border-4 mt-28 border-orange-500 p-4 rounded-xl h-[300px] w-[300px] '></div>  </Link>   </div>

      
      <div>
        <Link href="https://github.com/Sofiat0/6B3-WK8/"> <div  className='bg-[url(/tailwindcss.png)] m-auto flex flex-col items-center bg-cover border-4 mt-28 border-orange-500 p-4 rounded-xl h-[300px] w-[300px] '></div>  </Link>
         </div>

      <div>
      <Link href="https://github.com/Sofiat0/6B3-WK8/"> <div  className='bg-[url(/javascript.png)]  m-auto flex flex-col items-center bg-cover border-4 mt-28 border-orange-500 p-4 rounded-xl h-[300px] w-[300px] '></div>  </Link> 
         </div>
      </div>
    </div>
  )
}


