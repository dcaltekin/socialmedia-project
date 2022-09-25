import { addDoc, collection } from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../config/firebase";
import { Post as IPost } from "./Home";

interface Props {
  post: IPost;
}

export const Post = (props: Props) => {
  const { post } = props;
  const [user] = useAuthState(auth);
  const refLikes = collection(db, "likes");
  const addLike = async () => {
    await addDoc(refLikes, {
      userId: user?.uid,
      postId: post.id,
    });
  };
  return (
    <div>
      <div>
        <p>Title: {post.title}</p>
      </div>
      <div>
        <p>Description: {post.description}</p>
      </div>
      <div>
        <p>Username: {post.username}</p>
        <button
          onClick={addLike}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          {" "}
          Like
        </button>
      </div>
    </div>
  );
};
