import { createContext, useEffect, useReducer, useState } from "react";

export const PostListFromContext = createContext({
  postList: [],
  handleAddPost: () => {},
  fetchPosts: true,
  handleDeletePost: () => {},
});

export const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetchPosts, setFetchPosts] = useState(true);

  const handleAddPost = (post) => {
    const addPostAction = {
      type: "ADD_POST",
      payload: post,
    };
    dispatchPostList(addPostAction);
  };

  const handleAddInitialPosts = (posts) => {
    const addInitialPostsAction = {
      type: "ADD_INITIAL_POSTS",
      payload: posts,
    };
    dispatchPostList(addInitialPostsAction);
  };

  const handleDeletePost = (postId) => {
    const deletePostAction = {
      type: "DELETE_POST",
      payload: {
        id: postId,
      },
    };
    dispatchPostList(deletePostAction);
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        handleAddInitialPosts(data.posts);
        setFetchPosts(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostListFromContext.Provider
      value={{
        postList: postList,
        handleAddPost: handleAddPost,
        fetchPosts: fetchPosts,
        handleDeletePost: handleDeletePost,
      }}
    >
      {children}
    </PostListFromContext.Provider>
  );
};

const postListReducer = (currValue, action) => {
  let newPostList = currValue;
  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currValue];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload;
  } else if (action.type === "DELETE_POST") {
    newPostList = currValue.filter((post) => post.id !== action.payload.id);
  }
  return newPostList;
};
