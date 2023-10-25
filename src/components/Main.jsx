import React from "react";
import Partners from "./Partners";
import dots from "../assets/dots.svg";
import table from "../assets/table.png";
function Main() {
  return (
    <main className="grid gap-12 sm:gap-16 md:gap-24 lg:gap-32 px-8 overflow-hidden">
      <a
        href="/"
        className="flex mx-auto my-12 py-2 px-6  focus:outline-none focus-visible:ring-4 ring-neutral-900 ring-offset-4 ring-offset-amber-400  hover:shadow-none transition-shadow bg-amber-400 dark:text-neutral-900 rounded-md shadow-xl"
      >
        <span className="mr-2">Download the app</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </a>

      <section className="relative">
        <img
          src={dots}
          alt="dots"
          className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-24 xl:-left-7"
        />
        <img
          src={dots}
          alt="dots"
          className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-24 xl:-right-7"
        />
        <h2 id="qualities" className="sr-only">
          Our Qualities
        </h2>
        <div className="container mx-auto max-w-5xl gap-12 flex flex-wrap items-start justify-center md:justify-between">
          <div className="grid gap-4 justify-items-center text-center md:flex-1">
            <div className="rounded-full border-8 border-amber-400 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-14 h-14"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold">Safe</h3>
            <p className="">
              Our products are secure and private out-of-the-box
            </p>
          </div>
          <div className="grid gap-4 justify-items-center text-center md:flex-1">
            <div className="rounded-full border-8 border-amber-400 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-14 h-14"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold">Efficient</h3>
            <p className="">Feel good about your wallet and the environment</p>
          </div>
          <div className="grid gap-4 justify-items-center text-center md:flex-1">
            <div className="rounded-full border-8 border-amber-400 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-14 h-14"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold">Proven</h3>
            <p className="">Leading the Smart Home world for 10 years</p>
          </div>
        </div>
      </section>
      <Partners />

      <section className="relative">
        <div className="flex flex-wrap-reverse gap-8 justify-center">
          <div className="flex flex-wrap flex-col gap-6 items-start lg:justify-center">
            <div className="flex flex-wrap flex-col items-start gap-2">
              <h2 className="text-4xl font-bold">Relax, you're home!</h2>
              <p className="max-w-md">
                All our supported hardware includes traditional inputs so you
                can integrate our products into your home in a way that's best
                for everyone.
              </p>
            </div>
            <a
              href="/"
              className="flex py-2 px-6  focus:outline-none focus-visible:ring-4 ring-neutral-900 ring-offset-4 ring-offset-amber-400  hover:shadow-none transition-shadow bg-amber-400 dark:text-neutral-900 rounded-md shadow-xl"
            >
              <span className="mr-2">Sign Up</span>
            </a>
          </div>
          <img src={table} alt="" />
        </div>
        <div className="absolute -bottom-6 -z-10 -right-32 aspect-square md:border-8 border-amber-400 rounded-full w-64 lg:w-96 xl:w-lg"></div>
        <div className="bg-teal-900 h-24 -mx-8 mt-12 xl:h-48 xl:absolute xl:mt-0 w-screen -bottom-8 -z-10"></div>
      </section>

    </main>
  );
}

export default Main;
