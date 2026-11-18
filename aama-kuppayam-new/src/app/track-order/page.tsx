"use client";

import { useState } from "react";

export default function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [trackingInfo, setTrackingInfo] = useState<{
    orderId: string;
    status: string;
    estimatedDelivery: string;
    items: string[];
    timeline: { date: string; status: string; location: string }[];
  } | null>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId.trim()) return;

    // Mock tracking data
    setTrackingInfo({
      orderId: orderId.toUpperCase(),
      status: "Out for Delivery",
      estimatedDelivery: "Today by 8:00 PM",
      items: ["Devika Emerald Embroidered Anarkali Set (Size M)", "Malabar Kasavu Heritage Fusion Gown (Size L)"],
      timeline: [
        { date: "2025-01-15 10:30 AM", status: "Order Confirmed", location: "Aama Kuppayam Atelier, Kochi" },
        { date: "2025-01-15 02:15 PM", status: "Handcrafted & Quality Checked", location: "Kochi Workshop" },
        { date: "2025-01-16 09:00 AM", status: "Dispatched via BlueDart Air", location: "Kochi Hub" },
        { date: "2025-01-17 11:30 AM", status: "Arrived at Destination Hub", location: "Bengaluru Hub" },
        { date: "2025-01-18 07:45 AM", status: "Out for Delivery", location: "Bengaluru" },
      ],
    });
  };

  return (
    <div className="flex flex-col w-full">
      <section className="w-full px-margin-mobile lg:px-margin pt-space-xl pb-space-xl">
        <div className="max-w-2xl mx-auto text-center mb-space-lg">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">Order Tracking</span>
          <h1 className="font-headline-xl text-headline-xl text-primary font-normal mt-2 mb-space-md">
            Track Your Order
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            Enter your order ID to see real-time shipping updates and estimated delivery.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleTrack} className="mb-space-lg">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter Order ID (e.g., AK2025001234)"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="flex-1 bg-surface-container-low px-4 py-3 rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-lowest shadow-inner transition-colors"
                required
              />
              <button type="submit" className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-colors whitespace-nowrap">
                Track
              </button>
            </div>
          </form>

          {trackingInfo && (
            <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
              <div className="bg-primary-container text-on-tertiary-container p-4 border-b border-surface-container">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <p className="font-label-sm text-label-sm uppercase tracking-wider">Order ID</p>
                    <p className="font-title-md text-title-md text-primary font-bold">{trackingInfo.orderId}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    <span className="font-label-md text-label-md text-primary font-semibold">{trackingInfo.status}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-label-sm text-label-sm uppercase tracking-wider">Estimated Delivery</p>
                    <p className="font-body-md text-body-md text-on-tertiary-container font-semibold">{trackingInfo.estimatedDelivery}</p>
                  </div>
                </div>
              </div>

              <div className="p-4 border-b border-surface-container">
                <h3 className="font-label-md text-label-md uppercase tracking-wider text-primary mb-3">Items in this Order</h3>
                <ul className="space-y-2">
                  {trackingInfo.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 p-2 bg-surface-container rounded-lg">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span className="font-body-sm text-body-sm text-on-surface">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4">
                <h3 className="font-label-md text-label-md uppercase tracking-wider text-primary mb-3">Shipping Timeline</h3>
                <div className="space-y-4">
                  {trackingInfo.timeline.map((event, i) => (
                    <div key={i} className="flex gap-4 relative">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className={`w-3 h-3 rounded-full border-2 ${i === trackingInfo.timeline.length - 1 ? "bg-primary border-primary" : "bg-primary border-primary"}`}></div>
                        {i < trackingInfo.timeline.length - 1 && <div className="w-0.5 h-full bg-primary mt-1"></div>}
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="font-body-md text-body-md text-on-surface font-medium">{event.status}</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">{event.location} • {event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}