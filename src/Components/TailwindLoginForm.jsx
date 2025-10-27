import React, { useState } from "react";

function TailwindLoginForm() {
  const [details, setDetails] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!details.username || !details.password) {
      setMessage("Error: Please fill in both fields");
      return;
    }
    console.log(details);
    setMessage("Success! Form submitted.");
    setDetails({ username: "", password: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-r from-purple-400 via-pink-400 to-red-400">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md animate-fadeIn"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
          Login
        </h2>

        <label className="block mb-2 font-semibold text-gray-600">Username</label>
        <input
          type="text"
          name="username"
          value={details.username}
          onChange={inputHandler}
          className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          placeholder="Enter username"
        />

        <label className="block mb-2 font-semibold text-gray-600">Password</label>
        <input
          type="password"
          name="password"
          value={details.password}
          onChange={inputHandler}
          className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          placeholder="Enter password"
        />

        <button
          type="submit"
          className="w-full bg-linear-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:from-pink-500 hover:to-purple-500 transition-all shadow-lg"
        >
          Submit
        </button>

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

export default TailwindLoginForm;
