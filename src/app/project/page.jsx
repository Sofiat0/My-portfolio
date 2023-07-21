import Link from "next/link"
import GetRepos from "../libs/GetRepos"
import { BsLinkedin } from 'react-icons/bs'

export default async function page() {
  const repos = await GetRepos()

  return (
    <div>
      {repos.map(repo => (
        <section className="w-1/3 h-[100px] bg-black text-white hover:bg-gray-700 ">
          <Link href={repo.html_url} target="_blank">
            <h2 className="uppercase">{repo.name}</h2>
          </Link>
          <h2>{repo.description}</h2>
          <h2> Forked: {repo.forks}</h2>
          <BsLinkedin />
        </section>
      ))}
    </div>
  )
}
