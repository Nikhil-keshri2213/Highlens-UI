import { useParams } from "react-router-dom";
import db from "../data/db.json";
import PostDetails from "../components/posts/PostDetails";

const PostPage = () => {
  const { id } = useParams();

  const post = db.posts.find(p => p.post_id === id);
  const author = db.users.find(u => u.user_id === post.author_id);

  return <PostDetails post={post} author={author} />;
};

export default PostPage;