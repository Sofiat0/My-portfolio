

export default async function GetRepos() {
    const repo = await fetch ('https://api.github.com/users/sofiat0/repos ')

    return repo.json()

}
