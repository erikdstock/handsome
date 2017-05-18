import gh from 'utils/github_api'

export const interval = 30000
export const promise = (fulfill, reject) => {
  const { user, repo } = {
    user: 'davefp',
    repo: 'handsome',
  }
  gh.getIssues(user, repo).listIssues({state: 'open'})
  .then((response) => {
    const issues = Array.map(response.data, (issue) => ({ title: issue.title, url: issue.url }) )
    fulfill({handsome_issues: {list: issues}})
  }).catch(reject)
}
