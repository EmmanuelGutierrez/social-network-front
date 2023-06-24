import { PostCard } from "@/components/post-card/PostCard";
import React from "react";

interface PostContainerI {
  post: any[];
}

export const PostsContainer = ({ post }: PostContainerI) => {
  /* const arrayPosts:any[][] = [];
  for (let i = 0; i < post.length; i += 8) {
    const chunk = post.slice(i, i + 8);
    arrayPosts.push(chunk);
  } */
  return (
    <div className="w-full flex flex-wrap">
      {post.map((p, i) => (
        <div
          key={i}
          className={` w-full  ${
            i === 0 || i % 8 === 0
              ? "lg:w-full"
              : i % 7 === 0
              ? "lg:w-1/3"
              : i % 6 === 0
              ? "lg:w-2/3"
              : i % 5 === 0 || i % 4 === 0
              ? "lg:w-1/2"
              : "lg:w-1/3"
          }`}
        >
          <PostCard fullWidth={i === 0 || i % 8 === 0} />
        </div>
      ))}
    </div>
  );
};

/* {restPost.map((p, i) => (
        <div
          key={i}
          className={` w-full  ${
            (i === restPost.length - 1 || i === restPost.length - 2) &&
            !(restPost.length % 3 === 0)
              ? restPost.length % 3 === 2
                ? "md:w-1/2"
                : restPost.length % 3 === 1 && i === restPost.length - 1
                ? "md:w-full"
                : "md:w-1/3"
              : "md:w-1/3"
          }`}
        >
          {i === restPost.length - 1 ? <PostInfo /> : <PostCard />}
        </div>
      ))} */
