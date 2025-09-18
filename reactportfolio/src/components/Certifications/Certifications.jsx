import React, { useState } from "react";
import { FaCertificate, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const certifications = [
  {
    title: "Advance JavaScript",
    platform: "KG Coding",
    date: "Jan 2025",
    description:
      "Deep dive into modern JavaScript concepts, ES6+, DOM manipulation, and asynchronous programming.",
    link: "/Certifications_js.pdf", // ✅ NO "public/"
  },
  {
    title: "React.js ",
    platform: "Kg coding",
    date: "Oct 2024",
    description:
      "Comprehensive React.js programming course covering fundamentals to advanced concepts with hands-on projects.✅",
    link: "/react.pdf",
  },
  {
    title: "Trending Technologies",
    platform: "Tops Technologies",
    date: "Aug 2024",
    description:
      "Learn the latest trending technologies in Web Development and AI integrations.",
    link: "/Technologies.pdf",
  },
  {
    title: "Stock Trading In Hindi",
    platform: "Elearnmarkets",
    date: "June 2023",
    description:
      "Practical guide to stock trading in Hindi, including market strategies and risk management.",
    link: "/Stock.pdf",
  },
  {
    title: "Affiliate Marketing",
    platform: "Great Learning Academy",
    date: "April 2023",
    description:
      "Step-by-step guide to affiliate marketing, earning strategies, and online promotions.",
    link: "/Greate.pdf",
  },
];

const Certifications = () => {
  const [openCert, setOpenCert] = useState(null);

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-purple-600 mb-12">
          🎓 My Certifications
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 flex flex-col justify-between hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaCertificate className="text-purple-500 text-3xl" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {cert.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                <span className="font-bold">Platform:</span> {cert.platform}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                <span className="font-bold">Issued:</span> {cert.date}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                {cert.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white px-5 py-2 rounded-xl font-semibold shadow-lg transition-all duration-300"
                onClick={() => setOpenCert(cert.link)}
              >
                View Certificate
              </motion.button>
            </motion.div>
          ))}

          {/* More Coming Soon Card */}
          <motion.div
            className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center text-center opacity-90 hover:opacity-100 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="/comingSoon.png"
              alt="Coming Soon"
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              More Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Always learning, always growing.
            </p>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-500 hover:bg-purple-600 text-white text-2xl w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-300"
              onClick={() => alert("Coming Soon!")}
            >
              <FaPlus />
            </motion.button>
          </motion.div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {openCert && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenCert(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-2xl w-11/12 md:w-3/4 lg:w-1/2 p-4 relative shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-3 right-3 text-gray-700 dark:text-gray-200 text-2xl font-bold hover:text-red-500 transition-colors"
                  onClick={() => setOpenCert(null)}
                >
                  &times;
                </button>
                <iframe
                  src={openCert}
                  className="w-full h-[600px] rounded-xl"
                  title="Certificate Preview"
                ></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certifications;
