import { set } from 'firebase/database';
import { useState, useEffect } from 'react';

// export function useSelectionStart(inputRef, value) {
//   const [selectionStart, setSelectionStart] = useState(0);

//   useEffect(() => {
//     function handleInput() {
//       // setSelectionStart(inputRef.current.selectionStart);
//     }

//     const inputEl = inputRef.current;
//     if (inputEl) {
//       inputEl.addEventListener('input', handleInput);
//       inputEl.addEventListener('click', handleInput);
//       inputEl.addEventListener('keyup', handleInput);
//     }

//     return () => {
//       if (inputEl) {
//         inputEl.removeEventListener('input', handleInput);
//         inputEl.removeEventListener('click', handleInput);
//         inputEl.removeEventListener('keyup', handleInput);
//       }
//     };
//   }, [value]); // Added value as a dependency

//   return [selectionStart, setSelectionStart];
// }

export function useSelection(inputRef, selectionValues=null) {
  const [selection, setSelection] = useState(selectionValues);

  useEffect(() => {
    function handleInput() {
      if (inputRef.current !== null) setSelection({start: inputRef.current.selectionStart, end: inputRef.current.selectionEnd});
      else setSelection(null);
    }

    const inputEl = inputRef.current;
    if (inputEl) {
      inputEl.addEventListener('onchange', (e) => {e.preventDefault(); handleInput();});
      inputEl.addEventListener('input', (e) => {e.preventDefault(); handleInput();});
      inputEl.addEventListener('click', handleInput);
      inputEl.addEventListener('keyup', handleInput);
    }

    return () => {
      if (inputEl) {
        inputEl.removeEventListener('input', handleInput);
        inputEl.removeEventListener('click', handleInput);
        inputEl.removeEventListener('keyup', handleInput);
      }
    };
  }
  , [selectionValues, inputRef]); // Added value as a dependency


  console.log(selectionValues.cursor)
  console.log(selection);
  return [selection, setSelection];
}