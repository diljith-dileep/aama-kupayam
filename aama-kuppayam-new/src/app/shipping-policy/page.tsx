"use client";

export default function ShippingPolicy() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full px-margin-mobile lg:px-margin pt-space-xl pb-space-xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-space-lg">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">Customer Care</span>
            <h1 className="font-headline-xl text-headline-xl text-primary font-normal mt-2 mb-space-md">
              Shipping Policy
            </h1>
          </div>

          <div className="space-y-space-xl bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">Delivery Timelines</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-surface-container rounded-lg">
                  <h3 className="font-title-md text-title-md text-primary mb-2">Ready-to-Ship Collections</h3>
                  <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Dispatched within 24–48 working hours</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Metro cities: 3–4 business days</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Rest of India: 5–7 business days</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Shipped via BlueDart Air / Delhivery</li>
                  </ul>
                </div>
                <div className="p-4 bg-surface-container rounded-lg">
                  <h3 className="font-title-md text-title-md text-primary mb-2">Bespoke & Custom Orders</h3>
                  <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">schedule</span>Hand-embroidery: 7–14 working days</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">schedule</span>Precision tailoring: 5–7 working days</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">schedule</span>Total timeline: 14–21 working days</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">schedule</span>Video fitting consultation included</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-surface-container pt-space-lg">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">Shipping Charges</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-surface-container">
                      <th className="p-3 text-left font-label-md text-label-md uppercase tracking-wider text-primary">Order Value</th>
                      <th className="p-3 text-left font-label-md text-label-md uppercase tracking-wider text-primary">Shipping Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-surface-container/50">
                      <td className="p-3 font-body-md text-body-md text-on-surface">Below ₹2,999</td>
                      <td className="p-3 font-body-md text-body-md text-on-surface">₹99 (Standard) / ₹199 (Express)</td>
                    </tr>
                    <tr className="border-b border-surface-container/50">
                      <td className="p-3 font-body-md text-body-md text-on-surface">₹2,999 and above</td>
                      <td className="p-3 font-body-md text-body-md text-primary font-semibold">FREE (Complimentary Pan-India)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-body-md text-body-md text-on-surface">International</td>
                      <td className="p-3 font-body-md text-body-md text-on-surface">Calculated at checkout (DHL/FedEx)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-t border-surface-container pt-space-lg">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">Important Notes</h2>
              <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-[20px] mt-0.5">info</span><span>Orders placed after 2 PM IST are processed the next working day.</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-[20px] mt-0.5">info</span><span>Sunday and public holidays are not working days for dispatch.</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-[20px] mt-0.5">info</span><span>COD available for orders up to ₹10,000 (additional ₹50 fee applies).</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-[20px] mt-0.5">info</span><span>International orders may incur customs duties payable by the recipient.</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-[20px] mt-0.5">info</span><span>Gift wrapping complimentary on all orders — add a note at checkout.</span></li>
              </ul>
            </div>

            <div className="border-t border-surface-container pt-space-lg">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">Contact for Shipping Queries</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <a className="flex items-center gap-2 px-4 py-3 bg-primary text-on-primary rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-colors" href="https://wa.me/917907408732?text=Hello%20Aama%20Kuppayam!%20I%20have%20a%20shipping%20query." rel="noopener noreferrer" target="_blank">
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>WhatsApp Support</span>
                </a>
                <a className="flex items-center gap-2 px-4 py-3 bg-surface-container text-primary rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container-high transition-colors" href="mailto:orders@aamakuppayam.com">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                  <span>Email: orders@aamakuppayam.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}