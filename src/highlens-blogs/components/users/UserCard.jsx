import UserAvatar from "./UserAvatar";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow rounded-xl p-4 flex items-center gap-4 hover:shadow-lg transition">
      <UserAvatar user={user} />

      <div>
        <h2 className="text-lg font-semibold">{user.name}</h2>
        <p className="text-gray-500 text-sm">{user.bio || "No bio available."}</p>
      </div>
    </div>
  );
};

export default UserCard;
