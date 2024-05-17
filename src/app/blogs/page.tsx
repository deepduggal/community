'use client';
import Link from 'next/link'
import React from 'react';
import useBlogs from '@/db/Blogs/useBlogs';

export default function Blogs({}) {
  const [blogs, setBlogs] = useBlogs();

  return (
    <>
      <h1 className='text-2xl my-4 px-4'>All blogs</h1>

      {/* Blog Posts */}
      {blogs?.map(blog => (
        <div key={blog.id}>
          <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
        </div>
      ))}
    </>
  )
}
