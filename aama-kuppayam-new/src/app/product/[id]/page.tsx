import { notFound } from "next/navigation";
import { getProductById, getRelatedProducts, type Product } from "@/data/products";
import ProductBuyBox from "./buy-box";
import ProductRelated from "./product-related";

export const instant = false;

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const productId = Number(id);
  const product: Product | undefined = getProductById(productId);
  const related = getRelatedProducts(productId);

  if (!product) notFound();

  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface py-space-xl px-margin-mobile lg:px-margin">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-xl bg-surface-container">
              <img
                alt={product.name}
                className="w-full h-full object-cover object-center"
                src={product.image}
              />
              <span className="absolute top-3 left-3 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider px-2 py-0.5 rounded">
                {product.badge}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  aria-label={`Image ${index + 1}`}
                  className={`aspect-square rounded-lg overflow-hidden ${index === 0 ? "ring-2 ring-primary ring-offset-1" : "bg-surface-container hover:border-outline-variant border-transparent transition-all"} `}
                >
                  <img alt={product.name} className="w-full h-full object-cover" src={img} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between">
            <ProductBuyBox product={product} />

            <div className="mt-space-lg lg:hidden">
              <ProductRelated related={related} />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="w-full px-margin-mobile lg:px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
            <div className="lg:hidden">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">You May Also Love</span>
              <h2 className="font-headline-lg text-headline-lg text-primary font-normal mt-1">Similar Ensembles</h2>
            </div>
            <ProductRelated related={related} />
          </div>
        </div>
      </section>
    </div>
  );
}
