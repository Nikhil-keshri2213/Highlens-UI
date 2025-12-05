const UserAvatar = ({ user, showName = false }) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={user.profile_image || "/placeholder-user.png"}
        alt={user.name}
        className="w-10 h-10 rounded-full object-cover shadow"
      />
      {showName && <span className="font-medium">{user.name}</span>}
    </div>
  );
};

export default UserAvatar;
