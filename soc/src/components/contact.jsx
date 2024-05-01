import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="">
      <h1 className='text-transparent mb-16 bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600  font-bold text-6xl text-center '>Contact Us</h1>
      <motion.div
        className="max-w-md border group-hover:border-slate-700 w-full mx-auto rounded-lg md:rounded-2xl p-4 md:p-8 shadow-sm bg-black"
        initial={{ opacity: 0, scale: 0.9 }} // Initial animation settings
        animate={{ opacity: 1, scale: 1 }} // Animation when component appears
        transition={{ duration: 0.3 }} // Animation duration
      >
        <h2 className="font-bold text-xl text-neutral-200">
          For Sponsorships and Partnerships
        </h2>

        <form action="https://formsubmit.co/justinbenito1974@gmail.com" method="POST" className="mt-4" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2 w-full mb-4">
            <label htmlFor="email" className="text-white">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="leodas@vanakkam.com"
              className="flex p-2 h-10 w-full border-none bg-zinc-800 text-white rounded-md text-sm placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400"
            />
          </div>

          <div className="flex flex-col space-y-2 w-full mb-8">
            <label htmlFor="query" className="text-white">Message</label>
            <textarea
              id="query"
              name="message"
              placeholder="Vanakkam..."
              className="flex p-2 h-20 w-full border-none bg-zinc-800 text-white rounded-md text-sm placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400"
            ></textarea>
          </div>

          <button
            className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] transition duration-400"
            type="submit"
          >
            Send Us &rarr;
            <div className="absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-orange-300 to-transparent group-hover/btn:opacity-100 transition duration-500 opacity-0"></div>
            <div className="absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-orange-500 to-transparent group-hover/btn:opacity-100 blur-sm transition duration-500 opacity-0"></div>
          </button>
        </form>
      </motion.div>
    </div>
  );
}
