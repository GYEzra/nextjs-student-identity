import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col ">
      <footer className="footer p-10 text-gray-300">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-gray-300">
                Enter your email address
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item text-black"
              />
              <button className="btn bg-zinc-800 text-white join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <footer className="w-11/12 mx-auto footer border-t border-zinc-800 px-10 text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </footer>
    </div>

    // <footer className="text-gray-600 body-font bg-gray-400 ">
    //   <div className="container px-5 py-24 mx-auto">
    //     <div className="flex flex-wrap md:text-left text-center order-first">
    //       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
    //         <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
    //           CATEGORIES
    //         </h2>
    //         <nav className="list-none mb-10">
    //           <li>
    //             <a className="text-gray-300 hover:text-white">First Link</a>
    //           </li>
    //           <li>
    //             <a className="text-gray-300 hover:text-white">Second Link</a>
    //           </li>
    //           <li>
    //             <a className="text-gray-300 hover:text-white">Third Link</a>
    //           </li>
    //           <li>
    //             <a className="text-gray-300 hover:text-white">Fourth Link</a>
    //           </li>
    //         </nav>
    //       </div>
    //       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
    //         <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
    //           RESOURCES
    //         </h2>
    //         <nav className="list-none mb-10">
    //           <li>
    //             <a className="text-gray-300 hover:text-white">Blog</a>
    //           </li>
    //           <li>
    //             <a className="text-gray-300 hover:text-white">About Us</a>
    //           </li>
    //           <li>
    //             <a className="text-gray-300 hover:text-white">Contact</a>
    //           </li>
    //           <li>
    //             <a className="text-gray-300 hover:text-white">Privacy Policy</a>
    //           </li>
    //         </nav>
    //       </div>
    //       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
    //         <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
    //           SUBSCRIBE
    //         </h2>
    //         <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
    //           <div className="relative w-full max-w-xl sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
    //             <label
    //               htmlFor="footer-field"
    //               className="leading-7 text-sm text-gray-300"
    //             >
    //               Your Email
    //             </label>
    //             <input
    //               type="email"
    //               id="footer-field"
    //               name="footer-field"
    //               className="w-600 bg-gray-800 rounded-lg border-2 bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-base outline-none text-gray-100 py-2 px-5 leading-8 transition-colors duration-200 ease-in-out"
    //             />
    //           </div>
    //           <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">
    //             Subscribe
    //           </button>
    //         </div>
    //         <p className="text-gray-400 text-sm mt-2 md:text-left text-center">
    //           Stay updated with our latest news and offers.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="text-gray-600 body-font">
    //     <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
    //       <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    //         </svg>
    //         <span className="ml-3 text-xl">Tailblocks</span>
    //       </a>
    //       <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">
    //         © 2024 Tailblocks —
    //         <a
    //           href="https://twitter.com/knyttneve"
    //           className="text-gray-500 ml-1"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           @knyttneve
    //         </a>
    //       </p>
    //       <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    //         <a className="text-gray-400 hover:text-white">
    //           <svg
    //             fill="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             className="w-5 h-5"
    //             viewBox="0 0 24 24"
    //           >
    //             <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    //           </svg>
    //         </a>
    //         <a className="ml-3 text-gray-400 hover:text-white">
    //           <svg
    //             fill="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             className="w-5 h-5"
    //             viewBox="0 0 24 24"
    //           >
    //             <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    //           </svg>
    //         </a>
    //         <a className="ml-3 text-gray-400 hover:text-white">
    //           <svg
    //             fill="none"
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             className="w-5 h-5"
    //             viewBox="0 0 24 24"
    //           >
    //             <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    //             <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
    //           </svg>
    //         </a>
    //         <a className="ml-3 text-gray-400 hover:text-white">
    //           <svg
    //             fill="currentColor"
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="0"
    //             className="w-5 h-5"
    //             viewBox="0 0 24 24"
    //           >
    //             <path
    //               stroke="none"
    //               d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
    //             ></path>
    //             <circle cx="4" cy="4" r="2" stroke="none"></circle>
    //           </svg>
    //         </a>
    //       </span>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
