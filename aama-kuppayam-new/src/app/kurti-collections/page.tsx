"use client";

import Link from "next/link";

export default function KurtiCollections() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full px-margin-mobile lg:px-margin pt-space-xl pb-space-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">Kurti Collections</span>
            <h1 className="font-headline-lg text-headline-lg text-primary font-normal mt-1">Elegant Kurtis & Peplums</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="relative aspect-[3/4] bg-surface-container overflow-hidden">
                <img alt={`Kurti ${i}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADMHjKZ66S5rdAoi-218YJ73hSj4KJEcj7VerlASZKv3ijmwt87gMSDttOH9h7vg22zkC_QBCXcQhqfUChp5k-OXZ3BSYolD9Q-tmcgTZHxKNy2m5DbRvf6YAJf18p5sad8JvwYz1FwVkeTE5A1G0J5qW3KuStNLRZgRt-B31XWQWwJ-U2gOuHmWIxKUm6F2iC8mMm7m2LBKX6Bop6Hebckd9eI_MIhxIzXZniFDSG" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Chanderi Silk</span>
                <h4 className="font-title-md text-title-md text-primary font-medium mt-1 truncate">Kurti {i}</h4>
                <div className="flex items-baseline gap-2 mt-1 mb-3">
                  <span className="font-headline-sm text-headline-sm text-primary font-semibold">₹{3000 + i * 200}</span>
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