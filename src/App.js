import React, { useState, useRef, useEffect } from 'react';
import ArabicKeyboard from './ArabicKeyboard';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  let previousCursorIndex = null;
  const handleKeyPress = (key) => {
    const splitedValue = input.split('');
    const currentCursorIndex = inputRef.current.selectionEnd;
    console.log(currentCursorIndex)
    if (key === 'Backspace' && input) {
      if (currentCursorIndex === splitedValue.length) {
        const updatedValues = splitedValue.filter((_, i) => i !== splitedValue.length - 1)
        setInput(updatedValues.join(''));
      } else {
        const updatedValues = splitedValue.filter((_, i) => i !== currentCursorIndex);
        previousCursorIndex = currentCursorIndex
        setInput(updatedValues.join(''));
      }
      return;
    }
    if (key !== "Backspace") setInput(prevInput => prevInput + key);
  };
  useEffect(() => {
    const inputElement = document.getElementById("keyBoardTextArea");
    if (previousCursorIndex !== null) {
      console.log(previousCursorIndex, 'previousCursorIndex')
      inputElement.setSelectionRange(previousCursorIndex, previousCursorIndex)
      inputElement.focus();
    }
  }, [input])
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Arwi Keyboard</h1>
      <textarea
        // onKeyUp={(e) => handleKeyPress(e.key)}
        rows={3} dir="rtl" className='keyboardInput' id='keyBoardTextArea' type="text" value={input} ref={inputRef}></textarea>
      <ArabicKeyboard onKeyPress={handleKeyPress} />
    </div>
  );
};

export default App;
