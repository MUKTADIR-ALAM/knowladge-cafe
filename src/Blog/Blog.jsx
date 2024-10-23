import React from "react";
import { FaBookmark } from "react-icons/fa";

export default function Blog({ blog,hanleSetBookmarks,handleSetTimes }) {
  const {
    title,
    author,
    author_img,
    id,
    hashtags,
    posted_date,
    reading_time,
    img,
  } = blog;
  return (
    <div className="mt-4">
      <img src={img} alt="" />
      <div className="flex justify-between mt-4">
        <div className="flex items-center gap-4">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h1>{author}</h1>
            <h1>{posted_date}</h1>
          </div>
        </div>
        <div>
          <small className="flex items-center">
            {reading_time} min read{" "}
            <button onClick={()=>hanleSetBookmarks(title)}>
              <FaBookmark />
            </button>
          </small>
        </div>
      </div>
      <h1>{title}</h1>
      <div className="flex gap-2">
        {hashtags.map((hashtag,idx) => (
          <h1 key={idx}>#{hashtag}</h1>
        ))}
      </div>
      <button onClick={()=>handleSetTimes(reading_time)} className="underline text-purple-800">Mark as Read</button>
    </div>
  );
}
