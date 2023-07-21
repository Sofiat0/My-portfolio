import Link from "next/link";


export default function Navbar() {
    return (
        <nav className="flex m-auto justify-between bg-blue-900 text-white items-center h-15 fixed inset-x-0">
            <ul className="flex py-3 px-3">
                <Link href='/'>
                    <li className="hover:text-sky-500 text-3xl uppercase   font-semibold rounded-xl">Akinsanya sofiat</li>
                </Link>
            </ul>

            <ul className="flex justify-end text-xl capitalize h-[100px] space-x-3 text-white items-center  ">

                <Link href='/writing'>
                    <li className=" hover:text-sky-500 uppercase text-2xl">writing</li>
                </Link>
                <Link href='/speaking'>
                    <li className=" hover:text-sky-500 uppercase  text-2xl">speaking</li>
                </Link>
                <Link href='/project'>
                    <li className=" hover:text-sky-500 uppercase  text-2xl">project</li>
                </Link>
            </ul>


        </nav>
    )
}
