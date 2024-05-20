'use client';
import { useAuth } from '@/app/auth';
import Editor from '@/components/Editor';
import MarkdownViewer from '@/components/MarkdownViewer';
import Spinner from '@/components/Spinner';
import Comments from '@/components/Comments';
import { getTextsDoc, updateTextDoc } from '@/db/Blogs/Blogs';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

export default function Page({ params }: { params: { id: string } }) {
  const [blogDoc, setBlogDoc] = useState(null);
  const {authUser, isLoading} = useAuth();
  const router = useRouter();
  // const {id} = router.query;
  

  useEffect(() => {
    if (!isLoading && !authUser) router.push('/');
    getTextsDoc(params.id).then((data) => setBlogDoc({id: params.id, ...data}));
  }, []);


  if (!blogDoc) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <Spinner />
      </div>
    );
  }

  const {id: blogId, title, plainText: blog, comments} = blogDoc;

  return (
    <div>
      {blogDoc &&
        <div className='m-2 bg-white dark:text-white dark:bg-slate-800 rounded-lg shadow-lg'>
          <h1 className='text-3xl px-4 py-6'>{title}</h1>
          <MarkdownViewer value={blog} />
          <Comments comments={comments} blogId={blogId}/>
        </div>
      }

      {/* /blogs/[id] A specific blog's page. */}
      {!isLoading && authUser && blogDoc && 
      <div className="flex flex-col p-4 gap-6 h-screen">
        {/* <button onClick={logout}>Logout</button> */}
        {/* <Editor data={blog} onSave={async (value) => {
          // Make sure we have a document reference before updating it
          if (blog) {
            console.log('updateText', value);
            await updateTextDoc(blog.id, {plainText: value});
          }
        }} /> */}
        {blog?.plainText && <MarkdownViewer value={blog.plainText}/>}
      </div>
      }
    </div>
  )
}
