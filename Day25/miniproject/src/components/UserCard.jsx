import React from 'react';

const UserCard = ({ user, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer p-4 bg-white rounded-lg shadow hover:bg-blue-50 transition"
    >
      <h3 className="text-xl font-semibold">{user.name}</h3>
      <p className="text-gray-600">{user.role}</p>
    </div>
  );
};

export default UserCard;
