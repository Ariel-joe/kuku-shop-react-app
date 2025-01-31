const BlogSection = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h2 className="text-(--reddish) my-5 text-3xl font-semibold">
            BLOG POSTS
          </h2>

          <div className="flex flex-wrap -mx-4 my-8">
            {/* <!-- blog one --> */}
            <div className="py-8 px-4 lg:w-1/3 hover:cursor-pointer hover:bg-greyish delay-300">
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                  <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                    Oct
                  </span>
                  <span className="font-medium text-lg text-gray-800 title-font leading-none">
                    12
                  </span>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-(--reddish) mb-1">
                    BLOG
                  </h2>
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    Kienyeji chicken cooking tips
                  </h1>
                  <p className="leading-relaxed mb-5">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      alt="blog"
                      src={"/egg_seller-removebg-logo.png"}
                      className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-3">
                      <span className="title-font font-medium text-gray-900">
                        Kuku Shop
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- blog two --> */}

            <div className="py-8 px-4 lg:w-1/3 hover:cursor-pointer hover:bg-greyish delay-300">
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                  <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                    Oct
                  </span>
                  <span className="font-medium text-lg text-gray-800 title-font leading-none">
                    12
                  </span>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-(--reddish) mb-1">
                    BLOG
                  </h2>
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    Kienyeji chicken cooking tips
                  </h1>
                  <p className="leading-relaxed mb-5">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      alt="blog"
                      src={"/egg_seller-removebg-logo.png"}
                      className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-3">
                      <span className="title-font font-medium text-gray-900">
                        Kuku Shop
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- blog three --> */}

            <div className="py-8 px-4 lg:w-1/3 hover:cursor-pointer hover:bg-greyish delay-300">
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                  <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                    Oct
                  </span>
                  <span className="font-medium text-lg text-gray-800 title-font leading-none">
                    12
                  </span>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-(--reddish) mb-1">
                    BLOG
                  </h2>
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    Kienyeji chicken cooking tips
                  </h1>
                  <p className="leading-relaxed mb-5">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      alt="blog"
                      src={"/egg_seller-removebg-logo.png"}
                      className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-3">
                      <span className="title-font font-medium text-gray-900">
                        Kuku Shop
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { BlogSection };
