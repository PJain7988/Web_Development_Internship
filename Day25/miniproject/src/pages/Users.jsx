import { useNavigate } from 'react-router';
import UserCard from '../components/UserCard';
const users = [
  { id: '101', name: 'Priya Jain', role: 'Developer' },
  { id: '102', name: 'Rohan Kumar', role: 'Designer' },
  { id: '103', name: 'Anjali Sharma', role: 'Manager' },
];

const Users = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">User List</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onClick={() => navigate(`/users/${user.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
