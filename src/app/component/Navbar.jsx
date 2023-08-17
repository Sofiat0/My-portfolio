"use client"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex m-auto justify-between py-3 bg-purple-900 text-white items-center  fixed inset-x-0 z-10">
            <ul className="flex py-3 px-3">
                <Link href='/'>
                    <li className="hover:text-purple-400 text-3xl uppercase   font-semibold rounded-xl">Akinsanya sofiat</li>
                </Link>
            </ul>

            <ul className="flex justify-end text-xl capitalize h-[100px] space-x-4 text-white items-center  ">



                <Link href='/contact'>
                    <li className=" hover:text-purple-400 uppercase  text-2xl">contact</li>
                </Link>
                <Link href='/project'>
                    <li className=" hover:text-purple-400 uppercase  text-2xl">project</li>
                </Link>
                <Link href='/search'>
                    <li className=" hover:text-purple-400 uppercase  text-2xl">search</li>
                </Link>



            </ul>
        </nav>
    )
}
