"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { products } from "@/data/products";

const categories = [
  { name: "Anarkalis & Gowns", count: 24, checked: true },
  { name: "Kurti Sets & Peplums", count: 18, checked: false },
  { name: "Kasavu Handlooms", count: 6, checked: false },
];

const fabrics = [
  { name: "Kasavu Cotton", count: 14, checked: true },
  { name: "Chanderi Silk", count: 16, checked: false },
  { name: "Pure Georgette", count: 10, checked: false },
  { name: "Handloom Linen", count: 5, checked: false },
  { name: "Tissue Organza", count: 3, checked: false },
];

const techniques = [
  "Hand Block-Print",
  "Zari Border",
  "Sequin Embroidery",
  "Pleated Flare",
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const colorSwatches = [
  { name: "Deep Forest Green", bg: "bg-primary-container", active: true },
  { name: "Ivory Cream", bg: "bg-surface-container-high", active: false },
  { name: "Sage Green", bg: "bg-secondary", active: false },
  { name: "Emerald", bg: "bg-[#0a5c36]", active: false },
  { name: "Muted Gold", bg: "bg-on-tertiary-container", active: false },
];

export default function ShopAll() {
  const [priceRange, setPriceRange] = useState(15000);
  const [selectedSizes, setSelectedSizes] = useState<string[]>(["S"]);
  const [activeTab, setActiveTab] = useState("All Best Sellers");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["Anarkalis & Gowns"]);
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>(["Kasavu Cotton"]);

  const handleSizeClick = (size: string) => {
    setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]));
  };

  useEffect(() => {
    const wishlistBtns = document.querySelectorAll(".wishlist-btn");
    wishlistBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const icon = btn.querySelector(".material-symbols-outlined");
        if (icon && icon.textContent === "favorite_border") {
          icon.textContent = "favorite";
          icon.setAttribute("style", "'FILL' 1");
          btn.classList.add("text-error");
        } else if (icon) {
          icon.textContent = "favorite_border";
          icon.setAttribute("style", "'FILL' 0");
          btn.classList.remove("text-error");
        }
      });
    });

    const sizePills = document.querySelectorAll(".size-pill");
    sizePills.forEach((pill) => {
      pill.addEventListener("click", () => {
        sizePills.forEach((p) => {
          p.classList.remove("bg-primary", "text-on-primary");
          p.classList.add("bg-surface-container-low", "text-on-surface");
        });
        pill.classList.add("bg-primary", "text-on-primary");
        pill.classList.remove("bg-surface-container-low", "text-on-surface");
      });
    });

    const addBtns = document.querySelectorAll<HTMLButtonElement>(".add-to-cart-btn");
    addBtns.forEach((btn) => {
      btn.addEventListener("click", function (this: HTMLButtonElement) {
        const originalText = this.innerHTML;
        this.innerHTML = '<span class="material-symbols-outlined text-[16px]">check</span><span>Added!</span>';
        this.classList.replace("bg-primary", "bg-secondary");
        setTimeout(() => {
          this.innerHTML = originalText;
          this.classList.replace("bg-secondary", "bg-primary");
        }, 1800);
      });
    });
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Page Header & Editorial Breadcrumb */}
      <section className="w-full px-margin-mobile lg:px-margin pt-space-lg pb-space-md">
        <div className="flex flex-col gap-3">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-wider text-outline">
            <Link className="hover:text-primary transition-colors" href="/">Home</Link>
            <span className="material-symbols-outlined text-[13px] text-outline-variant">chevron_right</span>
            <span className="text-primary font-semibold">Shop All Collections</span>
          </nav>
          {/* Editorial Title Block */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-2">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container block mb-1">Artisanal Archive · 2025</span>
              <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Handcrafted Women's Wear</h1>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1">
                Explore 48 exquisite designs curated for weddings, festive galas, and graceful everyday wear. Each silhouette is individually tailored with legacy textiles and meticulous hand-embellishments.
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-3 self-end text-outline">
              <span className="font-label-md text-label-md uppercase tracking-wider">Total Styles</span>
              <span className="px-3 py-1 bg-surface-container rounded-full font-label-md text-label-md text-primary font-bold">48 Pieces</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Pills Toolbar & Live Search Bar */}
      <section className="w-full px-margin-mobile lg:px-margin mb-space-md">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="flex-1 relative">
            <input type="text" placeholder="Search designs, fabrics, occasions..." className="w-full bg-surface-container-low px-4 py-3 pl-10 rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-lowest shadow-inner transition-colors" />
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["New Arrivals", "Best Sellers", "Price: Low to High", "Price: High to Low"].map((sort, i) => (
              <button key={i} className={`px-4 py-2 rounded-lg font-label-md text-label-md uppercase tracking-wider transition-colors ${i === 0 ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"}`}>
                {sort}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Catalog Space: 12-Column Layout */}
      <section className="w-full px-margin-mobile lg:px-margin mb-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left Sidebar: Filter Suite (Sticky on Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-space-md sticky top-32" id="filterSidebar">
            <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">tune</span>
                  <h2 className="font-headline-sm text-headline-sm text-primary font-medium">Refine Selection</h2>
                </div>
                <button className="font-label-sm text-label-sm uppercase tracking-wider text-outline hover:text-primary" id="resetFiltersBtn">Reset</button>
              </div>

              {/* Filter Accordion 1: Categories */}
              <div className="space-y-3">
                <h3 className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold flex items-center justify-between">
                  <span>Category</span>
                  <span className="material-symbols-outlined text-[16px] text-outline">expand_less</span>
                </h3>
                <div className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                  {categories.map((cat, i) => (
                    <label key={i} className="flex items-center justify-between cursor-pointer group">
                      <span className="flex items-center gap-2.5">
                        <input checked={selectedCategories.includes(cat.name)} onChange={(e) => {
                          if (e.target.checked) setSelectedCategories((prev) => [...prev, cat.name]);
                          else setSelectedCategories((prev) => prev.filter((n) => n !== cat.name));
                        }} className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox" />
                        <span className="group-hover:text-primary">{cat.name}</span>
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">{cat.count}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="h-px bg-surface-container"></div>

              {/* Filter Accordion 2: Price Range */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold">Price Range</h3>
                  <span className="font-label-sm text-label-sm text-primary font-semibold" id="priceDisplay">Up to ₹15,000</span>
                </div>
                <input className="w-full accent-primary h-1.5 bg-surface-container rounded-lg cursor-pointer" id="priceRangeSlider" max="15000" min="1500" step="500" type="range" value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} />
                <div className="flex justify-between font-label-sm text-label-sm text-outline">
                  <span>₹1,500</span>
                  <span>₹15,000+</span>
                </div>
              </div>
              <div className="h-px bg-surface-container"></div>

              {/* Filter Accordion 3: Sizes */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold">Select Size</h3>
                  <a className="font-label-sm text-label-sm text-on-tertiary-container hover:underline" href="/size-guide">Size Chart</a>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <button key={size} className={`size-pill py-2 rounded-lg font-label-md text-label-md uppercase transition-colors ${selectedSizes.includes(size) ? "bg-primary text-on-primary" : "bg-surface-container-low text-on-surface hover:bg-secondary-fixed hover:text-on-secondary-fixed"}`} onClick={() => handleSizeClick(size)}>
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-px bg-surface-container"></div>

              {/* Filter Accordion 4: Fabrics */}
              <div className="space-y-3">
                <h3 className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold">Artisanal Fabric</h3>
                <div className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                  {fabrics.map((fabric, i) => (
                    <label key={i} className="flex items-center justify-between cursor-pointer group">
                      <span className="flex items-center gap-2.5">
                        <input checked={selectedFabrics.includes(fabric.name)} onChange={(e) => {
                          if (e.target.checked) setSelectedFabrics((prev) => [...prev, fabric.name]);
                          else setSelectedFabrics((prev) => prev.filter((n) => n !== fabric.name));
                        }} className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox" />
                        <span className="group-hover:text-primary">{fabric.name}</span>
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">{fabric.count}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="h-px bg-surface-container"></div>

              {/* Filter Accordion 5: Palette Swatches */}
              <div className="space-y-3">
                <h3 className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold">Color Palette</h3>
                <div className="flex items-center gap-3">
                  {colorSwatches.map((color, i) => (
                    <button key={i} className={`w-7 h-7 rounded-full ring-1 ring-outline-variant hover:scale-110 transition-transform ${color.active ? "bg-primary-container ring-2 ring-offset-2 ring-primary" : color.bg}`} title={color.name}>
                      {color.active && <span className="material-symbols-outlined text-[14px] text-on-primary">check</span>}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-px bg-surface-container"></div>

              {/* Filter Accordion 6: Artisanal Details */}
              <div className="space-y-3">
                <h3 className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold">Artisan Technique</h3>
                <div className="flex flex-wrap gap-1.5">
                  {techniques.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded bg-surface-container font-label-sm text-label-sm text-primary cursor-pointer hover:bg-primary hover:text-on-primary transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Artisan Guarantee Snippet in Sidebar */}
            <div className="bg-secondary-container/40 p-4 rounded-xl flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">auto_awesome</span>
              <div>
                <h4 className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">100% Handloom Certified</h4>
                <p className="font-body-sm text-body-sm text-on-secondary-container mt-0.5 leading-snug">
                  Every fold and weave honors traditional Kerala artisanal cooperatives.
                </p>
              </div>
            </div>
          </aside>

          {/* Right Product Grid: 9 Columns on Desktop */}
          <main className="lg:col-span-9 space-y-space-md">
            {/* Results Counter & Micro Announcement */}
            <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm px-1">
              <p>Displaying <span className="font-semibold text-primary">1 – 6</span> of 48 heirloom silhouettes</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Express Dispatch Active</span>
              </div>
            </div>

            {/* 3-Column Luxury Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
              {products.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`} className="block">
                  <article className="product-card group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-surface-container">
                    <img alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src={product.image} />
                    {/* Tag Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                      <span className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm tracking-widest uppercase font-bold shadow-sm">
                        {product.badge}
                      </span>
                    </div>
                    {/* Wishlist Heart Button */}
                    <button aria-label={`Add ${product.name} to Wishlist`} className="wishlist-btn absolute top-3 right-3 w-9 h-9 rounded-full bg-surface/90 backdrop-blur-md flex items-center justify-center text-on-surface hover:text-error transition-all shadow-sm z-10">
                      <span className="material-symbols-outlined text-[19px]">favorite_border</span>
                    </button>
                    {/* Quick Hover Drawer Overlay (Sizes + Quick Cart) */}
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col gap-2 z-10">
                      <div className="flex items-center justify-between text-on-primary">
                        <span className="font-label-sm text-label-sm uppercase tracking-widest">Available Sizes:</span>
                        <div className="flex gap-1 font-label-sm text-label-sm font-semibold">
                          {product.sizes.map((size) => (
                            <span key={size} className="px-1.5 py-0.5 rounded bg-surface/20">{size}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Content Block */}
                  <div className="p-5 flex flex-col flex-grow justify-between gap-4">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">{product.fabric}</span>
                        <div className="flex items-center gap-1 text-on-tertiary-container">
                          <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                          <span className="font-label-sm text-label-sm font-bold text-primary">{product.rating}</span>
                          <span className="font-label-sm text-label-sm text-outline">({product.reviews})</span>
                        </div>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-medium group-hover:text-on-tertiary-container transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-1">
                        {product.description}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="font-title-md text-title-md text-primary font-bold">{product.price}</span>
                        <span className="font-body-sm text-body-sm text-outline line-through">{product.originalPrice}</span>
                        <span className="font-label-sm text-label-sm text-secondary font-bold">{product.discount}</span>
                      </div>
                      {/* CTA Action Dual Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button className="add-to-cart-btn w-full py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-colors flex items-center justify-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px]">shopping_bag</span>
                          <span>Add to Bag</span>
                        </button>
                        <button className="w-full py-2.5 rounded-lg bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-fixed-dim transition-colors flex items-center justify-center gap-1 font-semibold" onClick={() => window.open(`https://wa.me/917907408732?text=Hello%20Aama%20Kuppayam!%20I%20am%20interested%20in%20ordering%20the%20${encodeURIComponent(product.name)}.`, "_blank")} title="Quick WhatsApp Order">
                          <span className="material-symbols-outlined text-[16px]">chat</span>
                          <span>WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                </Link>
              ))}
            </div>

            {/* Editorial Quote Banner Embedded in Catalog Flow */}
            <div className="my-space-md p-8 lg:p-10 rounded-xl bg-gradient-to-r from-primary via-primary-container to-primary text-on-primary text-center relative overflow-hidden shadow-md">
              <div className="relative z-10 max-w-xl mx-auto space-y-3">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container block">Artisan Tribute</span>
                <p className="font-headline-md text-headline-md italic font-light leading-snug">
                  "In every warp and weft lies the memory of hands that know how to turn raw thread into enduring grace."
                </p>
                <span className="font-label-md text-label-md tracking-wider uppercase text-outline-variant block pt-1">— The Master Weavers of Chendamangalam</span>
              </div>
            </div>

            {/* Luxury Pagination Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-space-md border-t border-surface-container">
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Showing <strong className="text-primary font-semibold">1 – 12</strong> of <strong>48</strong> handcrafted ensembles
              </span>
              <nav aria-label="Catalog Pagination" className="flex items-center gap-2">
                <button aria-label="Previous Page" className="w-10 h-10 rounded-lg bg-surface-container text-outline hover:text-primary flex items-center justify-center transition-colors disabled:opacity-40" disabled>
                  <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                </button>
                <button aria-current="page" className="w-10 h-10 rounded-lg bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center font-bold shadow-sm">
                  1
                </button>
                <button className="w-10 h-10 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container flex items-center justify-center transition-colors">
                  2
                </button>
                <button className="w-10 h-10 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container flex items-center justify-center transition-colors">
                  3
                </button>
                <button className="w-10 h-10 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container flex items-center justify-center transition-colors">
                  4
                </button>
                <button aria-label="Next Page" className="w-10 h-10 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                </button>
              </nav>
            </div>
          </main>
        </div>
      </section>

      {/* Bottom Boutique Concierge & Custom Sizing Guarantee Banner */}
      <section className="w-full bg-surface-container-low py-space-xl px-margin-mobile lg:px-margin">
        <div className="max-w-5xl mx-auto rounded-2xl bg-surface-container-lowest p-8 lg:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[30px]">straighten</span>
            </div>
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">Bespoke Fit Promise</span>
              <h3 className="font-headline-md text-headline-md text-primary font-medium mt-0.5">Custom Tailoring on Every Outfit</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-1.5 leading-relaxed">
                Need adjustments to bust lines, lengths, or custom sleeve styles? Connect directly with our master patternmakers via WhatsApp for guided video measurements.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <a className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-all shadow-md hover:shadow-lg" href="https://wa.me/917907408732?text=Hello%20Aama%20Kuppayam!%20I%20would%20like%20custom%20measurement%20assistance%20for%20my%20order." rel="noopener noreferrer" target="_blank">
              <span className="material-symbols-outlined text-[20px]">support_agent</span>
              <span>Contact Concierge</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}