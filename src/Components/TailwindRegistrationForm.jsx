import React, { useState } from "react";

function TailwindRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setMessage("Error: Please fill in all fields");
      return;
    }

    if (!isValidEmail(email)) {
      setMessage("Error: Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setMessage("Error: Password must be at least 6 characters long");
      return;
    }

    console.log(formData);
    setMessage("Success! Registration complete.");

    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md animate-fadeIn"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
          Registration
        </h2>

        {/* Name */}
        <label className="block mb-2 font-semibold text-gray-600">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={inputHandler}
          placeholder="Enter your name"
          className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

        {/* Email */}
        <label className="block mb-2 font-semibold text-gray-600">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={inputHandler}
          placeholder="Enter your email"
          className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

        {/* Password */}
        <label className="block mb-2 font-semibold text-gray-600">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={inputHandler}
          placeholder="Enter password"
          className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-linear-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg"
        >
          Register
        </button>

        {/* Message */}
        {message && (
          <p
            className={`mt-6 text-center font-medium ${
              message.startsWith("Error") ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default TailwindRegistrationForm;
