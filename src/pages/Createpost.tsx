import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface CreateData {
  title: string;
  description: string;
}

function Createpost() {
  const schema = yup.object().shape({
    title: yup.string().required("You must add a title!"),
    description: yup.string().required("You must add a description!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateData>({
    resolver: yupResolver(schema),
  });
  const onCreatePost = (data: CreateData) => {
    console.log(data);
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
        <input type="submit" />
      </form>
    </div>
  );
}

export default Createpost;
