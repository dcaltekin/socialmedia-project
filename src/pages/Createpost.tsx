import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db, auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export interface CreateData {
  title: string;
  description: string;
  date: string;
}

function Createpost() {
  const schema = yup.object().shape({
    title: yup.string().required("You must add a title!"),
    description: yup.string().required("You must add a description!"),
  });
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateData>({
    resolver: yupResolver(schema),
  });
  const dateTime = new Date(Date.now()).toLocaleString("tr-TR", {});

  const navigate = useNavigate();
  const refPosts = collection(db, "posts");
  const onCreatePost = async (data: CreateData) => {
    await addDoc(refPosts, {
      title: data.title,
      description: data.description,
      username: user?.displayName,
      userId: user?.uid,
      date: dateTime,
    });
    navigate("/");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onCreatePost)}
        className="justify-center items-center flex flex-col gap-y-4 mt-8"
      >
        <input
          className="border"
          type="text"
          placeholder="Title"
          {...register("title")}
        />
        <p className="text-red-600">{errors.title?.message}</p>
        <textarea
          className="resize-none h-48 rounded-lg border"
          placeholder="Description"
          {...register("description")}
        />
        <p className="text-red-600">{errors.description?.message}</p>
        <button>Gönder</button>
      </form>
    </div>
  );
}

export default Createpost;
