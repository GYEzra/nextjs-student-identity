"use client";

import React, { useEffect, useState } from "react";

const Map: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0">
        {isClient && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3429033686907!2d106.65205237459868!3d10.785027389364261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fc0c12178fd%3A0x89de70633dc4df1d!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOZ2_huqFpIG5n4buvIC0gVGluIGjhu41jIFRQLkhDTSBDxqEgc-G7nyBCYSBHaWEgKEhVRkxJVCBCYSBHaWEgQ2FtcHVzKQ!5e0!3m2!1svi!2s!4v1732592515250!5m2!1svi!2s"
            width="100%"
            height="100%"
            title="Google Map"
            style={{
              border: 0,
              filter: "contrast(0.6) brightness(1.2)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-gradient-to-br from-pink-500 via-purple-600 to-black rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-lg">
          <h2 className="text-white text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-300">
            We love to hear your thoughts or feedback. Please leave us a message.
          </p>
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white text-gray-700 rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Your email address"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white text-gray-700 rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <button className="text-white bg-gradient-to-r from-pink-500 to-purple-600 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-l hover:from-pink-600 hover:to-purple-500 rounded text-lg transition-transform duration-300 transform hover:scale-105">
            Submit
          </button>
          <p className="text-xs text-gray-400 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Map;
