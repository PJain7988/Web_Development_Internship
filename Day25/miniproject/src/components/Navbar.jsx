import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeClass = 'text-blue-500 font-bold border-b-2 border-blue-500';

  return (
    <nav className="bg-white shadow p-4 flex gap-6 text-gray-800">
      <NavLink to="/" className={({ isActive }) => isActive ? activeClass : ''}>Home</NavLink>
      <NavLink to="/users" className={({ isActive }) => isActive ? activeClass : ''}>Users</NavLink>
    </nav>
  );
};

export default Navbar;
