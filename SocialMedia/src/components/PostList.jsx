import { useContext } from "react";
import Post from "./Post";
import { PostListFromContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetchPosts } = useContext(PostListFromContext);

  return (
    <>
      {fetchPosts && <LoadingSpinner></LoadingSpinner>}
      {!fetchPosts && postList.length === 0 && (
        <WelcomeMessage></WelcomeMessage>
      )}

      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
