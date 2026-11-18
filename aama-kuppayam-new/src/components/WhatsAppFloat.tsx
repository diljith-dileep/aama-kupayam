export default function WhatsAppFloat() {
  return (
    <aside className="fixed bottom-8 right-8 z-40">
      <a className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-primary text-on-tertiary-container shadow-[0_8px_30px_rgba(27,56,43,0.25)] hover:scale-105 transition-all duration-300 ring-2 ring-on-tertiary-container/40"
         href="https://wa.me/917907408732?text=Hello%20Aama%20Kuppayam!%20I%20have%20an%20enquiry."
         rel="noopener noreferrer"
         target="_blank"
      >
        <span className="absolute -inset-1 rounded-full bg-primary-container opacity-40 animate-ping"></span>
        <span className="material-symbols-outlined text-[26px] relative z-10 text-on-primary">chat</span>
      </a>
    </aside>
  );
}