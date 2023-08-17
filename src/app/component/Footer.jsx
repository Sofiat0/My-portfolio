"use client"
import React from 'react'
import Link from 'next/link'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BiLogoUnsplash } from 'react-icons/bi'
export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className='h-[300px]  text-center   text-white text-2xl py-16 bg-purple-950 relative  '>


            <ul className="flex justify-center  capitalize h-[100px] space-x-4 text-white items-center  ">

                <Link href='/contact'>
                    <li className="  uppercase  mb-6 text-xl">contact</li>
                </Link>

                <Link href='/project'>
                    <li className="  uppercase mb-6 text-xl">project</li>
                </Link>
                <Link href='/search'>
                    <li className="  uppercase mb-6 text-xl">search</li>
                </Link>

              
            </ul>

            <div className="border  border-purple-500 ">

            </div>
            <p className="mt-4"> All material &copy;  Akinsanya sofiat  {year} </p>
            <div className="text-4xl mt-4 flex justify-center gap-5 py-3  space-x-0  dark:text-gray-50">
                <a href="https://www.linkedin.com/learning/"><BsLinkedin /></a>
                <a href="https://vercel.com/dashboard/"><BsGithub /></a>
                <a href="https://unsplash.com/"><BiLogoUnsplash /></a>
            </div>



        </footer>
    )
}
