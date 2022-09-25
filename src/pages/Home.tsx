import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

interface Post {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}

function Home() {
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
  return (
    <div className="text-center mt-4">
      {user ? <div>Welcome {user.displayName}</div> : <div>Home Page</div>}

      <div>
        <h2 className="text-red-600">PAYLAŞILAN İÇERİKLER</h2>
        {postLists?.map((post, index) => (
          <div key={index}>
            <div>
              <p>Title: {post.title}</p>
            </div>
            <div>
              <p>Description: {post.description}</p>
            </div>
            <div>
              <p>Username: {post.username}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
