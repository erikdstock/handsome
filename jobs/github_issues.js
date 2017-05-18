import gh from 'utils/github_api'

export const interval = 5000
export const promise = (fulfill, reject) => {
  const { user, repo } = {
    user: 'davefp',
    repo: 'handsome',
  }
  gh.getIssues(user, repo).listIssues({state: 'open'})
  .then((response) => {
    console.log(response.data)
    const issues = Array.map(response.data, (issue) => issue.title )
    console.log(issues)
    fulfill({handsome_issues: {list: issues}})
  }).catch(reject)
}
