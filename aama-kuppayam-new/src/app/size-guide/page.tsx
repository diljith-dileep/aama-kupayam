"use client";

export default function SizeGuide() {
  const sizes = [
    { label: "XS", bust: "32\"", waist: "25\"", hips: "34\"", length: "56\"" },
    { label: "S", bust: "34\"", waist: "27\"", hips: "36\"", length: "57\"" },
    { label: "M", bust: "36\"", waist: "29\"", hips: "38\"", length: "58\"" },
    { label: "L", bust: "38\"", waist: "31\"", hips: "40\"", length: "59\"" },
    { label: "XL", bust: "40\"", waist: "33\"", hips: "42\"", length: "60\"" },
    { label: "XXL", bust: "42\"", waist: "35\"", hips: "44\"", length: "61\"" },
  ];

  return (
    <div className="flex flex-col w-full">
      <section className="w-full px-margin-mobile lg:px-margin pt-space-xl pb-space-xl">
        <div className="max-w-4xl mx-auto text-center mb-space-lg">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">Size Guide</span>
          <h1 className="font-headline-xl text-headline-xl text-primary font-normal mt-2 mb-space-md">
            Find Your Perfect Fit
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Our garments are tailored to precise measurements. Use the guide below to find your size, or connect with our stylists for custom fittings.
          </p>
        </div>

        <div className="max-w-3xl mx-auto overflow-x-auto">
          <table className="w-full bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
            <thead className="bg-primary-container text-on-tertiary-container">
              <tr>
                <th className="p-4 text-left font-label-md text-label-md uppercase tracking-wider">Size</th>
                <th className="p-4 text-left font-label-md text-label-md uppercase tracking-wider">Bust</th>
                <th className="p-4 text-left font-label-md text-label-md uppercase tracking-wider">Waist</th>
                <th className="p-4 text-left font-label-md text-label-md uppercase tracking-wider">Hips</th>
                <th className="p-4 text-left font-label-md text-label-md uppercase tracking-wider">Length</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((size, i) => (
                <tr key={size.label} className={i % 2 === 0 ? "bg-surface-container/50" : ""}>
                  <td className="p-4 font-title-md text-title-md text-primary">{size.label}</td>
                  <td className="p-4 font-body-md text-body-md text-on-surface">{size.bust}</td>
                  <td className="p-4 font-body-md text-body-md text-on-surface">{size.waist}</td>
                  <td className="p-4 font-body-md text-body-md text-on-surface">{size.hips}</td>
                  <td className="p-4 font-body-md text-body-md text-on-surface">{size.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="max-w-3xl mx-auto mt-space-xl space-y-space-lg">
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
            <h3 className="font-headline-md text-headline-md text-primary mb-4">How to Measure</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Bust", desc: "Measure around the fullest part of your bust, keeping the tape parallel to the floor." },
                { title: "Waist", desc: "Measure around your natural waistline — the narrowest part of your torso." },
                { title: "Hips", desc: "Measure around the fullest part of your hips, typically 7-9 inches below waist." },
                { title: "Length", desc: "Measure from shoulder to desired hemline for anarkalis, gowns, and maxi dresses." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-surface-container rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">straighten</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md uppercase tracking-wider text-primary">{item.title}</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-secondary-container/40 rounded-xl p-space-lg">
            <h3 className="font-headline-md text-headline-md text-primary mb-3">Need Custom Sizing?</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              Every Aama Kuppayam piece can be custom-tailored to your exact measurements. Our master patternmakers offer guided video consultations for bust, waist, hip, shoulder, sleeve length, and hemline adjustments.
            </p>
            <a className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-colors" href="https://wa.me/917907408732?text=Hello%20Aama%20Kuppayam!%20I%20would%20like%20custom%20measurement%20assistance." rel="noopener noreferrer" target="_blank">
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Book Custom Fitting</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}