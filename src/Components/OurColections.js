const OurColections = () => {
  const mobileWidth = 640;
  const colection = [
    {
      promoPic:
        "https://www.prada.com/content/dam/pradanux/home_page/2023/03/Tropico/ww/men_bag/banner_MB.jpg",
      title: "Holiday 2023",
      id: "1",
    },

    {
      promoPic:
        "https://www.prada.com/content/dam/pradanux/home_page/2023/03/Tropico/kw_ca_br_au/hero/banner_MB.jpg",
      title: "Spring/summer 2024",
      id: "2",
    },

    {
      promoPic:
        "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xNzA3MzcyNC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTczMzQ4MzY2Nn0.ZV9lvMWEQp3JoZc5VIVMvDGevU13AMH6lztHwP6tTs4/img.jpg?width=1200&height=600&coordinates=0%2C309%2C0%2C309",
      title: "TimeCaps 2023",
      id: "3",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto p-4 ">
      <div className="flex ">
        <div className="hidden sm:block lg:w-1/3 "></div>
        <div className=" flex-1 col-span-2 sm:col-span-1">
          <h2 class="tracking-tight text-gray-900 uppercase text-4xl lg:text-6xl font-semibold mb-10">
            Our colections
          </h2>
        </div>
      </div>
      <div className="flex ">
        <div className="w-1/2 hidden lg:block">
          <p className="">
            Discover all the most iconic design from the women's collections
            featuring emblematic prada bags and shoes vibrant acessories and
            gift ideas
          </p>
        </div>

        {/* MAP OF COLECTION */}
        <div className="flex w-full overflow-hidden ">
          {colection.map((card) => (
            <div
              key={card.id}
              className="border-r border-l border-solid border-gray hidden lg:block "
            >
              <div className="w-colection ">
                <img
                  src={card.promoPic}
                  className="object-cover mx-auto p-4  h-colection"
                  alt="Colection"
                />
              </div>
              <h1 className="text-center uppercase">{card.title}</h1>
              <p className="tracking-tight uppercase text-center lg:text-center text-2xl lg:text-6xl mt-5 mb-5">
                {card.id}
              </p>
            </div>
          ))}

          <div className="min-h-80 aspect-h-1 w-full overflow-hidden rounded-md lg:aspect-none group lg:h-pictureSpecial block lg:hidden">
            <img
              src="https://www.prada.com/content/dam/pradanux/home_page/2023/03/Tropico/ww/men_bag/banner_MB.jpg"
              alt="Model"
              className="w-full h-colection2 object-cover   group-hover:opacity-75 "
            />

            <div className="w-full bg-black uppercase text-white text-center mt-5 p-3 rounded lg:hidden">
              Discover More
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurColections;
