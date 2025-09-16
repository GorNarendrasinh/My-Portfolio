import React from "react";
import { 
  FaProjectDiagram, 
  FaLaptopCode, 
  FaLightbulb, 
  FaDatabase, 
  FaBrain 
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaLaptopCode className="text-blue-500 text-3xl" />,
    title: "E-Commerce Platform",
    desc: "Built a full-stack E-Commerce web app with backend integration and MySQL database connectivity for seamless shopping experience."
  },
  {
    icon: <FaBrain className="text-purple-500 text-3xl" />,
    title: "AI Smart Study App",
    desc: "Created an AI-powered study application to improve focus, learning efficiency, and personalized study plans."
  },
  {
    icon: <FaProjectDiagram className="text-green-500 text-3xl" />,
    title: "Portfolio Website",
    desc: "Developed my personal portfolio with React.js to showcase skills, achievements, and professional journey."
  },
  {
    icon: <FaDatabase className="text-red-500 text-3xl" />,
    title: "Backend & Databases",
    desc: "Hands-on experience in building backend APIs with Python (Flask & Django) and managing relational databases using MySQL."
  },
  {
    icon: <FaLightbulb className="text-yellow-500 text-3xl" />,
    title: "Skills in Action",
    desc: "Practical projects using JavaScript, React.js, Python, Flask, Django & MySQL — demonstrating real-world problem solving."
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          💡 My Achievements
        </h2>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
