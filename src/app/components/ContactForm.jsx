import React from "react";

function ContactForm() {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flex justify-center">
        <h2 className="text-4xl text-white font-bold mb-6">
          Contact <span className="text-blue-600">Me</span>
        </h2>
      </div>
      <div className="w-full max-w-2xl p-8 rounded-lg">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-[#2a3342] text-white placeholder-gray-500 p-4 rounded-md outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="bg-[#2a3342] text-white placeholder-gray-500 p-4 rounded-md outline-none"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="bg-[#2a3342] text-white placeholder-gray-500 p-4 rounded-md outline-none"
          />
          <input
            type="text"
            placeholder="Email Subject"
            className="bg-[#2a3342] text-white placeholder-gray-500 p-4 rounded-md outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="bg-[#2a3342] text-white placeholder-gray-500 p-4 rounded-md outline-none md:col-span-2"
            rows="4"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition duration-300 ease-in-out md:col-span-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
