import React from 'react'
import Blog from '../Blog/Blog'

export default function Blogs({blogs,hanleSetBookmarks,handleSetTimes}) {
    
  return (
    <>
    {
        blogs.length && blogs.map((blog)=>{
            return <Blog handleSetTimes={handleSetTimes} hanleSetBookmarks={hanleSetBookmarks} key={blog.id} blog={blog}></Blog>
        })
    }
   
    </>
  )
}
