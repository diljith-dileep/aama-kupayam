"use client";

export default function AboutUs() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full px-margin-mobile lg:px-margin pt-space-xl pb-space-xl">
        <div className="max-w-4xl mx-auto text-center mb-space-lg">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">Our Story</span>
          <h1 className="font-headline-xl text-headline-xl text-primary font-normal mt-2 mb-space-md">
            Aama Kuppayam: Elegance Woven with Love
          </h1>
        </div>
        <div className="space-y-space-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary font-normal mb-space-md">
                Born from Heritage, Crafted for Modern Royalty
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-4">
                Aama Kuppayam was founded with a singular vision: to bring the timeless elegance of Kerala's handloom traditions to the contemporary woman. Our name, meaning "Mother's Blouse" in Malayalam, honors the maternal lineage of craftsmanship passed down through generations of master weavers.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-4">
                Each piece in our collection tells a story — of cotton spun in Chendamangalam's humid air, of zari threads dipped in gold by artisans in Balaramapuram, of silk woven on looms that have clothed brides for centuries. We don't just create garments; we preserve legacies.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <img className="w-full h-full object-cover" alt="Aama Kuppayam Atelier" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVCwSEDwOsmO56AmqCpj3lxRj2o0SshtjS26n8HOO7EuDf8aEFJ1sOWxUNmz01muo6OGh2GWOK6psd53bRGdI4nHCMsVeOftc12KdLvKeUuU7AWi4POYao6P3HK-Iqc42XXbrS0TVmNxtyDAqvLqcdvAn-qCMQ0cV-I_Dk4N8uOQM4DxuuiZ1QB8FmEoD2mtFbtHH68fbFPU19DBJr-2QJTFpQhkz9wY3xMRE1xOoF" />
            </div>
          </div>

          <div className="w-16 h-px bg-on-tertiary-container mx-auto"></div>

          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary font-normal text-center mb-space-lg">Our Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {[
                { icon: "spa", title: "Ethical Handloom", desc: "Direct partnerships with weaver clusters across Kerala and Chanderi, ensuring fair wages and sustainable livelihoods." },
                { icon: "content_cut", title: "Bespoke Precision", desc: "Every garment tailored to individual measurements by our in-house master cutters in Kochi." },
                { icon: "diamond", title: "Heirloom Quality", desc: "Electroplated zari, botanical dyes, and pure silks that retain beauty across generations." },
              ].map((pillar, i) => (
                <div key={i} className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-surface-container flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined text-[28px]">{pillar.icon}</span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary mb-2">{pillar.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-16 h-px bg-on-tertiary-container mx-auto"></div>

          <div className="bg-primary-container text-on-primary rounded-2xl p-space-xl text-center">
            <h2 className="font-headline-lg text-headline-lg text-on-primary font-normal mb-4">Visit Our Atelier</h2>
            <p className="font-body-lg text-body-lg text-on-primary-container max-w-xl mx-auto mb-6">
              Experience the fabrics, meet our artisans, and consult with our master stylists at our Fort Kochi studio.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-on-primary">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">location_on</span>
                <span className="font-body-md text-body-md">Heritage Boulevard, Fort Kochi, Kerala - 682001</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">schedule</span>
                <span className="font-body-md text-body-md">Mon–Sat: 9:30 AM – 7:30 PM IST</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}