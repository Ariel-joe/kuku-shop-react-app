const HeroSection = () => {
  return (
    <>
      <section
        id="Home"
        className="relative text-white hero bg-cover bg-center h-[35rem]"
        style={{ backgroundImage: 'url("/hero-section.jpg")' }}
      >
        {/* <!-- Overlay Div --> */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        {/* <!-- Container for Content --> */}
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col justify-center h-full relative z-20">
          <div className="lg:flex-grow lg:pr-24 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center justify-center">
            <h1 className="text-4xl md:text-5xl mb-3 font-extrabold">
              Savor the Flavor of Organic Chicken
            </h1>
            <p className="mb-8 text-xl">
              Our free-range, organic chicken is raised with care, ensuring a
              healthier choice for you and your family. Experience the
              difference with every bite!
            </p>
            <div className="flex justify-center">
              <button className="bg-(--reddish) text-white bg-reddish border-0 py-2 px-6 focus:outline-none hover:bg-darkBrownish rounded text-lg">
                Order Now
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-greyish rounded text-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { HeroSection };
