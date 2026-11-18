"use client";

import Link from "next/link";
import { type Product } from "@/data/products";

export default function ProductRelated({ related }: { related: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
      {related.map((item) => (
        <div
          key={item.id}
          className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
        >
          <div className="relative aspect-[3/4] bg-surface-container overflow-hidden">
            <img alt={item.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" src={item.image} />
            <span className="absolute top-3 left-3 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider px-2 py-0.5 rounded">{item.badge}</span>
            <button aria-label="Add to Wishlist" className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-sm text-primary flex items-center justify-center hover:bg-surface transition-colors">
              <span className="material-symbols-outlined text-[18px]">favorite</span>
            </button>
          </div>
          <Link href={`/product/${item.id}`} className="p-4 flex flex-col flex-grow">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">{item.fabric}</span>
            <h4 className="font-title-md text-title-md text-primary font-medium mt-1 truncate">{item.name}</h4>
            <div className="flex items-baseline gap-2 mt-1 mb-3">
              <span className="font-headline-sm text-headline-sm text-primary font-semibold">{item.price}</span>
              <span className="font-body-sm text-body-sm text-outline line-through">{item.originalPrice}</span>
              <span className="font-label-sm text-label-sm text-on-tertiary-container font-bold">{item.discount}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-auto">
              <button className="w-full py-2 bg-primary text-on-primary rounded font-label-sm text-label-sm uppercase tracking-wider hover:bg-primary-container transition-colors">
                Add to Bag
              </button>
              <button className="w-full py-2 bg-surface-container text-primary rounded font-label-sm text-label-sm uppercase tracking-wider hover:bg-surface-container-high transition-colors flex items-center justify-center gap-1" onClick={() => window.open(`https://wa.me/917907408732?text=Hello%20Aama%20Kuppayam!%20I%20want%20to%20order%20the%20${encodeURIComponent(item.name)}%20(${encodeURIComponent(item.price)})`, "_blank")}>
                <span className="material-symbols-outlined text-[15px] text-on-tertiary-container">chat</span>
                <span>WhatsApp</span>
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
