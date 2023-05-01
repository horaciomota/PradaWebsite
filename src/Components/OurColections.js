const OurColections = () => {
  const colection = [
    {
      picture:
        "https://www.prada.com/content/dam/pradanux/home_page/2023/03/Tropico/ww/men_bag/banner_MB.jpg",
      title: "Holiday 2023",
      id: "1",
    },

    {
      picture:
        "https://www.prada.com/content/dam/pradanux/home_page/2023/03/Tropico/kw_ca_br_au/hero/banner_MB.jpg",
      title: "Spring/summer 2024",
      id: "2",
    },

    {
      picture:
        "https://www.prada.com/content/dam/pradanux/home_page/2023/03/Tropico/kw_ca_br_au/hero/banner_MB.jpg",
      title: "Spring/summer 2024",
      id: "2",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto p-4 ">
      <div className="flex ">
        <div className="hidden sm:block lg:w-1/3 "></div>
        <div className=" flex-1 col-span-2 sm:col-span-1">
          <h2 class="tracking-tight text-gray-900 uppercase text-4xl lg:text-6xl font-semibold mb-10">
            Our colections
          </h2>
        </div>
      </div>
      <div className="flex ">
        <div className="w-1/2">
          <p className="hidden lg:block">
            Discover all the most iconic design from the women's collections
            featuring emblematic prada bags and shoes vibrant acessories and git
            ideas
          </p>
        </div>

        {/* MAP OF COLECTION */}
        <div className="flex w-full overflow-hidden bg-lime-800">
          {colection.map((card) => (
            <div key={card.id} className="  ">
              <div className="h-colection w-colection">
                <img
                  src={card.picture}
                  className="object-cover mx-auto  "
                  alt="Image Colection"
                />
              </div>
              <h1 className="text-left">{card.title}</h1>
              <p className="tracking-tight uppercase text-center lg:text-center text-2xl lg:text-6xl mt-5 mb-5">
                {card.id}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurColections;
