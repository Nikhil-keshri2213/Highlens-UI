import UserAvatar from "../users/UserAvatar";
import Tag from "../shared/Tag";
import { Link } from "react-router-dom";

const PostCard = ({ post, author }) => {
  return (
    <Link
      to={`/post/${post.post_id}`}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <img
        src={post.cover_image}
        alt={post.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>

        <p className="text-gray-600 mb-3">
          {post.content.description.substring(0, 120)}...
        </p>

        <div className="flex items-center justify-between mb-3">
          <UserAvatar user={author} />
          <span className="text-sm text-gray-500">
            {new Date(post.timestamps.created_at).toDateString()}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
