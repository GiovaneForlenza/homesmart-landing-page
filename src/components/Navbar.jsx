import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="mx-auto p-4 bg-amber-400">
      <div className="container mx-auto flex items-center justify-between">
        <a
          href="/"
          className="focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-9 z-50"
          aria-label="Go to homepage"
        >
          <img
            src="src\assets\logo.svg"
            width={200}
            className="w-48 md:2-64 lg:2-72"
            alt="Home Smart Logo"
          />
        </a>
        <button
          className="lg:hidden focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors  z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {!isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
        <div
          className={`${
            isMenuOpen ? "translate-y-0" : "-translate-y-[350px]"
          } lg:transform-none duration-700 transition-transform flex overflow-hidden lg:flex lg:flex-row lg:static lg:shadow-none lg:justify-between lg:w-full flex-col items-center gap-4 absolute right-0 left-0 top-16 bg-amber-400 text-center p-6 text-lg`}
        >
          <a
            href="/"
            className="py-1 px-6  focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            Home
          </a>
          <a
            href="/"
            className="py-1 px-6  focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors lg:mr-auto"
          >
            Contact
          </a>
          <a
            href="/"
            className="py-1 px-6 focus:outline-none focus-visible:ring-4 ring-neutral-900 ring-offset-4 ring-offset-amber-400  hover:shadow-none transition-shadow bg-teal-900 rounded-md shadow-xl"
          >
            Login
          </a>
          <a
            href="/"
            className="py-1 px-6 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
