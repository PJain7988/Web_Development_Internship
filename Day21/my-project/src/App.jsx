import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [password, setPassword] = useState("a");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAlllowed, setCharAllowed] = useState(false);
  const [upperCaseAllowed, setUpperCaseAllowed] = useState(false);
  const [length, setLength] = useState(10);

  const passwordRef = useRef(null);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  const generatorPassword = () => {
    let pass = "";
    let char = "abcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) char += '0123456789';
    if (charAlllowed) char += '[];./!@#$%^&*()';
    if (upperCaseAllowed) char += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 1; i <= length; i++) {
      let characterIndex = Math.floor(Math.random() * char.length);
      pass += char.charAt(characterIndex);
    }
    setPassword(pass);
  };

  useEffect(() => {
    generatorPassword();
  }, [length, numberAllowed, charAlllowed, upperCaseAllowed]);

  console.log(password,'======================= password =================');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Password Generator
        </h2>

        <div className="flex mb-4">
          <input
            type="text"
            value={password}
            className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition"
          >
            Copy
          </button>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-bold text-gray-700 mb-1">
            Length: <span className="font-bold text-gray-900">{length}</span>
          </label>
          <input
            type="range"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="flex-1 h-2 w-full bg-blue-100 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-800">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(!numberAllowed)}
              className="text-blue-600 h-5 w-5 rounded focus:ring-blue-500"
            />
            Numbers
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={upperCaseAllowed}
              onChange={() => setUpperCaseAllowed(!upperCaseAllowed)}
              className="text-blue-600 h-5 w-5 rounded focus:ring-blue-500"
            />
            Uppercase
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={charAlllowed}
              onChange={() => setCharAllowed(!charAlllowed)}
              className="text-blue-600 h-5 w-5 rounded focus:ring-blue-500"
            />
            Special Characters
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked
              readOnly
              className="text-blue-600 h-5 w-5 rounded focus:ring-blue-500"
            />
            Lowercase (Always On)
          </label>
        </div>

        <button
          className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
          onClick={generatorPassword}
        >
          Generate New Password
        </button>
      </div>
    </div>
  );
};

export default App;