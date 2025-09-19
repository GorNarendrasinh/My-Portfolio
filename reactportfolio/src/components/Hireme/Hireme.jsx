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
        setTimeout(() => setIsOpen(false), 3000);
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
      {/* Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-lg transition"
      >
        💼 Hire Me
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-lg">
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white text-2xl font-bold"
            >
              &times;
            </button>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-purple-600 mb-4 text-center">
              Hire Me
            </h2>

            {/* Paragraph */}
            <section className="text-gray-800 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              <p>
                I am a passionate and results-driven{" "}
                <span className="font-semibold">Full-Stack Developer</span>{" "}
                skilled in{" "}
                <span className="font-semibold">
                  JavaScript, React.js, Python (Flask & Django), FastAPI, and
                  MySQL
                </span>
                . I excel at crafting{" "}
                <em>scalable, secure, and high-performance web applications</em>{" "}
                that bridge the gap between{" "}
                <span className="font-semibold">
                  innovative frontend experiences
                </span>{" "}
                and{" "}
                <span className="font-semibold">
                  robust backend architectures
                </span>
                . My expertise covers{" "}
                <span className="font-semibold">
                  dynamic website development, authentication systems,
                  e-commerce solutions, content management, and performance
                  optimization
                </span>
                . With a strong foundation in{" "}
                <span className="font-semibold">
                  problem-solving, clean coding practices, and continuous
                  learning
                </span>
                , I am committed to delivering{" "}
                <em>professional digital solutions</em> that not only meet
                business goals but also create a meaningful user impact.
              </p>
            </section>

            {/* Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="yourName"
                placeholder="Your Name"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                name="recruiterName"
                placeholder="Recruiter Name"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                name="salary"
                placeholder="Expected Salary"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                name="jobRole"
                placeholder="Job Role"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-lg mt-2 transition w-full"
              >
                {status === "sending" ? "Sending..." : "Submit"}
              </button>
            </form>

            {/* Status */}
            {status === "success" && (
              <p className="mt-3 text-green-600 font-semibold text-center">
                🎉 Your details have been sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 text-red-600 font-semibold text-center">
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
