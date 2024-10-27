import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
export const NEXT_AUTH = {
    providers: [
      CredentialsProvider({
        name: "Email",
        credentials: {
          email: { label: "Email", type: "email", placeholder: "Email" },
          password: {
            label: "Password",
            type: "password",
            placeholder: "Password",
          },
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async authorize(credentials: any) {
          console.log(credentials);
          // return null
          return {
            id: "user1",
            email: credentials.email,
            name: "Nik",
          };
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
      }),
      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID || "",
        clientSecret: process.env.GITHUB_CLIENT_SECRET || ""
      })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      session: ({ session, token, user }: any) => {
          console.log(session);
          console.log(token);
        if (session && session.user) {
          session.user.id = token.sub;
        }
        return session;
      },
    },

    pages:{
      signIn: "/signin",
    }
  }