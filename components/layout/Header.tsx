"use client";

import { Bell, ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { signOut } from "next-auth/react";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Sidebar } from "./Sidebar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { AvatarInitials } from "@/components/ui/AvatarInitials"; // <-- IMPORTADO AQUI

type HeaderUser = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

interface HeaderProps {
  user?: HeaderUser;
}

export function Header({ user }: HeaderProps) {
  const handleLogout = () =>
    signOut({
      callbackUrl: "/login",
    });

  return (
    <header className="w-full flex items-center justify-between mb-6 px-1">
      {/* Mobile: botão do menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="p-2 rounded-md hover:bg-gray-100">
            <Menu size={22} />
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <Sidebar mobile />
          </SheetContent>
        </Sheet>
      </div>

      <h2 className="text-xl font-semibold hidden md:block"></h2>

      <div className="flex items-center gap-4">
        {/* Sino */}
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <Bell size={20} />
        </button>

        {/* Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition cursor-pointer">
              <AvatarInitials name={user?.name ?? "Cliente"} size={32} /> 
              <span className="text-sm font-medium">
                {user?.name ?? "Cliente"}
              </span>
              <ChevronDown size={18} />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem asChild>
              <Link href="/perfil">Meu perfil</Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="text-red-600 cursor-pointer"
              onClick={handleLogout}
            >
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
