import React from "react";
import logo from "../assets/logo.jpg";

function Footer() {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ----- left section ------ */}
        <div>
          <p className="text-2xl w-40 lg:text-4xl mb-5 font-bold text-primary">
            {" "}
            HealPortal{" "}
          </p>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatumLorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatumLorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, voluptatum.
          </p>
        </div>

        {/* ----- middle section ------- */}
        <div className="mt-2">
          <p className="text-xl font-medium mb-5">COMPONY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contect us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* ----- right section ------ */}
        <div className="mt-2">
          <p className="text-xl font-medium mb-5"> GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li> +91 9722919177</li>
            <li>madhavkaravadiya@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* ------- Copyright section ------ */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center w-full">
          Copyright @ 2023. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
