import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xrgnolpq");

  if (state.succeeded) {
    return (
      <p className="text-slate-600 rounded-md text-md text-center font-medium bg-slate-200/60 p-4">
        Thanks for sending a message! I'll get back to you within 24 hours!
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      id="contact"
      className="bg-gradient-to-b from-[#e6ebf1] to-slate-100 from-[70%] w-full py-4 mb-4 mt-2 px-10 rounded-xl font-fig flex flex-col items-center justify-center"
    >
      <div className="flex flex-col gap-y-2 gap-8 py-4 w-full">
        {/* <div className="grid md:grid-cols-2 w-full gap-8">
          <div className="">
            <input
              id="name"
              type="name"
              name="name"
              placeholder="your name"
              required
              className="shadow flex text-center font-normal appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="text-red-500 text-sm"
            />
          </div>
          <div className="mb-4">
            
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="sample@gmail.com"
              className="shadow text-center font-normal appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm"
            />
          </div>
        </div>

        <div className="mb-4">
           
            <textarea
                id="message"
                name="message"
                placeholder='Your Message goes here'
                required
                className="shadow appearance-none font-normal border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm"
            />
        </div> */}

        <div class="bg-[#e6ebf1] rounded-sm p-4 space-y-4 sm:space-y-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="bg-slate-200 relative bg-inherit">
              <input
                type="text"
                id="username"
                name="username"
                class="peer w-full bg-transparent h-10 rounded-lg text-slate-800 placeholder-transparent ring-2 px-2 ring-slate-400/50 focus:ring-slate-600 focus:outline-none focus:border-rose-600"
                placeholder="Your Name"
              />
              <label
                for="username"
                class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-slate-600 peer-focus:text-sm transition-all"
              >
                Name
              </label>
            </div>
            <div class="bg-slate-200 relative bg-inherit">
              <input
                type="email"
                id="email"
                name="email"
                class="peer w-full bg-transparent h-10 rounded-lg text-slate-800 placeholder-transparent ring-2 px-2 ring-slate-400/50 focus:ring-slate-600 focus:outline-none focus:border-rose-600"
                placeholder="Your Name"
              />
              <label
                for="email"
                class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-slate-600 peer-focus:text-sm transition-all"
              >
                Email
              </label>
            </div>
          </div>
          <div class="bg-[#e6ebf1] relative bg-inherit">
              <textarea
                type="text"
                id="message"
                name="message"
                class="peer w-full bg-transparent h-10 rounded-lg text-slate-800 placeholder-transparent ring-2 px-2 py-2 ring-slate-400/50 focus:ring-slate-600 focus:outline-none focus:border-rose-600"
                placeholder="Your Message"
              />
              <label
                for="message"
                class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-slate-600 peer-focus:text-sm transition-all"
              >
                Message
              </label>
            </div>

        </div>
      </div>

      <button
        disabled={state.submitting}
        type="submit"
        className="text-slate-100 px-4 py-2 rounded-md bg-[#e06d43] transition transform duration-300 hover:scale-[1.03] hover:bg-[#bf5731]"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
