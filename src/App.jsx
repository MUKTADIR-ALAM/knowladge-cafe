import { useEffect, useState } from "react";
import "./App.css";
import Blogs from "./Blogs/Blogs";
import Bookmarks from "./Bookmarks/Bookmarks";
import Header from "./Header/Header";

function App() {
  const [blogs, setBlogs] = useState([]);

  const [bookmarks, setBookmarks] = useState([]);

  const [times,setTimes] = useState(0);

  const handleSetTimes = (time) => {
   setTimes(times+time);
  }

  const hanleSetBookmarks = (title) => {
    setBookmarks([...bookmarks, title]);
  };

  

  useEffect(() => {
    fetch("./blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-5">
      <Header></Header>
      <div className="grid grid-cols-3 mt-4 gap-2">
        <div className="col-span-2">
          <Blogs handleSetTimes={handleSetTimes} hanleSetBookmarks={hanleSetBookmarks} blogs={blogs}></Blogs>
        </div>
        <div className="justify-self-center">
          <Bookmarks times={times} bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </div>
  );
}

export default App;
