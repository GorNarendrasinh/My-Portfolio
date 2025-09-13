import React from "react";
import { FaProjectDiagram, FaLaptopCode, FaLightbulb } from "react-icons/fa";

const achievements = [
  {
    icon: <FaLaptopCode className="text-blue-500 text-3xl" />, 
    title: "Personal Projects",
    desc: "Built a Todo App using React & Django to manage daily tasks efficiently."
  },
  {
    icon: <FaProjectDiagram className="text-green-500 text-3xl" />, 
    title: "Portfolio Website",
    desc: "Developed a personal portfolio website to showcase my skills and projects."
  },
  {
    icon: <FaLightbulb className="text-yellow-500 text-3xl" />, 
    title: "Learning & Automation",
    desc: "Completed React.js & Node.js course and created Python scripts to automate tasks."
  },
  {
    icon: <FaProjectDiagram className="text-purple-500 text-3xl" />, 
    title: "Mini Challenges",
    desc: "Created daily notes and quick notes apps to improve productivity and coding skills."
  },
  {
    icon: <FaLightbulb className="text-red-500 text-3xl" />, 
    title: "Collaboration",
    desc: "Worked with friends on small web projects and guided juniors in learning basic web development."
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">💡 My Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <div key={idx} className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition">
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
