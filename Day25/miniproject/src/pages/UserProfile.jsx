import { useParams, useNavigate } from 'react-router-dom';

const users = {
  '101': { name: 'Priya Jain', role: 'Developer', bio: 'Passionate coder from Geeta University.' },
  '102': { name: 'Rohan Kumar', role: 'Designer', bio: 'UI/UX expert with a love for minimalism.' },
  '103': { name: 'Anjali Sharma', role: 'Manager', bio: 'Project manager who loves teamwork.' },
};

const UserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users[id];

  if (!user) return <p className="p-6">User not found.</p>;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
      <p className="text-gray-700 mb-2">{user.role}</p>
      <p className="text-sm text-gray-600 mb-4">{user.bio}</p>
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go Back
      </button>
    </div>
  );
};

export default UserProfile;
