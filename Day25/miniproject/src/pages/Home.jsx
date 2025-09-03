import React from "react";
// import { useTheme } from "../context/ThemeContext";
import { useThemeStore } from "../store/useThemeStore";
const Home = () => {
  // const {darkTheme,setDarkTheme} = useTheme();
  const {setDarkTheme} = useThemeStore();
  // console.log(darkTheme,'----------------dark theme------------------')
  return (
    <div className="p-6 text-center">
      <h1 className="text-5xl font-semibold mb-2">Welcome to the User Dashboard</h1>
      <p className="text-2xl">Explore users and view their profiles.</p>
      <button onClick={()=>setDarkTheme()} className="border-4 border-black bg-gray-500 text-white p-2 text-xl mt-2 font-bold rounded-lg hover:bg-gray-700">Change Theme</button>
    </div>
  );
};

export default Home;
