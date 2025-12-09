import PostCard from "./PostCard";

const PostList = ({ posts, users }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {posts?.map(post => {
        const author = users.find(u => u.user_id === post.user_id);
        return <PostCard key={post.post_id} post={post} author={author} />;
      })}
    </div>
  );
};

export default PostList;