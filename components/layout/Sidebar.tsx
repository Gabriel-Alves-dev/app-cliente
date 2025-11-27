"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Files, 
  LifeBuoy 
} from "lucide-react";
import clsx from "clsx";
import Image from "next/image";


const menu = [
  {
    label: "Início",
    href: "/",
    icon: Home,
  },
  {
    label: "Meus Processos",
    href: "/processos",
    icon: Files,
  },
  {
    label: "Suporte",
    href: "/suporte",
    icon: LifeBuoy,
  },
];

export function Sidebar({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();

  return (
    <aside className={mobile ? "p-4" : "w-64 border-r bg-white p-4 hidden md:flex flex-col"}>
      <div className="flex items-center gap-2 mb-6">
        <Image
          src="/images/dap-logo.svg"
          alt="Logo DAP"
          width={250}
          height={150}
          className="rounded-md"
        />
      </div>


      <nav className="flex flex-col gap-1">
        {menu.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors",
                active
                  ? "bg-gray-200 text-black font-medium"
                  : "text-gray-700 hover:bg-gray-100 hover:text-black"
              )}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
