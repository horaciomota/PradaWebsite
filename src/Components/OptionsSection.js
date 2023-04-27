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
    <section className="max-w-7xl mx-auto mt-5 p-4 ">
      {/* Text Before List */}
      <div className="grid grid-cols-2 mt-10">
        <div className="hidden sm:block"></div>
        <div className="col-span-2 sm:col-span-1">
          <h2 class="tracking-tight text-gray-900 uppercase text-4xl lg:text-6xl font-semibold mb-5">
            New in
          </h2>
        </div>
      </div>
      {/* Columms of itens and Model Picture */}
      <div className="grid grid-cols-2 gap-0 ">
        {/* List of section */}
        <div className="flex lg:flex-col gap-4 col-span-2 sm:col-span-1 sm:flex-row">
          {itemsToShow.map((itemList) => (
            <h2 key={itemList.id} className="font-semibold uppercase">
              {itemList.CatName}
            </h2>
          ))}
        </div>

        {/* Model Picture */}
          <div className="col-span-2 sm:col-span-1 mt-4 min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:min-h-screen sm:w-full">
            <img
              src="https://weselectdresses.com/wp-content/uploads/2023/01/Screenshot-2023-01-08-at-5.08.22-PM.jpeg"
              alt="Model"
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
      </div>
    </section>
  );
};

export default OptionsSection;
