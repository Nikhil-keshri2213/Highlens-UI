import UserAvatar from "../users/UserAvatar";
import CameraDetails from "./CameraDetails";
import Tag from "../shared/Tag";

const PostDetails = ({ post, author }) => {
  return (
    <div className="post-details">
      <h1>{post.title}</h1>

      <UserAvatar user={author} showName />

      <img src={post.cover_image} alt={post.title} className="post-hero" />

      <div className="tags">
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      <p className="description">{post.content.description}</p>

      <CameraDetails camera={post.camera_details} />
    </div>
  );
};

export default PostDetails;