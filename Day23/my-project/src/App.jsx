// src/App.jsx
import React, { useEffect, useState } from 'react';
import useApi from './hooks/useApi.jsx';
import { toast } from 'react-toastify';
import Loader from './component/Loader.jsx';
import UserDetails from './component/UserDetails.jsx';
import { useUser } from './store/useUser.jsx';

const App = () => {
  const [userid, setUserid] = useState(1);
  const { data, error, loading } = useApi(`https://dummyjson.com/users/${userid}`);
  const { user, setUser } = useUser(); // set user to Zustand store

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  if (loading) return <Loader />;
  if (error) return <p>An error occurred</p>;

  const handleNextUser = () => {
    setUserid((prev) => prev + 1);
    toast.success("Next button clicked", {
      position: "top-center",
      autoClose: 8000
    });
  };

  return (
    <div className='border border-red-600 p-4'>
      <h1 className='text-xl font-bold mb-4'>Hello World</h1>
      <button
        onClick={handleNextUser}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Next user
      </button>
      <UserDetails user={data} />
    </div>
  );
};

export default App;
