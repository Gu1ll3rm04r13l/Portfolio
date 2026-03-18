import React, { useEffect, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import emailjs from '@emailjs/browser';
import SendButton from "./Sendbutton";

const Contact = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_iw6lx57', 'template_8q9csaf', form.current, 'KEttemTMTZI7rbx-f')
      .then(() => setIsFormSubmitted(true), (error) => console.log(error.text));
  };

  useEffect(() => {
    if (isFormSubmitted) {
      setTimeout(() => {
        setIsFormSubmitted(false);
        form.current.reset();
      }, 3000);
    }
  }, [isFormSubmitted]);

  return (
    <div id="contact" className="container m-auto mt-20 px-4 mb-20 bg-white">
      <div className="relative mb-12 flex flex-col items-center">
        <h3 className="text-4xl font-black text-gray-900 mb-2">Contact</h3>
        <div className="h-1 w-20 bg-black rounded-full"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-6xl font-black text-gray-900 mb-4 sm:text-4xl">You Need</h1>
          <h3 className="text-xl text-gray-600 max-w-sm">
            Beautiful design for your website? Leave a request.
          </h3>
          <div className="hidden md:flex mt-8">
            <BsArrowRight className="text-4xl text-black" />
          </div>
        </div>

        <div className="flex-1 w-full max-w-md">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black outline-none"
              type="email" placeholder="example@gmail.com" name="reply_to" required
            />
            <input
              className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black outline-none"
              type="text" placeholder="Ariel del Fresno" name="from_name" required
            />
            <textarea
              className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black outline-none"
              rows="4" placeholder="Write your message" name="message" required
            />
            <SendButton isSubmitted={isFormSubmitted} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;