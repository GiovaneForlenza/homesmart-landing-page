import React from "react";
import partner1 from "../assets/partner1.svg";
import partner2 from "../assets/partner2.svg";
import partner3 from "../assets/partner3.svg";
import partner4 from "../assets/partner4.svg";
import partner5 from "../assets/partner5.svg";
import partner6 from "../assets/partner6.svg";
import partner7 from "../assets/partner7.svg";

function Partners() {
  const partners = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
  ];
  return (
    <section className="text-center grid gap-8 place-items-center">
      <div className="grid gap-4">
        <h2 className="text-4xl font-bold text-amber-400">Our Partners</h2>
        <p className="w-full max-w-lg">
          We've partnered with hundreds of smart home brands to help you create
          a smart home that fits your needs and doesn't lock you in.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 max-w-2xl mx-auto">
        {partners.map((partner) => {
          return (
            <div className="p-4 bg-white dark:text-white shadow-md dark:shadow-xl rounded-md">
              <img src={partner} alt="" className="dark:text-white h-16 w-16" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Partners;
