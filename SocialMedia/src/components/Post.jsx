import { useContext } from "react";
import { PostListFromContext } from "../store/post-list-store";
import { MdDelete } from "react-icons/md";

const Post = ({ post }) => {
  const { handleDeletePost } = useContext(PostListFromContext);

  return (
    <div className="card postCard" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary tag">
            {tag}
          </span>
        ))}
        <div className="alert alert-secondary reactions" role="alert">
          You have received {post.reactions.likes} reactions
        </div>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => handleDeletePost(post.id)}
        >
          <MdDelete />
        </span>
      </div>
    </div>
  );
};

export default Post;
