import { addComment } from '@/db/Blogs/Blogs';
import { set } from 'firebase/database';
import { Timestamp } from 'firebase/firestore';
import React, { useState } from 'react'

export default function Comments({ blogId, comments }) {
  const [newComment, setNewComment] = useState('');

  if (!comments) {
    return <div className='p-2'>No comments, yet.</div>
  }

  const clearAddCommentForm = () => setNewComment('');

  const onSubmit = async(e) => {
    e.preventDefault();
    if (!newComment.length) return;
    await addComment(blogId, comments, newComment);
    clearAddCommentForm();
    comments.push({ content: newComment, date: Timestamp.now()});
  };

  return (
    <div className='p-2'>
      {/* Header */}
      <h5 className='text-xl font-semibold'>Comments</h5>

      {/* List of Comments */}
      {comments.map(({ content, date }) => {
        return (
          <div className='p-4' key={crypto.randomUUID()}>
            <div className=''>{content}</div>
            <div className='font-extralight font-'>{new Date(date.seconds * 1000).toLocaleString()}</div>
          </div>
        )
      })}

      {/* Add Comments Form */}
      <form className='p-2' onSubmit={onSubmit}>
        <input className='p-2 mx-2 my-2 w-full bg-emerald-500 text-white placeholder-white focus:bg-emerald-400 transition-colors rounded-sm' type="text" placeholder="Thoughts about the post?" value={newComment} onChange={e => {setNewComment(e.target.value)}}/>
        <button type="submit" className='py-2 px-4 mx-2 font-bold bg-gray-300 hover:bg-gray-400'>Add Comment</button>
      </form>
    </div>
  )
}
