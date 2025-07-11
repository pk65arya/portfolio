import React, { useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaUser, FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // success | error | null

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service", // <-- replace
        "template", // <-- replace
        form.current,
        "2QHv1qQq" // <-- replace
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section id="Contact" className="my-20 bg-slate-100 rounded-2xl shadow-xl p-10 text-black max-w-5xl mx-auto scroll-mt-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Get in Touch</h2>

      <div className="flex flex-col md:flex-row gap-10 animate-fadeIn">
        {/* Left Side - Contact Info */}
        <div className="flex-1 space-y-6 text-lg">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-red-400 text-xl" />
            <a href="mailto:pankaju713@gmail.com" className="hover:underline">
              pankaju713@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaGithub className="text-black-700 text-xl" />
            <a
              href="https://github.com/impku-ibm"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/impku-ibm
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaLinkedin className="text-blue-500 text-xl" />
            <a
              href="https://linkedin.com/in/pankaj-kumar-33a98519b"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/pankaj-kumar-33a98519b
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex-1 space-y-4 bg-slate-200 p-6 rounded-xl shadow-lg"
        >
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full pl-10 p-3 rounded bg-slate-210 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full pl-10 p-3 rounded bg-slate-210 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full p-3 rounded bg-slate-210 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 flex justify-center items-center gap-2 rounded bg-blue-300 hover:bg-blue-500 font-semibold"
          >
            <FaPaperPlane />
            Send Message
          </button>

          {status === "success" && (
            <p className="text-green-400 mt-2 text-sm">✔ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 mt-2 text-sm">✖ Failed to send message. Try again!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
