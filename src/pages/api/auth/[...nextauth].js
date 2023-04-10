import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth ({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: '929648318218-ke31o4c3cfh66uukgujs04tbn2ubfc3o.apps.googleusercontent.com',
        clientSecret: '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'
    }),
    // ...add more providers here
  ],
})