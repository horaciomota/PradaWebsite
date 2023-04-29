import { useState, useEffect } from "react";

const OptionsSection = () => {
  /* List of Itens */
  const listOfSections = [
    {
      Id: 1,
      CatName: "Ready to Wear",
      Items: "#",
    },

    {
      Id: 1,
      CatName: "Bags",
      Items: "#",
    },
    {
      Id: 1,
      CatName: "Shoes",
      Items: "#",
    },
    {
      Id: 1,
      CatName: "Acessories",
      Items: "#",
    },
    {
      Id: 1,
      CatName: "LifeStyle Acessories",
      Items: "#",
    },
    {
      Id: 1,
      CatName: "Jewelry",
      Items: "#",
    },
    {
      Id: 1,
      CatName: "travel",
      Items: "#",
    },
    {
      Id: 1,
      CatName: "womens's gifts",
      Items: "#",
    },
    {
      Id: 1,
      CatName: "soft feel",
      Items: "#",
    },
    {
      Id: 1,
      CatName: "New Formal",
      Items: "#",
    },
    {
      Id: 1,
      CatName: "Party Essentials",
      Items: "#",
    },
  ];

  /* Function that render just 4 itens on array - Mobile 640 */
  const [itemsToShow, setItemsToShow] = useState(() => {
    return window.innerWidth < 640
      ? listOfSections.slice(0, 4)
      : listOfSections;
  });

  useEffect(() => {
    function handleResize() {
      setItemsToShow(
        window.innerWidth < 640 ? listOfSections.slice(0, 4) : listOfSections
      );
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [listOfSections]);

  return (
    <section className="max-w-5xl mx-auto mt-5 p-4 ">
      {/* Text Before List */}
      <div className="flex mt-10 ">
        <div className="hidden sm:block lg:w-1/3 "></div>
        <div className="col-span-2 sm:col-span-1">
          <h2 class="tracking-tight text-gray-900 uppercase text-4xl lg:text-6xl font-semibold mb-5">
            New in
          </h2>
        </div>
      </div>
      {/* Columms of itens and Model Picture */}
      <div className="lg:flex sm:block">
        {/* List of section */}
        <div className=" flex mb-5 lg:w-1/2 lg:flex-col gap-4 col-span-2 sm:col-span-1 sm:flex-row sm:w-1/2 ">
          {itemsToShow.map((itemList) => (
            <h2 key={itemList.id} className="uppercase">
              {itemList.CatName}
            </h2>
          ))}
        </div>
        <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group lg:h-pictureSpecial">
          <img
            src="https://www.prada.com/content/dam/pradanux/home_page/2022/11/holiday/mosaic_holiday_3/Card_1_DT.jpg"
            alt="Model"
            className="h-full w-full object-cover object-top lg:h-full lg:w-full group-hover:opacity-75"
          />
        </div>
        <div className="w-full bg-black uppercase text-white text-center mt-5 p-3 rounded lg:hidden">
          Discover More
        </div>
      </div>
    </section>
  );
};

export default OptionsSection;
