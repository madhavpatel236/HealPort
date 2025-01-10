import React from "react";
import contact_img from "../assets/contact_image.png";

function Contact() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTECT <span className="text-gray-700 font-semibold">US</span>{" "}
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img className="w-full md:max-w-[360px]" src={contact_img} />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">At Home</p>
          <p className="text-gray-500"> Name: Madhav Karavadiya <br /> Tel: 9722919177 <br /> Email: madhavkaravadiya@gmail.com</p>
          <p className="font-semibold text-lg text-gray-600">Junior Web Developer </p>
        <button className="border border-black text-sm px-10 py-4 hover:bg-black hover:text-white transition-all duration-500">EXPLORE</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
