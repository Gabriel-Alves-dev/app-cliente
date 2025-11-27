// app/(site)/layout.tsx
import type { Metadata } from "next";
import "../globals.css";

import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "DAP Advocacia",
  description: "Portal do Cliente",
};

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Sessão do NextAuth (server-side)
  const session = await getServerSession();

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">
        {/* Passa o usuário para o Header */}
        <Header user={session?.user ?? undefined} />
        {children}
      </main>
    </div>
  );
}
