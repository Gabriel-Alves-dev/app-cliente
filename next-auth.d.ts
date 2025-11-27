import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    phone?: string | null;

    /** Novo campo */
    cpf?: string | null;
  }

  interface Session {
    user: User;
  }
}

import "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    cpf?: string | null;
  }
}
