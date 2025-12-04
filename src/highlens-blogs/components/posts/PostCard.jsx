import UserAvatar from "../users/UserAvatar";
import Tag from "../shared/Tag";

const PostCard = ({ post, author }) => {
  return (
    <div className="post-card">
      <img src={post.cover_image} alt={post.title} className="post-image" />

      <div className="post-content">
        <h2>{post.title}</h2>
        
        <p className="description">
          {post.content.description.substring(0, 120)}...
        </p>

        <div className="post-meta">
          <UserAvatar user={author} />
          <span>{new Date(post.timestamps.created_at).toDateString()}</span>
        </div>

        <div className="tags">
          {post.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;