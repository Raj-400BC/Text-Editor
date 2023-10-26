import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [btnTextUpper, setBtnTextUpper] = useState("Convert To Uppercase");
  const [btnTextLower, setBtnTextLower] = useState("Convert To Lowercase");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toUpperCase = () => {
    if (!text.trim()) {
      alert("Text Area Is Empty");
      return;
    }

    const updated = text.toUpperCase();
    setBtnTextLower("Convert To Lowercase");
    setBtnTextUpper("Converted!");
    setText(updated);
  };

  const toLowerCase = () => {
    if (!text.trim()) {
      alert("Text Area Is Empty");
      return;
    }

    const updated = text.toLowerCase();
    setBtnTextLower("Converted!");
    setBtnTextUpper("Convert To Uppercase");
    setText(updated);
  };

  const clearText = () => {
    if (!text.trim()) {
      alert("Text Area Is Empty");
      return;
    }

    setText("");
    setBtnTextUpper("Convert To Uppercase");
    setBtnTextLower("Convert To Lowercase");
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`text-form  p-4 ${isDarkTheme ? "bg-gray-800 text-white" : "bg-gray-100"} rounded-lg shadow-md`}>
      <h1 className={`text-2xl font-semibold mb-4 ${isDarkTheme ? "text-white" : "text-gray-900"}`}>{props.heading}</h1>
      <textarea
        rows="8"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Write Here"
        className={`w-full p-2 rounded-lg border ${isDarkTheme ? "border-gray-600" : "border-gray-300"} focus:outline-none ${isDarkTheme ? "text-white" : "text-gray-900"}`}
      />
      <div className="flex space-x-2">
        <button
          onClick={toUpperCase}
          className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded ${isDarkTheme ? "bg-blue-900" : "bg-blue-500"}`}
        >
          {btnTextUpper}
        </button>
        <button
          onClick={toLowerCase}
          className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded ${isDarkTheme ? "bg-blue-900" : "bg-blue-500"}`}
        >
          {btnTextLower}
        </button>
        <button
          onClick={clearText}
          className={`bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded ${isDarkTheme ? "bg-red-900" : "bg-red-500"}`}
        >
          Clear
        </button>
        <button
          onClick={toggleTheme}
          className={`bg-yellow-500 hover:bg-yellow-700 text-white py-2 px-4 rounded ${isDarkTheme ? "bg-yellow-900" : "bg-yellow-500"}`}
        >
          Change Theme
        </button>
      </div>
      <div className="text-summary mt-4">
        <h2 className={`text-xl font-semibold ${isDarkTheme ? "text-white" : "text-gray-900"}`}>Your Text Summary</h2>
        <p className={isDarkTheme ? "text-white" : "text-gray-900"}>
          Total Words: {text.split(/\s+/).filter(Boolean).length} &middot; Total Characters: {text.length}
        </p>
        <div className={`preview ${isDarkTheme ? "bg-gray-700" : "bg-gray-200"} p-2 rounded mt-2 ${isDarkTheme ? "text-white" : "text-gray-900"}`}>
          {text}
        </div>
      </div>
    </div>
  );
}
