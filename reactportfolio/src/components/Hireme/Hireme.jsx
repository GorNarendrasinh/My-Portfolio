import React, { useState, useRef } from "react";

const Hireme = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const formData = new FormData(formRef.current);

      const res = await fetch("https://formspree.io/f/xldwvgpn", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        formRef.current.reset();
        setTimeout(() => setIsOpen(false), 3000); // auto-close modal after 3 sec
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div id="hireme" className="text-center py-10">
      {/* Button to open modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-lg transition"
      >
        💼 Hire Me
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl max-w-3xl w-full p-8 relative shadow-lg">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white text-2xl font-bold"
            >
              &times;
            </button>

            {/* Modal Heading */}
            <h2 className="text-3xl font-bold text-purple-600 mb-4">
              Hire Me
            </h2>

           {/* Skills Paragraph */}
<section className="max-w-3xl mx-auto p-6 text-gray-800 leading-relaxed font-sans">
  <p>
    I am a dedicated <span className="font-semibold">Full-Stack Developer</span> with hands-on expertise in{" "}
    <span className="font-semibold">
      HTML5, CSS3, JavaScript, React.js, Flask, and Django
    </span>. 
    I specialize in building <em>scalable, secure, and visually engaging web applications</em> that seamlessly combine{" "}
    <span className="font-semibold">frontend creativity</span> with{" "}
    <span className="font-semibold">backend efficiency</span>. 
    My skill set extends to <span className="font-semibold">RESTful APIs, responsive UI/UX design, database integration, and performance optimization</span>, 
    enabling me to transform complex ideas into smooth, user-friendly solutions. 
    With a strong focus on <em>problem-solving, clean code practices, and continuous learning</em>, 
    I aim to deliver digital products that not only meet business needs but also create a lasting impact.
  </p>
</section>


            {/* Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4">
              <input
                type="text"
                name="yourName"
                placeholder="Your Name"
                className="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                className="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                name="recruiterName"
                placeholder="Recruiter Name"
                className="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                name="salary"
                placeholder="Expected Salary"
                className="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                name="jobRole"
                placeholder="Job Role"
                className="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-lg mt-2 transition"
              >
                {status === "sending" ? "Sending..." : "Submit"}
              </button>
            </form>

            {/* Status messages */}
            {status === "success" && (
              <p className="mt-3 text-green-600 font-semibold">
                🎉 Your details have been sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 text-red-600 font-semibold">
                ❌ Failed to send! Please try again.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hireme;
