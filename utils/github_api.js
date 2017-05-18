import Github from 'github-api'

const gh = new GitHub({
   username: process.env.GITHUB_NAME,
   password: process.env.GITHUB_PWD
   /* also acceptable:
      token: 'MY_OAUTH_TOKEN'
    */
})

export default gh