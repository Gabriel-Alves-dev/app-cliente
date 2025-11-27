import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.email === "cliente@dap.com" &&
          credentials?.password === "123456"
        ) {
          // Usuário mockado com CPF incluído
          return {
            id: "1",
            name: "Bruno Durão",
            email: "cliente@dap.com",
            cpf: "123.456.789-00", // <-- AQUI!
            image: null,
          };
        }

        return null;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user && "cpf" in user) {
        token.cpf = user.cpf ?? null;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.cpf = token.cpf ?? null;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
