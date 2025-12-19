import type { NextAuthCongig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
} satisfies NextAuthCongig;
