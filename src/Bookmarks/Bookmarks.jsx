import React from "react";

export default function Bookmarks({bookmarks,times}) {
  return (
    <>
      <div className="my-2 border-2 border-purple-800 p-4 rounded-lg text-purple-800">
        Spent time on read : {times} min
      </div>
      <div>Bookmarked Blogs : {bookmarks.length}</div>
      <div className="mb-3">
        {bookmarks.map((bookmark,idx)=><h1 className="bg-slate-400 mt-4 rounded-lg p-3" key={idx}>{bookmark}</h1>)}
      </div>
    </>
  );
}
