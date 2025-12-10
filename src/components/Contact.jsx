import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Contact = () => {
  const [status, setStatus] = useState(null);

  // Auto-hide after 3 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 bg-gray-950 text-white relative"
    >
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        {/* LEFT SIDE TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 flex flex-col justify-center"
        >
          <h2 className="text-5xl font-extrabold md:text-left text-center">
            Let’s Work Together
          </h2>

          <p className="text-lg text-gray-300 md:text-left text-center leading-relaxed">
            Have a project in mind? Want to collaborate? I’m always open to
            exciting ideas and new opportunities.
          </p>

          <div className="space-y-4 text-gray-200 text-lg">
            <div>
              <span className="font-semibold text-white">Phone :</span>
              <br />
              +220 5895636
            </div>

            <div>
              <span className="font-semibold text-white">Email :</span>
              <br />
              sahomamudou2003@gmail.com
            </div>

            <div>
              <span className="font-semibold text-white">Location :</span>
              <br />
              Lamin, The Gambia
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE — GLASSMORPHISM FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            space-y-6 p-8 rounded-2xl
            bg-white/10 backdrop-blur-xl
            border border-white/20
            shadow-2xl
          "
          action="https://formspree.io/f/xjkneerw"
          method="POST"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target;
            const data = new FormData(form);

            try {
              const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: { Accept: "application/json" },
              });

              if (response.ok) {
                setStatus("SUCCESS");
                form.reset();
              } else {
                setStatus("ERROR");
              }
            } catch (err) {
              setStatus("ERROR");
            }
          }}
        >
          <h3 className="text-2xl font-semibold text-center mb-4">
            Send Me a Message
          </h3>

          {/* Input styles */}
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            required
            className="
              w-full px-4 py-3 rounded-lg bg-white/10
              border border-white/20 text-white
              placeholder-gray-300
              focus:ring-2 focus:ring-blue-400 focus:outline-none
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address*"
            required
            className="
              w-full px-4 py-3 rounded-lg bg-white/10
              border border-white/20 text-white
              placeholder-gray-300
              focus:ring-2 focus:ring-blue-400 focus:outline-none
            "
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="
              w-full px-4 py-3 rounded-lg bg-white/10
              border border-white/20 text-white
              placeholder-gray-300
              focus:ring-2 focus:ring-blue-400 focus:outline-none
            "
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="
              w-full py-3 rounded-lg font-semibold text-white
              bg-gradient-to-r from-blue-600 to-purple-600
              hover:opacity-90 transition-all duration-300 shadow-lg
            "
          >
            Send Message
          </button>

          {/* ALERT BOXES */}
          <AnimatePresence>
            {status && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`
                  mt-4 p-4 rounded-lg text-center text-base font-medium
                  ${
                    status === "SUCCESS"
                      ? "bg-green-500/20 text-green-300 border border-green-500/40"
                      : "bg-red-500/20 text-red-300 border border-red-500/40"
                  }
                `}
              >
                {status === "SUCCESS"
                  ? "Message sent successfully! I will get back to you soon."
                  : "Oops! Something went wrong. Please try again."}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
