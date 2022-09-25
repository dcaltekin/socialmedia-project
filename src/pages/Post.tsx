import {
  addDoc,
  getDocs,
  collection,
  query,
  where,
  doc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../config/firebase";
import { Post as IPost } from "./Home";

interface Props {
  post: IPost;
}

interface Like {
  userId: string;
}

export const Post = (props: Props) => {
  const { post } = props;
  const [user] = useAuthState(auth);

  const [likes, setLikes] = useState<Like[] | null>(null);
  const refLikes = collection(db, "likes");

  const likesDoc = query(refLikes, where("postId", "==", post.id));
  const addLike = async () => {
    await addDoc(refLikes, {
      userId: user?.uid,
      postId: post.id,
    });
    if (user) {
      setLikes((prev) =>
        prev ? [...prev, { userId: user?.uid }] : [{ userId: user?.uid }]
      );
    }
  };

  const getLikes = async () => {
    const data = await getDocs(likesDoc);
    setLikes(data.docs.map((post) => ({ userId: post.data().userId })));
  };

  const hasUserLiked = likes?.find((like) => like.userId === user?.uid);

  useEffect(() => {
    getLikes();
  }, []);
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
        <button onClick={addLike}>
          {hasUserLiked ? (
            <FcLike size={22} />
          ) : (
            <FcLikePlaceholder size={22} />
          )}
        </button>
        {likes && <h2>Likes: {likes.length}</h2>}
      </div>
    </div>
  );
};
