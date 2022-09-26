import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebase";
import { getDocs, collection, Timestamp } from "firebase/firestore";
import Createpost from "./Createpost";
import { Post } from "./Post";

export interface Post {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
  date: string;
}

export const Home = () => {
  const [postLists, setPostLists] = useState<Post[] | null>(null);

  const [user] = useAuthState(auth);
  const refPosts = collection(db, "posts");
  const getPost = async () => {
    const data = await getDocs(refPosts);
    setPostLists(
      data.docs.map((post) => ({ ...post.data(), id: post.id })) as Post[]
    );
  };
  useEffect(() => {
    getPost();
  }, []);
  console.log(postLists);
  return (
    <div className="text-center mt-4">
      {user ? <div>Welcome {user.displayName}</div> : <div>Home Page</div>}
      <div>
        <h2 className="text-red-600">PAYLAŞILAN İÇERİKLER</h2>
        {postLists?.length == 0 && <div>There is no post yet!</div>}
        {postLists?.map((post, index) => (
          <div className="mt-8" key={index}>
            <Post post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
