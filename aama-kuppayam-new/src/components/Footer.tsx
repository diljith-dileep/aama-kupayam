import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface-variant pt-space-xl pb-space-lg">
      <div className="w-full px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter mb-space-xl">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-space-sm">
              <span className="font-headline-md text-headline-md text-primary font-normal">Aama Kuppayam</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-space-md leading-relaxed">
              Aama Kuppayam - Elegance Woven with Love. Handcrafted silhouettes celebrating grace, heritage, and contemporary Indian femininity.
            </p>
            <div className="flex items-center gap-3 text-on-tertiary-container">
              <span className="material-symbols-outlined text-[20px]">verified</span>
              <span className="font-label-md text-label-md uppercase tracking-wider text-primary">Artisanal Handloom Certified</span>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold mb-space-md">Quick Links</h4>
            <ul className="space-y-space-xs font-body-sm text-body-sm">
              <li className="py-0.5"><Link className="hover:text-primary transition-colors" href="/shop-all">Shop All</Link></li>
              <li className="py-0.5"><Link className="hover:text-primary transition-colors" href="/shop-all">Best Sellers</Link></li>
              <li className="py-0.5"><Link className="hover:text-primary transition-colors" href="/shop-all">New Arrivals</Link></li>
              <li className="py-0.5"><Link className="hover:text-primary transition-colors" href="/size-guide">Size Guide</Link></li>
              <li className="py-0.5"><Link className="hover:text-primary transition-colors" href="/track-order">Track Order</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold mb-space-md">Customer Care</h4>
            <ul className="space-y-space-xs font-body-sm text-body-sm">
              <li className="py-0.5"><Link className="hover:text-primary transition-colors" href="/shipping-policy">Shipping Policy</Link></li>
              <li className="py-0.5"><Link className="hover:text-primary transition-colors" href="/returns-and-exchanges">Returns & Exchanges</Link></li>
              <li className="py-0.5">
                <Link className="hover:text-primary transition-colors flex items-center gap-1" href="https://wa.me/917907408732" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-[16px]">support_agent</span> WhatsApp: +91 7907408732
                </Link>
              </li>
              <li className="py-0.5">
                <Link className="hover:text-primary transition-colors flex items-center gap-1" href="mailto:contact@aamakuppayam.com">
                  <span className="material-symbols-outlined text-[16px]">mail</span> contact@aamakuppayam.com
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold mb-space-xs">Inner Circle</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Join the Inner Circle for exclusive couture previews, bespoke drops, and private showings.</p>
            <form className="flex flex-col gap-2">
              <div className="flex">
                <input className="w-full bg-surface-container-lowest px-4 py-2 font-body-sm text-body-sm text-on-surface rounded-l-lg outline-none placeholder:text-outline-variant" placeholder="Your email address" type="email" />
                <button className="bg-primary text-on-primary px-5 py-2 rounded-r-lg font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-colors" type="submit">Join</button>
              </div>
              <span className="font-label-sm text-label-sm text-outline">Discretion assured. No unsolicited messaging.</span>
            </form>
          </div>
        </div>
        <div className="pt-space-md flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-on-surface-variant">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Payment Modes</span>
            <span className="px-2.5 py-1 bg-surface-container rounded font-label-sm text-label-sm text-primary font-semibold">UPI</span>
            <span className="px-2.5 py-1 bg-surface-container rounded font-label-sm text-label-sm text-primary font-semibold">VISA</span>
            <span className="px-2.5 py-1 bg-surface-container rounded font-label-sm text-label-sm text-primary font-semibold">MASTERCARD</span>
            <span className="px-2.5 py-1 bg-surface-container rounded font-label-sm text-label-sm text-primary font-semibold">NETBANKING</span>
            <span className="px-2.5 py-1 bg-surface-container rounded font-label-sm text-label-sm text-primary font-semibold">COD</span>
          </div>
          <p className="font-body-sm text-body-sm">© 2025 Aama Kuppayam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}