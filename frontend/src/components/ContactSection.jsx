import React from "react";

const ContactSection = () => {
  return (
    <>
      <section id="Contact" className="text-gray-600 body-font relative">
        <h2 className="container px-5 mx-auto text-reddish mt-20 text-3xl font-semibold">
          CONTACT US
        </h2>

        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            {/* <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31910.397605110295!2d36.87590828537089!3d-1.294721461126257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13bd95a385df%3A0xf603c3e52eabaca9!2sDonholm%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1728750750614!5m2!1sen!2ske"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{border:0, filter: grayscale(1), contrast(1.2), opacity(0.4)}}>
            </iframe> */}
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">Donholm Embakasi</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  info@eggseller.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+254 720 000000</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <div className="relative mb-4">
              <label for="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-reddish focus:ring-2 focus:ring-darkBrownish text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-reddish focus:ring-2 focus:ring-darkBrownish text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-reddish focus:ring-2 focus:ring-darkBrownish h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-greyish rounded text-lg">
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export { ContactSection };
