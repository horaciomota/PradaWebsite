import { Fragment } from "react";

const JeffGalery = () => {
  const JeffPictures = [
    {
      SmallPicture:
        "https://images-prod.dazeddigital.com/600/642-19-633-422/azure/dazed-prod/1320/5/1325474.jpg",
    },
    {
      BigPicture:
        "https://images-prod.dazeddigital.com/600/642-19-633-422/azure/dazed-prod/1320/5/1325474.jpg",
    },
    {
      BigPicture:
        "https://images-prod.dazeddigital.com/600/642-19-633-422/azure/dazed-prod/1320/5/1325474.jpg",
    },
    {
      BigPicture:
        "https://images-prod.dazeddigital.com/600/642-19-633-422/azure/dazed-prod/1320/5/1325474.jpg",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto p-4 ">
      {/* Text Before Jeff's Pictures */}
      <div className="flex flex-wrap mt-10 ">
        <div className="hidden sm:block lg:w-1/3 "></div>
        <div className=" flex-1 col-span-2 sm:col-span-1 mb-4">
          <h2 class="tracking-tight text-gray-900 uppercase text-4xl lg:text-6xl font-semibold mb-5">
            Words are not needed to feel the style
          </h2>
          <p>
            "I'll tell you what's alredy out of fashion the obsession with
            youth. this is very boring"
          </p>
        </div>

        {/* Start of the Picture array  */}

        <div className="w-full flex justify-between">
          <div className="w-cardJef h-cardJef hidden lg:block">
            <img
              src="https://images-prod.dazeddigital.com/600/642-19-633-422/azure/dazed-prod/1320/5/1325474.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-cardJef h-cardJef hidden lg:block">
            <img
              src="https://www.billboard.com/wp-content/uploads/media/Jeff-Goldblum-press-by-Pari-Dukovic-2018-billboard-1548.jpg?w=942&h=623&crop=1"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" aspect-h-1 w-full rounded-md lg:aspect-none group lg:w-cardJefEspecial lg:h-cardJefEspecial block ">
            <img
              src="https://www.bobswatches.com/rolex-blog/wp-content/uploads/2018/07/Cartier-Tank-Photo-by-Michael-J-Fox.png"
              alt=""
              className="w-full lg:h-full object-cover"
            />
          </div>

          <div className="w-cardJef h-cardJef  hidden lg:block">
            <img
              src="https://lorellaflego.com/wp-content/uploads/2019/01/t-best-dressed-list-2018-mix-masters-01.jpg"
              alt=""
              className="h-colection2 w-full lg:h-full object-cover"
            />
          </div>

          <div className="w-cardJef h-cardJef hidden lg:block">
            <img
              src="https://images-prod.dazeddigital.com/600/642-19-633-422/azure/dazed-prod/1320/5/1325474.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JeffGalery;
