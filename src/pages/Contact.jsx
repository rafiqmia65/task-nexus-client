import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-30 px-4 py-16 flex items-center justify-center">
      <div className="shadow-xl rounded-lg p-8 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              //   value={formData.name}
              //   onChange={handleChange}
              required
              className="mt-1 w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium ">Email Address</label>
            <input
              type="email"
              name="email"
              //   value={formData.email}
              //   onChange={handleChange}
              required
              className="mt-1 w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium ">Your Message</label>
            <textarea
              name="message"
              //   value={formData.message}
              //   onChange={handleChange}
              required
              rows="5"
              className="mt-1 w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white  hover:bg-blue-700 font-medium py-3 px-6 rounded transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
