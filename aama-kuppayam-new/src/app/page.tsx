"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { products } from "@/data/products";

export default function Home() {
  const [activeTab, setActiveTab] = useState("All Best Sellers");

  const productTabs = [
    "All Best Sellers",
    "Kurti Collections",
    "Party Wear",
    "Traditional Weaves",
  ];

  const collections = [
    {
      title: "The Royal Emerald Anarkalis",
      subtitle: "Bridal & Sangeet",
      description: "Floor-length flare kurtas enriched with hand-embroidered kashmiri tilla and zari motifs.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxMvT6g9uk0YnYZoynZbq1aHetnPeY6uWSwe0pxJE9Pwig5-jwUD4EnSSeWBjIobyiNrFUhac1efDqL05VQlX1eYcl1qtGsOFX8K7GpXFZe2A1FRKsZGqnEbC8sL-dHtNFOik7ZDXs_KzSwqJJJzCMba2EE1w3gY44BPeuNYQ7Lc7k3k33wmw2Kqk2Oua5K61YgCmnsXLl_ATLR2ZR0w2MoP4tiGGeSgCy-xF_VV_H",
      count: "24 Ensembles",
      link: "/party-wear",
    },
    {
      title: "Kasavu & Heritage Fusion",
      subtitle: "Temple & Traditional",
      description: "Lustrous unbleached kora cottons styled into contemporary anarkali and set-mundu silhouettes.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADMHjKZ66S5rdAoi-218YJ73hSj4KJEcj7VerlASZKv3ijmwt87gMSDttOH9h7vg22zkC_QBCXcQhqfUChp5k-OXZ3BSYolD9Q-tmcgTZHxKNy2m5DbRvf6YAJf18p5sad8JvwYz1FwVkeTE5A1G0J5qW3KuStNLRZgRt-B31XWQWwJ-U2gOuHmWIxKUm6F2iC8mMm7m2LBKX6Bop6Hebckd9eI_MIhxIzXZniFDSG",
      count: "18 Designs",
      link: "/traditional-wear",
    },
    {
      title: "Midnight Bottle Green Gowns",
      subtitle: "Soirée & Reception",
      description: "Flowing georgette and organza draped gowns accented with subtle tonal sequin bodices.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvALMYu_UH-Yj7Qn_jvkXfOaHNFt_luBQblrGGTLv1Y_UY9dPoc_sasOi8UPfEV_bgppV7qvFqtdMJFFBckAGE3RhtH0XCHHutNIxtfjNH_u_FtZ0uKmx-RC6hNx1pZL9fCKsy_qEPVE2M4t2_oliAAVVDb977VGXua5RphDThWULikbXubhCRbAqSL86gdYgQxbaPsZzHAcVr2BvhAsEoU3rLeTpiK-HtmD_sSRvE",
      count: "15 Silhouettes",
      link: "/party-wear",
    },
  ];

  const pillars = [
    {
      icon: "spa",
      title: "Ethical Handloom Legacy",
      description: "Direct weaver partnerships across Balaramapuram, Chendamangalam, and Chanderi clusters ensuring fair lineage compensation.",
    },
    {
      icon: "content_cut",
      title: "Bespoke Precision Fit",
      description: "Every garment can be tailored to individual bust, waist, and height specifications by our in-house bespoke master cutters.",
    },
    {
      icon: "diamond",
      title: "Heirloom Grade Zari",
      description: "Dipped electroplated metallic thread and pure spun tussar trims that retain their lustrous golden sheen across generations.",
    },
  ];

  const reviews = [
    {
      stars: 5,
      text: "The custom fitting for my Onam anarkali was impeccable. The kasavu zari had such a soft, understated glow unlike stiff store-bought pieces. Truly feels like an heirloom.",
      author: "Ananya Krishna",
      location: "Kochi, Kerala • Verified Purchase",
      initials: "AK",
    },
    {
      stars: 5,
      text: "Ordered my sister's sangeet gown via their WhatsApp concierge. The stylist helped with live video drape previews and delivered to Bangalore in 4 days. Extraordinary service!",
      author: "Pooja Sundaram",
      location: "Bengaluru • Verified Purchase",
      initials: "PS",
    },
    {
      stars: 5,
      text: "The bottle green hue of the Royal Anarkali is mesmerizing. The craftsmanship on the neckline and the pure silk lining makes it so effortless to wear all night.",
      author: "Meera Radhakrishnan",
      location: "Dubai, UAE • Verified Purchase",
      initials: "MR",
    },
  ];

  const instagramImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAsibdJOEljg8lK9i49_A-FFyr3IiyTJmP0KROoXYUSNDSZy70-zJwvHRNgR5lezKj-5kOliZHK10B_K9irAq0PDjsLCDOKKeSejpz6gL0SJNjj8ARffXWttALgAPMlRADLQ8F3Xjuka58ntTUJsQuNXBs2nVYIxWCvIWE6dfji8b8BOL2Dayh-H3YWIPs9UyF10tOTYZF7zF1p-vMnms3-eAy1Syz_IGEZ1akOa5DY",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuADMHjKZ66S5rdAoi-218YJ73hSj4KJEcj7VerlASZKv3ijmwt87gMSDttOH9h7vg22zkC_QBCXcQhqfUChp5k-OXZ3BSYolD9Q-tmcgTZHxKNy2m5DbRvf6YAJf18p5sad8JvwYz1FwVkeTE5A1G0J5qW3KuStNLRZgRt-B31XWQWwJ-U2gOuHmWIxKUm6F2iC8mMm7m2LBKX6Bop6Hebckd9eI_MIhxIzXZniFDSG",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAxMvT6g9uk0YnYZoynZbq1aHetnPeY6uWSwe0pxJE9Pwig5-jwUD4EnSSeWBjIobyiNrFUhac1efDqL05VQlX1eYcl1qtGsOFX8K7GpXFZe2A1FRKsZGqnEbC8sL-dHtNFOik7ZDXs_KzSwqJJJzCMba2EE1w3gY44BPeuNYQ7Lc7k3k33wmw2Kqk2Oua5K61YgCmnsXLl_ATLR2ZR0w2MoP4tiGGeSgCy-xF_VV_H",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDvALMYu_UH-Yj7Qn_jvkXfOaHNFt_luBQblrGGTLv1Y_UY9dPoc_sasOi8UPfEV_bgppV7qvFqtdMJFFBckAGE3RhtH0XCHHutNIxtfjNH_u_FtZ0uKmx-RC6hNx1pZL9fCKsy_qEPVE2M4t2_oliAAVVDb977VGXua5RphDThWULikbXubhCRbAqSL86gdYgQxbaPsZzHAcVr2BvhAsEoU3rLeTpiK-HtmD_sSRvE",
  ];

  useEffect(() => {
    const tabContainer = document.getElementById("productTabs");
    if (tabContainer) {
      const buttons = tabContainer.querySelectorAll("button");
      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          buttons.forEach((b) => {
            b.classList.remove("bg-primary", "text-on-primary");
            b.classList.add("bg-surface-container", "text-on-surface-variant");
          });
          btn.classList.add("bg-primary", "text-on-primary");
          btn.classList.remove("bg-surface-container", "text-on-surface-variant");
        });
      });
    }
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full -mt-28 pt-28 pb-space-xl overflow-hidden bg-surface-container-low">
        <div className="w-full px-margin-mobile lg:px-margin pt-space-md lg:pt-space-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center min-h-[78vh]">
            {/* Left Editorial Copy Block */}
            <div className="lg:col-span-6 flex flex-col justify-center py-space-md z-10">
              <div className="inline-flex items-center gap-2 mb-space-sm">
                <span className="w-6 h-px bg-on-tertiary-container"></span>
                <span className="font-label-md text-label-md uppercase tracking-widest text-on-tertiary-container font-semibold">Festive Pret & Couture</span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-secondary font-normal italic mb-1">
                Elegance Woven with Love
              </h2>
              <h1 className="font-headline-xl text-headline-xl text-primary font-normal tracking-tight mb-space-md">
                The Festive & Heritage Edit '25
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-lg leading-relaxed">
                Bespoke handcrafted women's attire celebrating South Asian artisanal traditions, woven in pure organic silks, gentle kasavu handlooms, and regal emerald tones.
              </p>
              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-space-lg">
                <Link className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-widest shadow-md hover:bg-primary transition-all duration-300" href="/shop-all">
                  <span>Explore The Collection</span>
                  <span className="material-symbols-outlined ml-2 text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <a className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md uppercase tracking-widest shadow-sm hover:bg-surface-container transition-all" href="https://wa.me/917907408732?text=Hello%20Aama%20Kuppayam!%20I%20would%20like%20to%20explore%20your%20latest%20collection." rel="noopener noreferrer" target="_blank">
                  <span className="material-symbols-outlined mr-2 text-on-tertiary-container text-[20px]">chat</span>
                  <span>Curate on WhatsApp</span>
                </a>
              </div>
              {/* Micro Metric Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-space-sm max-w-lg">
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-primary font-semibold">1,200+</span>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Silks Handcrafted</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-primary font-semibold">100%</span>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Custom Tailored</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-primary font-semibold">4.9/5</span>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Patron Satisfaction</span>
                </div>
              </div>
            </div>
            {/* Right Hero Visual Collage */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] rounded-xl overflow-hidden shadow-xl bg-surface-container">
                <img alt="Aama Kuppayam Heritage Festive Edit" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsibdJOEljg8lK9i49_A-FFyr3IiyTJmP0KROoXYUSNDSZy70-zJwvHRNgR5lezKj-5kOliZHK10B_K9irAq0PDjsLCDOKKeSejpz6gL0SJNjj8ARffXWttALgAPMlRADLQ8F3Xjuka58ntTUJsQuNXBs2nVYIxWCvIWE6dfji8b8BOL2Dayh-H3YWIPs9UyF10tOTYZF7zF1p-vMnms3-eAy1Syz_IGEZ1akOa5DY" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                {/* Floating Artisan Tag */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-surface/95 backdrop-blur-md shadow-md flex items-center justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container block font-bold">Featured Ensemble</span>
                    <span className="font-title-md text-title-md text-primary block">Chandrika Zari Ivory & Emerald Lehenga</span>
                  </div>
                  <span className="font-label-md text-label-md text-primary font-semibold bg-secondary-container px-3 py-1.5 rounded">₹18,499</span>
                </div>
              </div>
              {/* Decorative Subtle Badge */}
              <div className="absolute -top-4 -right-4 hidden xl:flex flex-col items-center justify-center w-24 h-24 rounded-full bg-primary text-on-tertiary-container shadow-lg">
                <span className="material-symbols-outlined text-[24px]">verified</span>
                <span className="font-label-sm text-[9px] uppercase tracking-widest text-center mt-1">Kerala Heritage</span>
              </div>
            </div>
          </div>
        </div>
        {/* Trust Highlights Ticker */}
        <div className="w-full mt-space-lg bg-primary-container text-surface-container-highest py-3 px-margin-mobile lg:px-margin overflow-hidden">
          <div className="flex items-center justify-between gap-8 flex-wrap font-label-md text-label-md tracking-wider uppercase text-center">
            <div className="flex items-center gap-2 mx-auto">
              <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">verified</span>
              <span>100% Handcrafted Artisanal Weaves</span>
            </div>
            <div className="hidden md:flex items-center gap-2 mx-auto">
              <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">straighten</span>
              <span>Custom Tailored Fits & Alterations</span>
            </div>
            <div className="hidden lg:flex items-center gap-2 mx-auto">
              <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">flight_takeoff</span>
              <span>Express Pan-India & Global Shipping</span>
            </div>
            <div className="flex items-center gap-2 mx-auto">
              <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">chat</span>
              <span>WhatsApp Master Stylist Assistance</span>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STORY & PILLARS */}
      <section className="w-full py-space-xl bg-surface">
        <div className="w-full px-margin-mobile lg:px-margin">
          <div className="max-w-4xl mx-auto text-center mb-space-lg">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">The Philosophy</span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-normal mt-2 mb-space-md">
              "Born from a devotion to timeless grace, Aama Kuppayam weaves cherished memories and heritage craftsmanship into silhouettes for modern royalty."
            </h2>
            <div className="w-16 h-0.5 bg-on-tertiary-container mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {pillars.map((pillar, index) => (
              <div key={index} className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[26px]">{pillar.icon}</span>
                </div>
                <h3 className="font-title-md text-title-md text-primary mb-2">{pillar.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURATED COLLECTIONS */}
      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="w-full px-margin-mobile lg:px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">Couture Editions</span>
              <h2 className="font-headline-lg text-headline-lg text-primary font-normal mt-1">Featured Curated Collections</h2>
            </div>
            <Link className="mt-4 md:mt-0 inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-wider text-primary hover:text-secondary transition-colors font-semibold" href="/shop-all">
              <span>View All Ensembles</span>
              <span className="material-symbols-outlined text-[18px]">east</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {collections.map((collection, index) => (
              <div key={index} className="group relative rounded-xl overflow-hidden bg-surface-container-lowest shadow-md flex flex-col">
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-surface-container">
                  <img alt={collection.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" src={collection.image} />
                  <span className="absolute top-4 left-4 bg-primary/90 text-on-primary font-label-sm text-label-sm uppercase tracking-wider px-3 py-1 rounded">{collection.count}</span>
                </div>
                <div className="p-space-md flex flex-col flex-grow justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">{collection.subtitle}</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-medium mt-1 mb-2">{collection.title}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{collection.description}</p>
                  </div>
                  <Link className="mt-4 inline-flex items-center text-primary font-label-md text-label-md uppercase tracking-wider group-hover:text-on-tertiary-container transition-colors font-semibold" href={collection.link}>
                    <span>Explore Line</span>
                    <span className="material-symbols-outlined ml-1 text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TABBED PRODUCT SHOWCASE */}
      <section className="w-full py-space-xl bg-surface">
        <div className="w-full px-margin-mobile lg:px-margin">
          <div className="text-center max-w-2xl mx-auto mb-space-md">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">Handpicked Curation</span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-normal mt-1">Best-Sellers & Ready-to-Ship</h2>
          </div>
          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-space-lg" id="productTabs">
            {productTabs.map((tab, index) => (
              <button
                key={index}
                className={`px-5 py-2 rounded-full font-label-md text-label-md uppercase tracking-wider transition-all duration-200 ${index === 0 ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {products.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className="block">
                <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="relative aspect-[3/4] bg-surface-container overflow-hidden">
                  <img alt={product.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" src={product.image} />
                  <span className="absolute top-3 left-3 bg-primary text-on-primary font-label-sm text-label-sm uppercase px-2 py-0.5 rounded">{product.badge}</span>
                  <button aria-label="Add to Wishlist" className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-sm text-primary flex items-center justify-center hover:bg-surface transition-colors">
                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                  </button>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">{product.fabric}</span>
                  <h4 className="font-title-md text-title-md text-primary font-medium mt-1 truncate">{product.name}</h4>
                  <div className="flex items-baseline gap-2 mt-1 mb-3">
                    <span className="font-headline-sm text-headline-sm text-primary font-semibold">{product.price}</span>
                    <span className="font-body-sm text-body-sm text-outline line-through">{product.originalPrice}</span>
                    <span className="font-label-sm text-label-sm text-on-tertiary-container font-bold">{product.discount}</span>
                  </div>
                  {/* Sizes */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <span className="font-label-sm text-label-sm text-outline mr-1">Size:</span>
                    {product.sizes.map((size) => (
                      <span key={size} className={`w-6 h-6 rounded text-[11px] font-label-sm flex items-center justify-center ${size === product.selectedSize ? "bg-primary text-on-primary font-bold" : "bg-surface-container text-on-surface"}`}>
                        {size}
                      </span>
                    ))}
                  </div>
                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2 mt-auto">
                    <button className="w-full py-2 bg-primary text-on-primary rounded font-label-sm text-label-sm uppercase tracking-wider hover:bg-primary-container transition-colors">
                      Add to Bag
                    </button>
                    <button className="w-full py-2 bg-surface-container text-primary rounded font-label-sm text-label-sm uppercase tracking-wider hover:bg-surface-container-high transition-colors flex items-center justify-center gap-1" onClick={() => window.open(`https://wa.me/917907408732?text=Hello%20Aama%20Kuppayam!%20I%20want%20to%20order%20the%20${encodeURIComponent(product.name)}%20(${product.price})`, "_blank")}>
                      <span className="material-symbols-outlined text-[15px] text-on-tertiary-container">chat</span>
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ARTISANAL CRAFTSMANSHIP & FABRIC SPOTLIGHT */}
      <section className="w-full py-space-xl bg-surface-container">
        <div className="w-full px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-5">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">Textile Integrity</span>
              <h2 className="font-headline-lg text-headline-lg text-primary font-normal mt-1 mb-space-sm">
                Woven with Conscience, Tailored with Precision
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                Every thread woven at Aama Kuppayam honors century-old handloom techniques. From the unbleached organic cotton yarns of God's Own Country to artisanal zari borders dipped in gentle luster, our fabrics breathe elegance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-lowest shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">texture</span>
                  </div>
                  <div>
                    <h4 className="font-title-md text-title-md text-primary font-semibold">Kerala Kasavu Handloom</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Naturally breathable 100% fine count kora cotton interlaced with authentic golden zari selvages.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-lowest shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">dry_cleaning</span>
                  </div>
                  <div>
                    <h4 className="font-title-md text-title-md text-primary font-semibold">Chanderi & Tussar Silks</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Featherlight silk weaves that offer rich royal fall with subtle opalescence suited for celebration.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-lowest shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">eco</span>
                  </div>
                  <div>
                    <h4 className="font-title-md text-title-md text-primary font-semibold">Zero-Harm Botanical Dyes</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Deep forest emeralds and warm ochres derived from gentle earth-safe organic pigment infusions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-md">
                <img className="w-full h-full object-cover" alt="Kerala Kasavu fabric close-up" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS18r2kycYe3C_nzI1pQYl0y8_6AAv9jWyeB1WcjyXCIEDfI3mSlY5dvqOH82wNYI62S1w7XqSW_y4DpS03xIspyExJiPIP7xk70v2gpbJsIyjmzqq1rWy1Udj218OeMIrJBy0YiYW6oaarZC51GOekMKIoANZy-YVqlxRXdU-3yIw7PjVuKUwuis553P7QP_gtXcbYLsAOZL0jSDQBlOImBgCLI6ThaGmbKtcu6nR" />
              </div>
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-md mt-8">
                <img className="w-full h-full object-cover" alt="Master tailor at work" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ4bRZ09ZwHGsHTmo8pcnVAdsmbqdOn4SMuQa9m-KBqAMi76w2jxu6aLTQ-PLPJ2TSAd5fWRAX1_dXSwrz1zKO9eLBvSmaMyOwpN0s3IssoCsw4C88lQAM4hW46DMzJzHQ64oI51dfmZ2hVw3EcWFqJaKOEonSmxnwvCpNGJ4maI8e8TpQj2iYhpnpsdj4xpDKetKFkWPA7RlP15TtQ6D3LVbOvB7K0iBbdzs8v1hP" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT LOVE & REVIEWS */}
      <section className="w-full py-space-xl bg-surface">
        <div className="w-full px-margin-mobile lg:px-margin">
          <div className="text-center max-w-2xl mx-auto mb-space-lg">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">Words from Our Patrons</span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-normal mt-1">Reflections of Love</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {reviews.map((review, index) => (
              <div key={index} className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center text-on-tertiary-container mb-3">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[18px]">star</span>
                    ))}
                  </div>
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed italic mb-4">
                    {review.text}
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t-0 bg-surface-container/40 p-2.5 rounded-lg">
                  <div className="w-9 h-9 rounded-full bg-primary text-on-primary font-semibold flex items-center justify-center text-xs">
                    {review.initials}
                  </div>
                  <div>
                    <span className="font-title-md text-[14px] text-primary block leading-tight font-bold">{review.author}</span>
                    <span className="font-label-sm text-[11px] text-outline">{review.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM & JOURNAL LOOKBOOK GALLERY */}
      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="w-full px-margin-mobile lg:px-margin">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-space-md">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">Visual Journal</span>
              <h2 className="font-headline-lg text-headline-lg text-primary font-normal mt-1">#diil.jith</h2>
            </div>
            <a className="mt-3 md:mt-0 font-label-md text-label-md uppercase tracking-wider text-primary font-semibold inline-flex items-center gap-1 hover:text-secondary" href="https://instagram.com/diil.jith" rel="noopener noreferrer" target="_blank">
              <span>Follow @diil.jith</span>
              <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramImages.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-xl overflow-hidden group shadow-sm bg-surface-container">
                <img alt={`Patron styling ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={image} />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary text-[28px]">photo_camera</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECT WHATSAPP STYLING BANNER */}
      <section className="w-full py-space-xl bg-primary-container text-on-primary relative overflow-hidden">
        {/* Subtle Golden Gradient Glow */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-on-tertiary-container/10 blur-3xl pointer-events-none"></div>
        <div className="w-full px-margin-mobile lg:px-margin relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 p-space-md lg:p-space-lg rounded-2xl bg-primary/80 backdrop-blur-md shadow-xl">
            <div className="text-left">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-bold flex items-center gap-1.5 mb-2">
                <span className="material-symbols-outlined text-[16px]">stars</span>
                Bespoke Styling Concierge
              </span>
              <h3 className="font-headline-md text-headline-md text-on-primary font-normal mb-2">
                Seeking Custom Sizing or Bridal Troussard?
              </h3>
              <p className="font-body-md text-body-md text-on-primary-container max-w-xl">
                Chat directly with our Master Drape Stylist on WhatsApp for real-time measurements, fabric customizations, and express bridal delivery.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-on-tertiary-container text-primary font-label-md text-label-md uppercase tracking-wider font-bold shadow-lg hover:brightness-110 hover:scale-105 transition-all" href="https://wa.me/917907408732?text=Hello%20Aama%20Kuppayam!%20I%20would%20like%20to%20consult%20your%20Master%20Stylist%20for%20custom%20attire." rel="noopener noreferrer" target="_blank">
                <span className="material-symbols-outlined text-[24px]">chat</span>
                <span>Chat with Master Stylist</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}