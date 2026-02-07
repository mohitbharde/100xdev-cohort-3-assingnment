import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "you@company.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        console.log("username: ", username, " password: ", password);
        try {
          const res = await axios.post("http://localhost:3001/signin", {
            username: username,
            password: password,
          });

          console.log("res of authorize function :", res.data);

          return {
            id: res.data.userId,
            email: res.data.email,
          };
        } catch (error) {
          console.log(error);
        }

        // If no error and we have user data, return it

        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/login", // custom login page route
  },
  secret: "Mohit bhai",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
