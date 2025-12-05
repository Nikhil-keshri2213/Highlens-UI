import { useParams } from "react-router-dom";
import db from "../data/db.json";
import UserCard from "../components/users/UserCard";
import PostList from "../components/posts/PostList";

const UserProfile = () => {
  const { id } = useParams();

  const user = db.users.find(u => String(u.user_id) === id);
  const userPosts = db.posts.filter(p => p.author_id === id);

  if (!user) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-semibold">User not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <UserCard user={user} />

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Posts by {user.name}
      </h2>

      <PostList posts={userPosts} users={db.users} />
    </div>
  );
};

export default UserProfile;
