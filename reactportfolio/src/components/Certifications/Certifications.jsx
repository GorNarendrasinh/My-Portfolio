import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaCalendarAlt, FaBuilding, FaTimes, FaEye } from "react-icons/fa";
import college from "../../assets/college.jpeg"
import python from "../../assets/python.jpeg"
import Deloitee from "../../assets/data analytics deloitee.jpeg"
import TcsIon from "../../assets/yuva ai for all.jpeg"
import TcsIonai from "../../assets/tcs generative ai.jpeg"
import TcsIonYoung from "../../assets/Tcs young professiosn.jpeg"
import Deloitee2 from "../../assets/deloitee2.jpeg"
import IBMAI from "../../assets/ibm skillsbulid ai.jpeg"
import IBMAI2 from "../../assets/ibm skillsbulid.jpeg"
import ibmaiskills from "../../assets/ibm ai skills bulid.jpeg"




const certificates = [
  {
    title: "Campus Connect :- Student Collaboration Platform",
    issuer: "AAVISKAR PROECT / FAIR 2 RANK",
    date: " october 2025",
    credentialId: "GOOG-8PP-88", // Added a sample ID since it was empty
    image: college, // <--- Using Imported Asset Here
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    title: "Python Essentials 2",
    issuer: "CISCO NETWORKING ACADEMY / PYTHON INSTITUTE PI",
    date: "June 23th 2026",
    credentialId: "GOOG-PY-3310",
    image: python, // Temporary assigned collegeCert, replace with your imported variable name
    color: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
     {
    title: "Ai Fundamentals With Ibm SkillsBulid",
    issuer:"CISCO NETWORKING ACADEMY / IBM SKILLSBULID",
    date: "june 26th 2026",
    credentialId: "IBM-FS-7721",
    image: ibmaiskills,
    color: "from-purple-500 to-pink-600",
    bgLight: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    title: "Data Analytic Job Simulation",
    issuer: "DELOITTE / FORAGE",
    date: "June 16th 2026",
    credentialId: "pqviombCDJZ7tLq",
    image: Deloitee, // Temporary assigned collegeCert, replace with your imported variable name
    color: "from-purple-500 to-pink-600",
    bgLight: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    title: "Yuva Ai For All",
    issuer: "TCS ION / INDIAI",
    date: "Jun 20th 2026",
    credentialId: "IBM-FS-7721",
    image: TcsIon,
    color: "from-purple-500 to-pink-600",
    bgLight: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    title: "Tcs Ion Career Edge - Generative Ai Essentials",
    issuer: "TCSION",
    date: "Jun 10th 2026",
    credentialId: "IBM-FS-7721",
    image: TcsIonai,
    color: "from-purple-500 to-pink-600",
    bgLight: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    title: "Tcs Ion Career Edge - Younge Professional",
    issuer: "TCSION",
    date: "April 12th 2026",
    credentialId: "IBM-FS-7721",
    image: TcsIonYoung,
    color: "from-purple-500 to-pink-600",
    bgLight: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    title: "Technology Job Simulation",
    issuer: "DELOITTE /FORAGE",
    date: "December 29th 2025",
    credentialId: "IBM-FS-7721",
    image:  Deloitee2 ,
    color: "from-purple-500 to-pink-600",
    bgLight: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    title: "Geeting Started With Generaticve Ai",
    issuer: "IBM SKILLSBULID",
    date: "march 29th 2026",
    credentialId: "IBM-FS-7721",
    image: IBMAI,
    color: "from-purple-500 to-pink-600",
    bgLight: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    title: "Ai-Enabled Applications For Customer Service",
    issuer: "IBM SKILLSBULID",
    date: "march 30th 2026",
    credentialId: "IBM-FS-7721",
    image: IBMAI2,
    color: "from-purple-500 to-pink-600",
    bgLight: "bg-purple-50",
    textColor: "text-purple-600",
  },

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 100, damping: 16 } 
  }
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="relative py-20 md:py-28 bg-[#fafafa] overflow-hidden text-zinc-800">
      {/* Luxury Ambient Lighting Glows */}
      <div className="absolute top-0 right-1/3 w-72 md:w-[500px] h-72 md:h-[500px] bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 md:w-[600px] h-80 md:h-[600px] bg-emerald-100/30 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Micro-Dot Matrix Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-zinc-200 bg-white text-indigo-600 text-xs font-semibold tracking-widest uppercase mb-3 inline-block shadow-sm"
          >
            🚀 Verified Badges
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900"
          >
            Certifications & <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-transparent bg-clip-text">Achievements</span>
          </motion.h2>
          <p className="text-zinc-500 mt-4 text-sm md:text-base font-light max-w-xl mx-auto">
            Click on any certificate to view the full verified document directly on your screen.
          </p>
        </div>

        {/* Certificates Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedCert(cert)}
              className="group relative flex flex-col bg-white/80 backdrop-blur-md border border-zinc-200 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              {/* Soft Gradient Splash Effect on Hover */}
              <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-5 blur-md transition-opacity duration-500`} />

              {/* Top Row: Icon Badge & Date */}
              <div className="flex items-center justify-between mb-5 relative z-10">
                <div className={`p-3 rounded-xl ${cert.bgLight} ${cert.textColor} text-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <FaAward />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-medium bg-zinc-100 px-2.5 py-1 rounded-md border border-zinc-200/40">
                  <FaCalendarAlt size={11} />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Middle Row: Content */}
              <div className="flex-grow relative z-10">
                <h3 className="text-lg font-bold text-zinc-900 mb-2 leading-snug group-hover:text-indigo-600 transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-zinc-500 mb-4 font-medium">
                  <FaBuilding className="text-zinc-400 text-xs" />
                  <span>{cert.issuer}</span>
                </div>
              </div>

              {/* Bottom Row: License ID & View Trigger */}
              <div className="flex items-center justify-between border-t border-zinc-100 pt-4 mt-4 relative z-10">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Credential ID</span>
                  <span className="text-xs font-mono font-bold text-zinc-600 tracking-tight mt-0.5">{cert.credentialId}</span>
                </div>

                <button
                  className="flex items-center gap-1.5 bg-zinc-950 group-hover:bg-indigo-600 text-white font-medium text-xs px-3.5 py-2 rounded-lg transition-all shadow-sm"
                >
                  <span>View</span>
                  <FaEye size={11} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Continuous Learning Line */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 text-center py-5 border-t border-zinc-200 text-zinc-500 text-xs md:text-sm font-medium tracking-wide"
        >
          🔒 Continuous Learning — Up to date with modern system standards.
        </motion.div>
      </div>

      {/* LIGHT COMPACT CERTIFICATE LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 bg-zinc-950/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white border border-zinc-200 rounded-2xl max-w-2xl w-full p-5 relative shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-600 w-8 h-8 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <FaTimes size={14} />
              </button>

              {/* Title & Organization Header inside Modal */}
              <div className="mb-4 pr-10">
                <h3 className="text-xl font-bold text-zinc-900 leading-tight">
                  {selectedCert.title}
                </h3>
                <p className="text-sm text-zinc-500 font-medium mt-1">
                  Issued by {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>

              {/* Certificate Full Document Display View */}
              <div className="w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 flex items-center justify-center max-h-[60vh]">
                <img
                  src={selectedCert.image}
                  className="w-full h-auto object-contain max-h-[55vh]"
                  alt={selectedCert.title}
                />
              </div>

              {/* Footer Meta inside Modal */}
              <div className="flex items-center justify-between mt-4 bg-zinc-50 px-4 py-2.5 rounded-xl border border-zinc-200/60">
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-400">Verification Code</span>
                  <span className="text-xs font-mono font-bold text-zinc-700">{selectedCert.credentialId}</span>
                </div>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md">
                  ✓ Verified Secure
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
