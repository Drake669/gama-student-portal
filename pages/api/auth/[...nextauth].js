import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(_, req) {
        const { accessToken } = req.body;

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

          return {
            ...req.body,
            user: userData,
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      if (!user) {
        return false;
      }

      if (user && user.accessToken) {
        return true;
      }

      return false;
    },

    async session({ session, token }) {
      if (token?.user) {
        session.user = token?.user;
      }

      const data = {
        ...session,
        token: session.user.accessToken || "",
        tokenExpires: session.user.accessTokenExpires || "",
      };

      return data;
    },

    async jwt({ user, token, trigger, session }) {
      if (user) {
        token.user = user;
      }

      // if (token.user && trigger === "update") {
      //   token.
      // }

      return token;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  debug: true,

  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
