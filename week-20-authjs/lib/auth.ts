/* eslint-disable @typescript-eslint/no-explicit-any */
import CredentialsProvider from "next-auth/providers/credentials";

export const NEXT_AUTH_CONFIG = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(credentials: any) {
        return {
          id: "user1",
          name: "jsdfjlsajflsf",
          userId: "asd",
          email: "fjsldfjs",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
