import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FaceBookProvider from 'next-auth/providers/facebook'

export default NextAuth ({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: '929648318218-ke31o4c3cfh66uukgujs04tbn2ubfc3o.apps.googleusercontent.com',
        clientSecret: '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'
    }),
    FaceBookProvider({
      clientId: 'msklmcsldmcio34092dkwskcml4034=fe-rf3mdsnsckmdc',
      clientSecret: 'sdcmkrfmo34ij340f9jdsk '
  }),
    // ...add more providers here
  ],
})