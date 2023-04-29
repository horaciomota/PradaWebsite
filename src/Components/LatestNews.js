const LatestNews = () => {
  const LastNewsPosts = [
    {
      Title: "Prada Linea Rosa FW23",
      SubTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      Date: "25/01/2023",
      Image:
        "https://images-prod.dazeddigital.com/1800/azure/dazed-prod/1330/6/1336320.jpg",
    },
    {
      Title: "SS 2023 women's colletion",
      SubTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      Date: "25/01/2023",
      Image:
        "https://media.voguebusiness.com/photos/62e29623f6d4880dc7408daa/2:3/w_2560%2Cc_limit/prada-earnings-voguebus-photographer-month-22-story.jpg",
    },
    {
      Title: "Time capsule nft colection",
      SubTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      Date: "25/01/2023",
      Image:
        "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/W6BF6GUO4RPCFGCDSMXZW6DMGA.jpg",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto p-4 ">
      <div className="flex ">
        <div className="hidden sm:block lg:w-1/3 "></div>
        <div className=" flex-1 col-span-2 sm:col-span-1">
          <h2 class="tracking-tight text-gray-900 uppercase text-4xl lg:text-6xl font-semibold mb-10">
            Latest News
          </h2>
        </div>
      </div>
      {/* CardLastNews */}
      {LastNewsPosts.map((Newpost) => (
        <div className="w-full flex justify-end items-center lg:items-start border-t-2 border-solid border-gray mb-5 ">
          <div className="flex justify-center w-1/6 lg:w-1/6 lg:order-last order-first lg:rotate-0 flex items-center h-full -rotate-90 mt-5">
            <p className="text-right">{Newpost.Date}</p>
          </div>

          <div className="w-1/2 lg:w-1/3 ">
            <img
              src={Newpost.Image}
              alt="Linea Rosa"
              style={{ width: "100%", height: "150px" }}
              className="h-full w-full object-cover object-right lg:object-right-top lg:h-full lg:w-full group-hover:opacity-75 pr-5 rounded "
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="tracking-tight text-gray-900 uppercase text-center lg:text-left text-2xl lg:text-2xl mt-5 mb-5">
              {Newpost.Title}
            </h2>
            <p className="hidden lg:block">{Newpost.SubTitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default LatestNews;
