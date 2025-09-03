import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';
import UserProfile from './pages/UserProfile';
// import { ThemeProvider } from './context/ThemeContext';
import { useThemeStore } from './store/useThemeStore';

const App = () => {
  // const [darkTheme,setTheme] = React.useState(true);
  // const setDarkTheme = () =>{
  //   setTheme((prev) => !prev);  // negation the previous value
  // }
      const {darkTheme} = useThemeStore();
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* <ThemeProvider value={{darkTheme,setDarkTheme}}> */}
        <div className={`h-screen ${darkTheme ? "bg-white" : "bg-black text-white"}`}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserProfile />} />
          </Routes>
        </Router>
        </div>
      {/* </ThemeProvider> */}
    </div>
  );
};

export default App;
