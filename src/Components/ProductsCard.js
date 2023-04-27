const products = [
  {
    id: 1,
    name: "Prada Cleo satin bag with crystals",
    href: "#",
    imageSrc:
      "https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC169/2AWLF063R/1BC169_2AWL_F063R_V_HOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1000.1000.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "€3300",
    color: "Metal",
  },
  {
    id: 1,
    name: "Re-Nylon mini bag",
    href: "#",
    imageSrc:
      "https://www.prada.com/content/dam/pradanux_products/1/1NI/1NI545/R067F0002/1NI545_R067_F0002_SLF.png/_jcr_content/renditions/cq5dam.web.hebebed.1000.1000.jpg",
    imageAlt:
      "Characterized by a sleek line and emphasized by the iconic enameled metal triangle logo, this mini bag is made of Prada's innovative Re-Nylon fabric produced from recycled plastic materials collected in the ocean. ",
    price: "€560",
    color: "Black",
  },
  {
    id: 1,
    name: "Saffiano leather shoulder bag",
    href: "#",
    imageSrc:
      "https://www.prada.com/content/dam/pradanux_products/1/1NI/1NI545/R067F0002/1NI545_R067_F0002_SLF.png/_jcr_content/renditions/cq5dam.web.hebebed.1000.1000.jpg",
    imageAlt:
      "This shoulder bag with a feminine design and flap is made of Saffiano leather. The accessory is embellished with enameled metal triangle logo that decorates the tip of the flap closure. The bag, with versatile yet ",
    price: "€1980",
    color: "Black",
  },
  {
    id: 1,
    name: "Prada Cleo satin bag with crystals",
    href: "#",
    imageSrc:
      "https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC169/2AWLF063R/1BC169_2AWL_F063R_V_HOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1000.1000.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "€3300",
    color: "Metal",
  },
  // More products...
];

export default function ProductsCard() {
  return (
    <section className="max-w-7xl mx-auto mt-5 p-4">
      {/* Text Before shopCart */}
      <div className="grid grid-cols-2 mt-10">
        <div className="hidden sm:block"></div>
        <div className="col-span-2 sm:col-span-1">
          <h2 class="tracking-tight text-gray-900 uppercase text-4xl lg:text-6xl font-semibold">
            New arrivals winter-fall 2023
          </h2>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            euismod velit, eu posuere nibh eleifend eget. Nullam in quam eu
            purus blandit.
          </p>
        </div>
      </div>
      {/* ShopCart */}

      <div className=" mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
        {products.map((product) => (
          <div key={product.id} className="group relative ">
            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 ">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700 font-bold">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0 " />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              </div>
              <p className="text-sm text-gray-900 font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
