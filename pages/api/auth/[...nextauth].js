import axios from "axios";
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
          console.log(userData, "SESSIONONON");

          return {
            ...req.body,
            user: userData,
          };
        } catch (error) {
          console.log("AUTHORIZE_ERROR", error.response.data);
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
      console.log("TOKEN", token);
      console.log("SESSION", session);
      if (token?.user) {
        session.user = token?.user;
      }
      if (session.user?.accessToken) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/users/me`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${session.user.accessToken}`,
              },
            }
          );

          const updatedUserData = await res.json();
          session.user.user = updatedUserData;
        } catch (error) {
          console.log("SESSION_FETCH_ERROR", error);
        }
      }
      const data = {
        ...session,
        token: session.user.accessToken || "",
        tokenExpires: session.user.accessTokenExpires || "",
      };

      return data;
    },

    async jwt({ user, token, trigger, session }) {
      if (trigger === "update" && session.user) {
        token.user = session.user;
      }
      if (user) {
        token.user = user;
      }

      return token;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
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
