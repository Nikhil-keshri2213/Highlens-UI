const UserAvatar = ({ user, showName = false }) => {
  return (
    <div className="user-avatar">
      <img
        src={user.profile_image || "/placeholder-user.png"}
        alt={user.name}
      />
      {showName && <span>{user.name}</span>}
    </div>
  );
};

export default UserAvatar;