"use client";

export default function ReturnsExchanges() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full px-margin-mobile lg:px-margin pt-space-xl pb-space-xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-space-lg">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">Customer Care</span>
            <h1 className="font-headline-xl text-headline-xl text-primary font-normal mt-2 mb-space-md">
              Returns & Exchanges
            </h1>
          </div>

          <div className="space-y-space-xl bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
            <div>
              <div className="bg-secondary-container/40 rounded-xl p-6 mb-6">
                <h2 className="font-headline-md text-headline-md text-primary mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[24px]">verified</span>
                  Our Promise
                </h2>
                <p className="font-body-md text-body-md text-on-secondary-container">
                  We want you to cherish every Aama Kuppayam piece. If something isn't perfect, we'll make it right — whether that's an exchange, alteration, or return.
                </p>
              </div>

              <h2 className="font-headline-md text-headline-md text-primary mb-4">Eligibility</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-surface-container rounded-lg">
                  <h3 className="font-title-md text-title-md text-primary mb-2">✓ Eligible for Return/Exchange</h3>
                  <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Unworn, unwashed, with original tags</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Within 7 days of delivery</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Original packaging intact</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Size exchange (first exchange free)</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Manufacturing defects (full refund)</li>
                  </ul>
                </div>
                <div className="p-4 bg-surface-container rounded-lg">
                  <h3 className="font-title-md text-title-md text-error mb-2">✗ Not Eligible</h3>
                  <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-error text-[18px]">cancel</span>Custom-tailored / bespoke pieces</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-error text-[18px]">cancel</span>Bridal trousseau & made-to-order</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-error text-[18px]">cancel</span>Worn, washed, or altered items</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-error text-[18px]">cancel</span>Missing tags or original packaging</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-error text-[18px]">cancel</span>Sale items marked "Final Sale"</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-surface-container pt-space-lg">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">Process</h2>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Initiate Request", desc: "Contact us via WhatsApp or email within 7 days with your order ID and reason." },
                  { step: "2", title: "Approval & Pickup", desc: "We'll authorize return and schedule a complimentary pickup (for eligible items)." },
                  { step: "3", title: "Quality Check", desc: "Items inspected at our atelier within 2–3 business days of receipt." },
                  { step: "4", title: "Resolution", desc: "Exchange shipped free / Refund processed to original payment method in 5–7 days." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 p-4 bg-surface-container rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-lg flex-shrink-0">{item.step}</div>
                    <div>
                      <h3 className="font-title-md text-title-md text-primary">{item.title}</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-surface-container pt-space-lg">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">Refund Timeline</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-surface-container">
                      <th className="p-3 text-left font-label-md text-label-md uppercase tracking-wider text-primary">Payment Method</th>
                      <th className="p-3 text-left font-label-md text-label-md uppercase tracking-wider text-primary">Refund Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-surface-container/50"><td className="p-3 font-body-md text-body-md text-on-surface">UPI / Net Banking</td><td className="p-3 font-body-md text-body-md text-on-surface">3–5 business days</td></tr>
                    <tr className="border-b border-surface-container/50"><td className="p-3 font-body-md text-body-md text-on-surface">Credit / Debit Card</td><td className="p-3 font-body-md text-body-md text-on-surface">5–7 business days</td></tr>
                    <tr className="border-b border-surface-container/50"><td className="p-3 font-body-md text-body-md text-on-surface">COD (Store Credit)</td><td className="p-3 font-body-md text-body-md text-on-surface">Instant upon approval</td></tr>
                    <tr><td className="p-3 font-body-md text-body-md text-on-surface">COD (Bank Transfer)</td><td className="p-3 font-body-md text-body-md text-on-surface">5–7 business days</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-t border-surface-container pt-space-lg">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">Start a Return/Exchange</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <a className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-colors" href="https://wa.me/917907408732?text=Hello%20Aama%20Kuppayam!%20I%20would%20like%20to%20initiate%20a%20return%20or%20exchange." rel="noopener noreferrer" target="_blank">
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>WhatsApp Concierge</span>
                </a>
                <a className="flex items-center gap-2 px-6 py-3 bg-surface-container text-primary rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container-high transition-colors" href="mailto:returns@aamakuppayam.com">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                  <span>Email: returns@aamakuppayam.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}