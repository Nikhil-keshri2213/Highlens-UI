import UserAvatar from "../users/UserAvatar";
import CameraDetails from "./CameraDetails";
import Tag from "../shared/Tag";

const PostDetails = ({ post, author }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-3">{post.title}</h1>

      <UserAvatar user={author} showName />

      <img
        src={post.cover_image}
        alt={post.title}
        className="w-full max-h-[500px] object-cover rounded-xl shadow my-4"
      />

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map(tag => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        {post.content.description}
      </p>

      <CameraDetails camera={post.camera_details} />
    </div>
  );
};

export default PostDetails;
