const OurColections = () => {
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
        <div className="flex flex-col w-colection overflow-hidden ">
          <div className="h-colection w-colection bg-red-900">
            <img
              src="https://media.cdn.adultswim.com/uploads/20220927/thumbnails/2_229271558509-RickAndMorty_607_DeSmithation.png"
              className="object-cover h-colection"
              alt="Image Colection"
            />
          </div>
          <h1>Holiday 2023</h1>
          <p className="tracking-tight text-gray-900 uppercase text-center lg:text-center text-2xl lg:text-6xl mt-5 mb-5">
            01
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurColections;
