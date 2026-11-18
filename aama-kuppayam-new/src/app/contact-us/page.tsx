"use client";

import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    custName: "",
    custPhone: "",
    custEmail: "",
    productSelect: "",
    custMessage: "",
  });
  const [showFeedback, setShowFeedback] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const appendRequirement = (text: string) => {
    setFormData((prev) => ({
      ...prev,
      custMessage: prev.custMessage.trim() === "" ? text : prev.custMessage + " " + text,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { custName, custPhone, custEmail, productSelect, custMessage } = formData;

    if (!custName || !custPhone || !productSelect || !custMessage) {
      alert("Please fill out all mandatory fields.");
      return;
    }

    let textContent = `Hello Aama Kuppayam! My name is ${custName}. I am interested in ${productSelect}. My phone number is +91 ${custPhone}.`;
    if (custEmail) {
      textContent += ` My email is ${custEmail}.`;
    }
    textContent += ` Message: ${custMessage}. Please provide more details.`;

    const encodedMessage = encodeURIComponent(textContent);
    const targetUrl = `https://wa.me/917907408732?text=${encodedMessage}`;

    setShowFeedback(true);
    setTimeout(() => {
      window.open(targetUrl, "_blank");
      setShowFeedback(false);
    }, 500);
  };

  const toggleFaq = (id: string) => {
    const content = document.getElementById(id);
    const icon = document.getElementById(`${id}-icon`);
    if (content && icon) {
      if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
        icon.textContent = "remove";
        icon.classList.add("rotate-180");
      } else {
        content.classList.add("hidden");
        icon.textContent = "add";
        icon.classList.remove("rotate-180");
      }
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Subtle Banner */}
      <section className="w-full bg-surface-container-low py-3 px-margin-mobile lg:px-margin">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed-variant animate-pulse"></span>
            <span>Atelier Sizing Desk Online</span>
          </div>
          <div className="flex items-center gap-6 font-label-sm text-label-sm uppercase tracking-wider text-outline">
            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-on-tertiary-container">schedule</span> Mon - Sat: 9:30 AM – 7:30 PM IST</span>
            <span className="hidden sm:inline-block text-outline-variant">•</span>
            <span className="hidden sm:flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-on-tertiary-container">location_on</span> Kochi, Kerala</span>
          </div>
        </div>
      </section>

      {/* Editorial Section Header */}
      <section className="w-full px-margin-mobile lg:px-margin pt-space-xl pb-space-lg relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full mb-space-sm">
                <span className="material-symbols-outlined text-[15px] text-primary">spa</span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Direct Artisan Liaison</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-primary font-normal tracking-tight mb-space-xs">
                Connect with Our Atelier
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                We are here to assist with custom sizes, fabric queries, bridal consultations, and order status. Every creation is tailored to timeless precision.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="flex items-center gap-3 p-4 bg-surface-container-lowest rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-tertiary-container">
                  <span className="material-symbols-outlined text-[24px]">verified_user</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md uppercase tracking-wider text-primary">Bespoke Guarantee</p>
                  <p className="font-body-sm text-body-sm text-outline">Direct consultations with senior stylists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Luxury Grid */}
      <section className="w-full px-margin-mobile lg:px-margin pb-space-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* LEFT COLUMN: Direct Atelier Information & Instant WhatsApp Connect */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            {/* Hero Visual Tile / Inspiration Context */}
            <div className="w-full bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm relative group">
              <div className="w-full h-64 overflow-hidden relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Couture Heritage Studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVCwSEDwOsmO56AmqCpj3lxRj2o0SshtjS26n8HOO7EuDf8aEFJ1sOWxUNmz01muo6OGh2GWOK6psd53bRGdI4nHCMsVeOftc12KdLvKeUuU7AWi4POYao6P3HK-Iqc42XXbrS0TVmNxtyDAqvLqcdvAn-qCMQ0cV-I_Dk4N8uOQM4DxuuiZ1QB8FmEoD2mtFbtHH68fbFPU19DBJr-2QJTFpQhkz9wY3xMRE1xOoF" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-6">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container mb-1">Couture Heritage Studio</span>
                  <p className="font-headline-sm text-headline-sm text-on-primary">Handcrafted with Serenity</p>
                </div>
              </div>
            </div>

            {/* Prominent WhatsApp Concierge Card */}
            <div className="bg-primary text-on-primary rounded-xl p-space-lg shadow-xl relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-primary-container opacity-50 blur-2xl pointer-events-none"></div>
              <div className="relative z-10 flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-full bg-surface-container-lowest/10 backdrop-blur-md flex items-center justify-center text-on-tertiary-container">
                    <span className="material-symbols-outlined text-[32px]">chat</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-surface-container-lowest/15 text-on-primary font-label-sm text-label-sm tracking-widest uppercase">
                    Instant Response
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-primary mb-1">
                    Chat on WhatsApp Instantly
                  </h3>
                  <p className="font-label-md text-label-md tracking-wider text-on-tertiary-container font-semibold">
                    Official Business Desk: +91 7907408732
                  </p>
                </div>
                <p className="font-body-md text-body-md text-surface-container-high leading-relaxed">
                  Get real-time sizing advice, custom dress fittings, fabric videos, and quick checkout assistance directly on your phone.
                </p>
                <a className="w-full flex items-center justify-center gap-3 bg-surface-container-lowest text-primary py-3.5 px-6 rounded-lg font-label-md text-label-md uppercase tracking-widest hover:bg-surface-container-low transition-colors shadow-md mt-2 group" href="https://wa.me/917907408732?text=Hello%20Aama%20Kuppayam!%20I%20have%20an%20enquiry%20regarding%20your%20clothing%20collection." rel="noopener noreferrer" target="_blank">
                  <span>Open WhatsApp Chat Now</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Atelier Contact Details Cards */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">storefront</span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md uppercase tracking-wider text-primary">Boutique Atelier</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-0.5 leading-relaxed">
                    Aama Kuppayam Atelier, Heritage Boulevard, Fort Kochi, Kerala - 682001
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-surface-container"></div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md uppercase tracking-wider text-primary">Working Hours</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                    Monday to Saturday: 9:30 AM – 7:30 PM IST
                  </p>
                  <span className="font-label-sm text-label-sm text-outline">Sunday: By Private Prior Appointment Only</span>
                </div>
              </div>
              <div className="w-full h-px bg-surface-container"></div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md uppercase tracking-wider text-primary">Support & Orders Email</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-0.5 flex flex-col gap-0.5">
                    <a className="hover:text-primary transition-colors" href="mailto:care@aamakuppayam.com">care@aamakuppayam.com</a>
                    <a className="hover:text-primary transition-colors" href="mailto:orders@aamakuppayam.com">orders@aamakuppayam.com</a>
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-surface-container"></div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md uppercase tracking-wider text-primary">Direct Atelier Line</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                    <a className="hover:text-primary transition-colors font-medium" href="tel:+917907408732">+91 7907408732</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Automated WhatsApp Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest rounded-xl p-6 sm:p-space-lg shadow-md relative">
              {/* Decorative Top Accent */}
              <div className="flex items-center justify-between pb-space-sm mb-space-md border-b-0">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">bolt</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">Concierge Dispatch</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-primary font-medium">
                    Send an Automated Inquiry
                  </h2>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded-full text-secondary font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px]">lock</span>
                  <span>End-to-End Encrypted</span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                Fill in your bespoke request below. Our automated system will structure your requirements into an instant WhatsApp dispatch for swift priority handling.
              </p>
              <form className="space-y-space-md" id="whatsappInquiryForm" onSubmit={handleSubmit}>
                {/* Grid 1: Name and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md uppercase tracking-wider text-primary" htmlFor="custName">
                      Customer Name <span className="text-error">*</span>
                    </label>
                    <div className="relative">
                      <input className="w-full bg-surface-container-low px-4 py-3 rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-lowest shadow-inner transition-colors" id="custName" name="custName" placeholder="e.g. Ananya Menon" required type="text" value={formData.custName} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md uppercase tracking-wider text-primary" htmlFor="custPhone">
                      WhatsApp Number <span className="text-error">*</span>
                    </label>
                    <div className="relative flex">
                      <span className="inline-flex items-center px-3.5 bg-surface-container font-body-sm text-body-sm font-semibold text-primary rounded-l-lg">
                        +91
                      </span>
                      <input className="w-full bg-surface-container-low px-4 py-3 rounded-r-lg font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-lowest shadow-inner transition-colors" id="custPhone" name="custPhone" pattern="[0-9]{10}" placeholder="9876543210" required type="tel" value={formData.custPhone} onChange={handleChange} />
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-label-md uppercase tracking-wider text-primary" htmlFor="custEmail">
                    Email Address
                  </label>
                  <input className="w-full bg-surface-container-low px-4 py-3 rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-lowest shadow-inner transition-colors" id="custEmail" name="custEmail" placeholder="name@domain.com" type="email" value={formData.custEmail} onChange={handleChange} />
                </div>

                {/* Product Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-label-md uppercase tracking-wider text-primary" htmlFor="productSelect">
                    Product / Atelier Category Interested In <span className="text-error">*</span>
                  </label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-surface-container-low px-4 py-3 pr-10 rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest shadow-inner transition-colors cursor-pointer" id="productSelect" name="productSelect" required value={formData.productSelect} onChange={handleChange}>
                      <option disabled value="">Select an ensemble or service</option>
                      <option value="Kasavu Heritage Fusion Dress">Kasavu Heritage Fusion Dress</option>
                      <option value="Emerald Embroidered Anarkali Kurti">Emerald Embroidered Anarkali Kurti</option>
                      <option value="Bottle Green Evening Gown">Bottle Green Evening Gown</option>
                      <option value="Custom Bridal Trousseau">Custom Bridal Trousseau</option>
                      <option value="General Sizing Inquiry">General Sizing & Fitting Inquiry</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-primary">
                      <span className="material-symbols-outlined text-[20px]">expand_more</span>
                    </div>
                  </div>
                </div>

                {/* Customer Message */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <label className="font-label-md text-label-md uppercase tracking-wider text-primary" htmlFor="custMessage">
                      Customization Details & Queries <span className="text-error">*</span>
                    </label>
                    <span className="font-label-sm text-label-sm text-outline">Bust, waist, or occasion date</span>
                  </div>
                  <textarea className="w-full bg-surface-container-low p-4 rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-lowest shadow-inner transition-colors resize-y" id="custMessage" name="custMessage" placeholder="e.g. Inquiring about size availability and delivery timeline to Bangalore for an upcoming wedding on the 25th..." required rows={4} value={formData.custMessage} onChange={handleChange}></textarea>
                </div>

                {/* Quick Template Chips */}
                <div>
                  <p className="font-label-sm text-label-sm uppercase tracking-wider text-outline mb-2">Quick Add Requirements:</p>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1 bg-surface-container text-primary rounded-full font-body-sm text-body-sm hover:bg-secondary-fixed transition-colors" onClick={() => appendRequirement("Require custom blouse stitching with lining.")} type="button">
                      + Custom Blouse Stitching
                    </button>
                    <button className="px-3 py-1 bg-surface-container text-primary rounded-full font-body-sm text-body-sm hover:bg-secondary-fixed transition-colors" onClick={() => appendRequirement("Need expedited delivery before the weekend.")} type="button">
                      + Urgent Timeline
                    </button>
                    <button className="px-3 py-1 bg-surface-container text-primary rounded-full font-body-sm text-body-sm hover:bg-secondary-fixed transition-colors" onClick={() => appendRequirement("Requesting high-res real fabric video on WhatsApp.")} type="button">
                      + Fabric Video Preview
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button className="w-full flex items-center justify-center gap-3 bg-primary text-on-primary py-4 px-8 rounded-lg font-label-md text-label-md uppercase tracking-widest hover:bg-primary-container transition-all shadow-lg active:scale-[0.99]" type="submit">
                    <span className="material-symbols-outlined text-[20px] text-on-tertiary-container">send</span>
                    <span>Send Inquiry via WhatsApp (+91 7907408732)</span>
                  </button>
                  <div className="flex items-center justify-center gap-2 mt-3 text-center">
                    <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">info</span>
                    <p className="font-body-sm text-body-sm text-outline">
                      Clicking submit will launch your WhatsApp web or app with your details pre-formatted for rapid response.
                    </p>
                  </div>
                </div>
              </form>

              {/* Status Indicator Pill */}
              <div className={`mt-4 p-3 bg-secondary-fixed text-on-secondary-fixed rounded-lg text-center font-body-sm text-body-sm ${showFeedback ? "" : "hidden"}`} id="dispatchFeedback">
                Redirecting to WhatsApp Concierge Desk...
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Artisan Tribute Divider */}
      <section className="w-full bg-surface-container-low py-space-xl px-margin-mobile lg:px-margin">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="w-16 h-px bg-on-tertiary-container mb-space-sm"></div>
          <p className="font-headline-md text-headline-md italic text-primary leading-relaxed mb-space-sm">
            "Every seam speaks of patience, every fold honors heritage. When you contact our atelier, you converse directly with artisans dedicated to the drape of pure elegance."
          </p>
          <span className="font-label-md text-label-md uppercase tracking-widest text-on-tertiary-container">
            Master Weaver & Creative Directorate — Kochi
          </span>
          <div className="w-16 h-px bg-on-tertiary-container mt-space-sm"></div>
        </div>
      </section>

      {/* Frequently Asked Inquiries Accordion Section */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-space-lg">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">Assistance & Guidance</span>
            <h3 className="font-headline-lg text-headline-lg text-primary mt-1">Frequently Asked Inquiries</h3>
          </div>
          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-300">
              <button className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-container-low transition-colors" onClick={() => toggleFaq("faq-1")} type="button">
                <span className="font-title-md text-title-md text-primary font-medium">
                  How do I measure myself for custom fittings?
                </span>
                <span className="material-symbols-outlined text-primary text-[24px] transition-transform duration-300" id="faq-1-icon">
                  add
                </span>
              </button>
              <div className="hidden px-6 pb-6 pt-1 text-on-surface-variant font-body-md text-body-md leading-relaxed" id="faq-1">
                Our atelier sizing guide uses three key anatomical metrics: High Bust, Natural Waist, and Shoulder to Hemline length. Once you begin a WhatsApp conversation, our senior draping specialist can share an illustrated video diagram or host a 5-minute video call to verify your exact measurements before our artisans cut the fabric.
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-300">
              <button className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-container-low transition-colors" onClick={() => toggleFaq("faq-2")} type="button">
                <span className="font-title-md text-title-md text-primary font-medium">
                  What is your standard shipping timeline across India?
                </span>
                <span className="material-symbols-outlined text-primary text-[24px] transition-transform duration-300" id="faq-2-icon">
                  add
                </span>
              </button>
              <div className="hidden px-6 pb-6 pt-1 text-on-surface-variant font-body-md text-body-md leading-relaxed" id="faq-2">
                Ready-to-ship collections are dispatched within 24 to 48 working hours and generally reach metropolitan hubs (Mumbai, Bengaluru, Delhi, Chennai, Hyderabad) in 3-4 business days via BlueDart Air. Bespoke couture or custom-stitched trousseaus necessitate 7 to 14 working days of hand-embroidery and precision tailoring.
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-300">
              <button className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-container-low transition-colors" onClick={() => toggleFaq("faq-3")} type="button">
                <span className="font-title-md text-title-md text-primary font-medium">
                  Can I order matching family ensembles or custom colors?
                </span>
                <span className="material-symbols-outlined text-primary text-[24px] transition-transform duration-300" id="faq-3-icon">
                  add
                </span>
              </button>
              <div className="hidden px-6 pb-6 pt-1 text-on-surface-variant font-body-md text-body-md leading-relaxed" id="faq-3">
                Yes, our Kochi design house frequently curates matching mother-daughter sets, bridal trousseau companion palettes, and men's ceremonial kurtas using corresponding Kasavu borders and organic tussar silk. Simply select 'Custom Bridal Trousseau' in the form above and leave a note.
              </div>
            </div>
          </div>

          {/* Quick Contact Bottom Bar */}
          <div className="mt-space-lg p-6 bg-surface-container rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-tertiary-container shrink-0">
                <span className="material-symbols-outlined text-[20px]">headset_mic</span>
              </div>
              <div>
                <p className="font-title-md text-title-md text-primary font-semibold">Prefer a direct voice conversation?</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Speak directly with our atelier coordinator in Kochi.</p>
              </div>
            </div>
            <a className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-on-primary rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-colors shrink-0" href="tel:+917907408732">
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>+91 7907408732</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}