import avtar from "../../assets/icon/image.png";

const UserAvatar = ({ user, showName = false }) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={user?.profile_image || avtar}
        alt={user?.name || "User Avatar"}
        className="w-10 h-10 rounded-full object-cover shadow"
      />
      {showName && <span className="font-medium text-black">{user?.name}</span>}
    </div>
  );
};

export default UserAvatar;