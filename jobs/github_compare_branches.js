import gh from 'utils/github_api'

const Repo = (name) => gh.getRepo(name)

export const interval = 300000
export const promise = (fulfill, reject) => {
  const { repoName, base, head } = {
    repoName: 'force',
    base: 'release',
    head: 'master'
  }
  Repo(repoName).compare_branches(base, head).then((data) => {
    console.log(data)
    fulfill(data)
  }).error(reject)
}
