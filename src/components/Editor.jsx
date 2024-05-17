'use client';
import React, { forwardRef, memo, useEffect, useState } from 'react';
import { useSelection } from '@/hooks/input';


/**
 * Texts Schema
 * - id: string - The unique identifier of the text document
 * - title: string - The header of the text document
 * - plainText: string - The content of the document
 * 
 */


/**
 * A component with editable text
 * @param {*} param0 
 * @returns 
 */
const Editor = function Editor({data, onSave=()=>{}}) {
  const [inputVal, setInputVal] = useState(data ?? '');

  return (
    <>
      <h1 className='text-2xl font-bold'>{data?.title}</h1>
      <textarea className='min-h-10 h-1/2 w-full p-2 text-black bg-white dark:bg-slate-800 dark:text-white rounded-md' value={data?.plainText} onChange={e => setInputVal(e.target.value)}/>
      <button className='bg-blue-500 text-white rounded-md p-2' onClick={(e) => onSave(inputVal)}>Save</button>
    </>
  )
};


export default memo(Editor);