import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId:"ce2bad415a9295f43e25",
      clientSecret: "7a8c62f1797ffb61ad44678c0bf0739c8a2e6cac",
    }),
    // ...add more providers here
  ],
 
})


