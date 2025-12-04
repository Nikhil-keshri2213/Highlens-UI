import PostCard from "./PostCard";
import users from "../../data/db.json";
import posts from "../../data/db.json";

const PostList = ({ posts, users }) => {
  return (
    <div className="post-grid">
      {posts.map(post => {
        const author = users.find(user => user.user_id === post.author_id);

        return <PostCard key={post.post_id} post={post} author={author} />;
      })}
    </div>
  );
};

export default PostList;