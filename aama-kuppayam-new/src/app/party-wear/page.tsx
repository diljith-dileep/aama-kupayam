"use client";

import Link from "next/link";

export default function PartyWear() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full px-margin-mobile lg:px-margin pt-space-xl pb-space-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">Party Wear</span>
            <h1 className="font-headline-lg text-headline-lg text-primary font-normal mt-1">Evening Gowns & Gala Silhouettes</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="relative aspect-[3/4] bg-surface-container overflow-hidden">
                <img alt={`Party Wear ${i}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvALMYu_UH-Yj7Qn_jvkXfOaHNFt_luBQblrGGTLv1Y_UY9dPoc_sasOi8UPfEV_bgppV7qvFqtdMJFFBckAGE3RhtH0XCHHutNIxtfjNH_u_FtZ0uKmx-RC6hNx1pZL9fCKsy_qEPVE2M4t2_oliAAVVDb977VGXua5RphDThWULikbXubhCRbAqSL86gdYgQxbaPsZzHAcVr2BvhAsEoU3rLeTpiK-HtmD_sSRvE" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Georgette & Beads</span>
                <h4 className="font-title-md text-title-md text-primary font-medium mt-1 truncate">Gown {i}</h4>
                <div className="flex items-baseline gap-2 mt-1 mb-3">
                  <span className="font-headline-sm text-headline-sm text-primary font-semibold">₹{5000 + i * 500}</span>
                </div>
                <button className="w-full py-2 bg-primary text-on-primary rounded font-label-sm text-label-sm uppercase tracking-wider hover:bg-primary-container transition-colors mt-auto">
                  Add to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}