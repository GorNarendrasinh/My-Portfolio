import React, { useState } from "react";
import { FaCertificate } from "react-icons/fa";
import { motion , AnimatePresence } from "framer-motion";

const certifications = [
  {
    title: "Advance Javascripts",
    platform: "KG Coding",
    date: "Jan 2025",
    link: "public/Certifications_js.pdf", // local pdf in public
  },
  {
    title: "",
    platform: "Udemy",
    date: "Oct 2024",
    link: "https://udemy.com/certificate/python456",
  },
  {
    title: "Trending Technologies",
    platform: "Tops Technologies",
    date: "Aug 2024",
    link: "public/Technologies.pdf",
  },
   {
    title: "Stock Trading In Hindi",
    platform: "Elearnmarkets",
    date: "June 2023",
    link: "public/Stock.pdf",
  },
   {
    title: "Afffiliate Marketing",
    platform: "Great Learning Academy",
    date: "April 2023",
    link: "public/Greate.pdf",
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
              className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 flex flex-col justify-between"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
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
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                <span className="font-bold">Issued:</span> {cert.date}
              </p>

              <button
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold"
                onClick={() => setOpenCert(cert.link)}
              >
                View Certificate
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {openCert && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenCert(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-xl w-11/12 md:w-3/4 lg:w-1/2 p-4 relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-3 right-3 text-gray-700 dark:text-gray-200 text-xl font-bold"
                  onClick={() => setOpenCert(null)}
                >
                  &times;
                </button>
                <iframe
                  src={openCert}
                  className="w-full h-[600px] rounded-lg"
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
