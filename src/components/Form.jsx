import React from "react";

import lamp from "../assets/lamp.png";
import app from "../assets/app.svg";
function Form() {
  return (
    <section className="container mx-auto px-8 overflow-hidden">
      <div className="flex flex-wrap justify-center gap-12 md:gap-6 lg:gap-20">
        <div className="md:flex-1 md:max-w-sm relative">
          <img src={lamp} alt="" className="mx-auto" />
          <a
            href="/"
            className="flex mx-auto mt-12 md:mb-12 w-max py-2 px-6  focus:outline-none focus-visible:ring-4 ring-neutral-900 ring-offset-4 ring-offset-amber-400  hover:shadow-none transition-shadow bg-amber-400 dark:text-neutral-900 rounded-md shadow-xl"
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
          <img
            src={app}
            alt=""
            width={240}
            className="hidden md:block drop-shadow-xl absolute left-1/2 -translate-x-1/2 max-w-[16rem] xl:max-w-xs"
          />
          <div className="absolute -bottom-18 -z-10 left-1/2 -translate-x-1/2 aspect-square md:border-8 border-amber-400 rounded-full w-72 lg:w-96 "></div>
        </div>

        <form
          action=""
          className="relative border-4 border-neutral-900 p-6 rounded-lg grid gap-8 md:flex-1 md:max-w-lg my-4 md:my-12 lg:my-16 bg-white dark:bg-neutral-800 w-full"
        >
          <h2 className="text-3xl  font-bold">Let's Connect!</h2>
          <div className="relative">
            <input
              type="text"
              name=""
              id="name"
              placeholder="Your name"
              className="peer w-full border-[3px] border-amber-400 rounded-md focus:ring-2 focus:ring-offset-2 dark:focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-neutral-900 dark:border-white p-2 placeholder-transparent"
            />
            <label
              htmlFor="name"
              className="text-neutral-600 text-sm font-bold uppercase absolute -top-4 left-2 -translate-y-1/2 dark:text-white peer-placeholder-shown:left-2 peer-placeholder-shown:top-6 transition-all peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 dark:peer-focus:text-white          
              dark:peer-placeholder-shown:text-neutral-900"
            >
              Your name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your name"
              className="peer w-full border-[3px] border-amber-400 rounded-md focus:ring-2 focus:ring-offset-2 dark:focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-neutral-900 dark:border-white p-2 placeholder-transparent"
            />
            <label
              htmlFor="name"
              className="text-neutral-600 text-sm font-bold uppercase absolute -top-4 left-2 -translate-y-1/2 dark:text-white peer-placeholder-shown:left-2 peer-placeholder-shown:top-6 transition-all peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 dark:peer-focus:text-white          
              dark:peer-placeholder-shown:text-neutral-900"
            >
              Your email
            </label>
          </div>
          <div className="relative">
            <textarea
              name="content"
              id="content"
              cols="20"
              rows="5"
              placeholder="How can we help?"
              className="peer w-full border-[3px] border-amber-400 rounded-md focus:ring-2 focus:ring-offset-2 dark:focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-neutral-900 dark:border-white p-2 placeholder-transparent resize-none"
            ></textarea>
            <label
              htmlFor="content"
              className="text-neutral-600 text-sm font-bold uppercase absolute -top-4 left-2 -translate-y-1/2 dark:text-white peer-placeholder-shown:left-2 peer-placeholder-shown:top-6 transition-all peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 dark:peer-focus:text-white          
              dark:peer-placeholder-shown:text-neutral-900"
              dark:text-neutral-900
              peer-placeholder-shown:left-2
              peer-placeholder-shown:top-6
            >
              How can we help?
            </label>
          </div>
          <a
            href="/"
            className="py-1 px-6 focus:outline-none focus-visible:ring-4 ring-neutral-900 ring-offset-4 ring-offset-amber-400  hover:shadow-none transition-shadow bg-neutral-900 rounded-md shadow-xl w-max"
          >
            Login
          </a>
        </form>
      </div>
    </section>
  );
}

export default Form;
