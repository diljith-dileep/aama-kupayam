import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-space-xl text-center">
      <span className="material-symbols-outlined text-[64px] text-outline mb-4 block">search_off</span>
      <h2 className="font-headline-lg text-headline-lg text-primary font-normal mb-2">Outfit Not Found</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
        The ensemble you are looking for is not available right now.
      </p>
      <Link href="/shop-all" className="inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">
        <span>Browse All Ensembles</span>
        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </Link>
    </div>
  );
}
