import PostList from "./components/posts/PostList";
import NavBar from "../highlens-blogs/components/layout/Navbar";
import Footer from "../highlens-blogs/components/layout/Footer";
import data from "../highlens-blogs/data/blog-data.json";

const Blog_App = () => {
  const posts = data.posts;
  const users = data.users;

  return (
    <div className="max-w-6xl mx-auto mt-4">
      <div>
        <NavBar />
      </div>
      <h1 className="text-xl font-bold text-gray-100 mt-18">Latest Posts</h1>
      <PostList posts={posts} users={users} />
      <Footer />
    </div>
  );
};

export default Blog_App;
