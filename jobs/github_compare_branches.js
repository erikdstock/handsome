import gh from 'utils/github_api'

const Repo = (name) => gh.getRepo(name)

export const interval = 300000
export const promise = (fulfill, reject) => {
  fulfill(compare_branches: {})
  // const { repoName, base, head } = {
  //   repoName: 'davefp/handsome',
  //   base: 'release',
  //   head: 'master'
  // }
  // Repo(repoName).compareBranches(base, head).then((data) => {
  //   console.log(data)
  //   fulfill(data)
  // }).catch(reject)
}
