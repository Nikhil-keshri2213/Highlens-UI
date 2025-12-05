import db from "../data/db.json";
import PostList from "../components/posts/PostList";

const Home = () => {
  return (
    <div className="pt-6">
      <PostList posts={db.posts} users={db.users} />
    </div>
  );
};

export default Home;
