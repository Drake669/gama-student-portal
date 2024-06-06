import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {},

      async authorize(_, req) {
        const {
          accessToken,
          //  accessTokenExpires, refreshToken, refreshTokenExpires, user
        } = req.body;

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/users/me`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          const userData = await res.json();

          if (data) {
            return {
              ...req.body,
              user: userData,
            };
          }

          return null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],

  callbacks: {

    async signIn(payload) {

      return true
    },

    async session(payload) {

      return payload;
    },

    async jwt(payload) {
      console.log("DDDDjwt:::", payload);
      return payload;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
    maxAge: 3600, // update the age - 1 hour
  },

  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
