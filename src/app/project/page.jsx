
import { BsGithub } from 'react-icons/bs'


import Link from "next/link"

import GetRepos from "../libs/GetRepos"


export default async function page() {
  const repos = await GetRepos()

    return (

      
    
    <div className="relative  top-[150px] h-screen flex flex-col gap-4">
      {repos.map(repo => (
        <section className="bg-black w-1/3 text-center   hover:bg-gray-700 text-white p-3">
          <Link href={repo.html_url} target="_blank" className="cursor-pointer">
            <h2 className="uppercase">{repo.name}</h2>

          </Link>

     
         
        </section>
      ))}
    </div>
    

  )
}
