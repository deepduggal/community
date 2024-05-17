'use client';
import { useEffect, useState } from 'react';

import Editor from '@/components/Editor';
import MarkdownViewer from '@/components/MarkdownViewer';

import { auth, provider} from '@/app/firebase';

import { AuthUserProvider, useAuth } from '@/app/auth';
import { EmailAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';


const loginOrRegister = async () => {
  await googleLogin();
};

const googleLogin = async () => (await signInWithPopup(auth, provider));

const logout = async () => {
  await signOut(auth);
  // router.push('/');
};

// const Navbar = () => {
  // const router = useRouter();
//   return (
//     <nav className=''></nav>
//   );
// };

function Home() {
  const {authUser, isLoading} = useAuth();
  const router = useRouter();

  // Get the first document in the Texts collection
  // const firstTextDoc = textsCollection?.at(0);
  // console.log('firstTextDoc:\n', firstTextDoc);


  return (
    <main>
      {/* Home Page */}
      {!authUser && (
        <>
          <h1 className='text-4xl'>Markdown Blog Editor</h1>
          <div>
            <button onClick={loginOrRegister}>Login / Register</button>
          </div>
        </>
      )}

      {/* /blogs/[id] A specific blog's page. */}
      {/* {authUser && firstTextDoc && 
      <div className="flex flex-col p-4 gap-6 h-screen">
        <button onClick={logout}>Logout</button>
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


export default function HomeWithProviders() {
  return (
    <Home />
  );
}