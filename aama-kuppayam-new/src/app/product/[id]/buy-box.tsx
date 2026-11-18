"use client";

import Link from "next/link";
import { useState } from "react";
import { type Product } from "@/data/products";

export default function ProductBuyBox({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <Link
        href={`/#${product.category.toLowerCase().replace(/\s+/g, "-")}`}
        className="font-label-sm text-label-sm uppercase tracking-widest text-outline hover:text-primary transition-colors inline-block mb-1"
      >
        {product.category}
      </Link>
      <h1 className="font-headline-lg text-headline-lg text-primary font-normal mb-1 tracking-tight">
        {product.name}
      </h1>
      <span className="font-label-md text-label-md text-outline uppercase tracking-wider block mb-space-sm">
        {product.fabric}
      </span>

      <div className="flex items-center gap-2 mb-3">
        <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">star</span>
        <span className="font-label-md text-label-md font-semibold text-primary">{product.rating}</span>
        <span className="font-body-sm text-body-sm text-outline">({product.reviews} reviews)</span>
      </div>

      <div className="flex items-baseline gap-2 mb-space-md">
        <span className="font-headline-lg text-headline-lg text-primary font-bold">{product.price}</span>
        <span className="font-body-sm text-body-sm text-outline line-through">{product.originalPrice}</span>
        <span className="font-label-sm text-label-sm text-secondary font-bold">{product.discount}</span>
      </div>

      <div className="mb-space-md">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline block mb-2">Size</span>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              className={`w-8 h-8 rounded text-[12px] font-label-sm flex items-center justify-center transition-all ${
                selectedSize === size
                  ? "bg-primary text-on-primary font-bold"
                  : "bg-surface-container text-on-surface hover:bg-surface-container-high"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-space-md">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline block mb-2">Quantity</span>
        <div className="flex items-center gap-3 w-24">
          <button
            className="w-8 h-8 rounded bg-surface-container text-on-surface flex items-center justify-center hover:bg-surface-container-high transition-colors"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            disabled={quantity === 1}
          >
            <span className="material-symbols-outlined text-[16px]">remove</span>
          </button>
          <span className="w-6 text-center font-label-md text-label-md text-primary font-semibold">
            {quantity}
          </span>
          <button
            className="w-8 h-8 rounded bg-surface-container text-on-surface flex items-center justify-center hover:bg-surface-container-high transition-colors"
            onClick={() => setQuantity((q) => q + 1)}
          >
            <span className="material-symbols-outlined text-[16px]">add</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-space-lg">
        <button className="w-full py-3.5 bg-primary text-on-primary rounded-xl font-label-md text-label-md uppercase tracking-wider font-bold hover:bg-primary-container transition-colors shadow-md hover:shadow-lg">
          Add to Bag
        </button>
        <a
          href={`https://wa.me/917907408732?text=Hello%20Aama%20Kuppayam!%20I%20want%20to%20order%20the%20${encodeURIComponent(product.name)}%20-%20Size:%20${encodeURIComponent(selectedSize)}%20Qty:%20${quantity}%20(${encodeURIComponent(product.price)})`}
          rel="noopener noreferrer"
          target="_blank"
          className="w-full py-3.5 bg-surface-container text-primary rounded-xl font-label-md text-label-md uppercase tracking-wider font-bold hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
        >
          <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">chat</span>
          <span>WhatsApp Order</span>
        </a>
      </div>

      <div className="mt-space-lg">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline block mb-2">Description</span>
        <p className="font-body-md text-body-md text-on-surface leading-relaxed">
          {product.description}
        </p>
      </div>

      <div className="mt-space-md">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline block mb-2">Product Details</span>
        <ul className="list-disc list-inside space-y-1 font-body-sm text-body-sm text-on-surface-variant">
          {product.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>

      <div className="mt-space-md">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline block mb-2">Care Instructions</span>
        <ul className="list-disc list-inside space-y-1 font-body-sm text-body-sm text-on-surface-variant">
          {product.care.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
