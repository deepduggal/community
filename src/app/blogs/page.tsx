'use client';
import Link from 'next/link'
import React from 'react';
import useBlogs from '@/db/Blogs/useBlogs';

export default function Blogs({}) {
  const [blogs, setBlogs] = useBlogs();
  
  return (
    <>
      <h1 className='text-5xl my-4 px-4'>All Blogs</h1>

      {/* Blog Posts */}
      {blogs?.map(blog => (
        <div key={blog.id} className='p-4 m-2 rounded-sm hover:bg-neutral-100'>
          <Link href={`/blogs/${blog.id}`} className='text-2xl hover:underline'>{blog.title}</Link>
        </div>
      ))}
    </>
  )
}
