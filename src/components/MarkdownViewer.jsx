import React from 'react';
import {parse} from 'marked';

// This is ONLY safe because the output HTML
// is shown to the same user, and because you
// trust this Markdown parser to not have bugs.
export default function MarkdownViewer({value, className=''}) {
  if (typeof value !== 'string') throw new Error('Expected a string: ', value);
  
  const markdown = parse(
    // remove the most common zerowidth characters from the start of the file
    value.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/,"")
  );

  return (
    <div className={`h-1/2 p-2 text-black bg-white dark:text-white dark:bg-slate-800 rounded-lg overflow-y-scroll ${className}`} dangerouslySetInnerHTML={{__html: markdown}}></div>
  )
}
