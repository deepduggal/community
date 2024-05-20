'use client';
import { useEffect, useState } from 'react';

import Editor from '@/components/Editor';
import MarkdownViewer from '@/components/MarkdownViewer';

import { auth, provider} from '@/app/firebase';

import { AuthUserProvider, useAuth } from '@/app/auth';
import { EmailAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const loginOrRegister = async () => {
  await googleLogin();
};

const googleLogin = async () => (await signInWithPopup(auth, provider));

// const logout = async () => {
//   await signOut(auth);
//   // router.push('/');
// };

export default function Home() {
  const {authUser, isLoading} = useAuth();
  const router = useRouter();

  // Get the first document in the Texts collection
  // const firstTextDoc = textsCollection?.at(0);
  // console.log('firstTextDoc:\n', firstTextDoc);


  return (
    <main>
      {/* Home Page */}
        <div className='p-2 md:p-4'>
          <h1 className='text-7xl md:text-9xl font-thin my-6'>Markdown Blog Editor</h1>
          <div>
            {!authUser && <button onClick={loginOrRegister}>Login / Register</button>}
            {authUser && <Link href='/blogs' className='text-5xl font-bold'>Go to Blogs <span className="material-symbols-outlined">
arrow_forward
</span></Link>}
          </div>
        </div>

      {/* /blogs/[id] A specific blog's page. */}
      {/* {authUser && firstTextDoc && 
   </svg>   <div className="flex flex-col p-4 gap-6 h-screen">
        <butt</svg>on onClick={logout}>Logout</button>
        <Editor data={firstTextDoc} onSave={async (value) => {
          // Make sure we have a document reference before updating it
          if (firstTextDoc) {
            console.log('updateText', value);
            await updateTextDoc(firstTextDoc?.id, {plainText: value});
          }
        }} />
        {firstTextDoc?.plainText && <MarkdownViewer value={firstTextDoc.plainText}/>}
      </div>
      } */}
    </main>
  );
}