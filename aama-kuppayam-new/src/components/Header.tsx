"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/shop-all", label: "Shop All" },
  { path: "/kurti-collections", label: "Kurti Collections" },
  { path: "/traditional-wear", label: "Traditional Wear" },
  { path: "/party-wear", label: "Party Wear" },
  { path: "/about-us", label: "About Us" },
  { path: "/contact-us", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-primary-container text-on-tertiary-container py-2 px-margin-mobile lg:px-margin text-center font-label-sm text-label-sm tracking-widest uppercase flex items-center justify-center gap-2">
        <span className="material-symbols-outlined text-[14px]">local_shipping</span>
        <span>Complimentary Pan-India Shipping on Orders Above ₹2,999 | WhatsApp Concierge: +91 7907408732</span>
      </div>
      <div className="h-20 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(27,56,43,0.06)]">
        <div className="w-full h-full px-margin-mobile lg:px-margin flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img alt="Aama Kuppayam Brand Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ALJJyrCRthZxFe7HkKXBPOvOy75HMmY8dXACm-rbCvgwuV564t06uoNdoVNGhXQkhHawAH5z20sYnyQQATsTu9YFqKYGVRpuB06wsmfdJewZBM5C0rgNORZ8OfpdwTI2dR06dCKokHK877uDi5pMQh4hUO5YQU8E0N748GUQxi-KCHDY9Uo6JlSSvuf7n6lf9lPn75Rp5nLbikJ9YGDJ4-d4lU8LsKUMCrSXSSE76q1-soQ" />
            <span className="font-headline-sm text-headline-sm text-primary font-medium tracking-tight">Aama Kuppayam</span>
          </div>
          <nav className="hidden xl:flex items-center gap-8" data-active-classes="text-primary font-semibold border-b border-on-tertiary-container">
            {navItems.map((item) => {
              const isActive = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`font-label-md text-label-md uppercase tracking-wider transition-colors pb-1 ${isActive
                    ? "text-primary font-semibold border-b border-on-tertiary-container"
                    : "text-on-surface-variant hover:text-primary"
                  }`}
                  data-path={item.label.toLowerCase().replace(/\s+/g, "-")}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <button aria-label="Search boutique" className="p-2 text-on-surface-variant hover:text-primary transition-colors flex items-center">
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>
            <Link className="relative p-2 text-on-surface-variant hover:text-primary transition-colors flex items-center" href="#" data-path="wishlist">
              <span className="material-symbols-outlined text-[22px]">favorite</span>
              <span className="absolute top-1 right-0 w-4 h-4 rounded-full bg-primary text-on-primary font-label-sm text-[10px] flex items-center justify-center font-bold">3</span>
            </Link>
            <Link className="relative p-2 text-on-surface-variant hover:text-primary transition-colors flex items-center" href="#" data-path="cart">
              <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
              <span className="absolute top-1 right-0 w-4 h-4 rounded-full bg-on-tertiary-container text-tertiary font-label-sm text-[10px] flex items-center justify-center font-bold">2</span>
            </Link>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}