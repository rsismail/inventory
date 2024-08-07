import React, { useState, useRef, useEffect } from 'react';
import ArabicKeyboard from './ArabicKeyboard';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [isLarge, setIsLarge] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(0);
  const inputRef = useRef(null);

  const handlePaste = (event) => {
    const { nativeEvent, target } = event;
    if(nativeEvent) {
      const { inputType } = nativeEvent;
      if(inputType === 'insertFromPaste') {
        setCursorPosition(inputRef.current.selectionStart);
        setInput(target.value);
      }
    }
  }

  const handleKeyboard = (key) => {
    const keysToExclude = ['Control', 'Dead', 'Alt', 'Meta', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp', 'Shift', 'Escape'];
    if(!keysToExclude.includes(key)) {
      handleKeyPress(key);
    }
  }

  const handelMaximize = () => {
    setIsLarge(!isLarge);
  }

  const handleClearAll = () => {
    setInput('');
  };

  const addSpaceAtCursor = () => {
    const textField = inputRef.current;
    if (textField) {
      const start = textField.selectionStart;
      const end = textField.selectionEnd;
      const newValue = input.substring(0, start) + ' ' + input.substring(end);
      setInput(newValue);
      setCursorPosition(start + 1);
    }
  };

  const handleKeyPress = (key) => {
    const splitedValue = input.split('');
    const currentCursorIndex = inputRef.current.selectionStart;
    switch (key) {
      case 'Backspace':
        if (input) {
          const start = inputRef.current.selectionStart;
          const end = inputRef.current.selectionEnd;
          console.log({ start, end })
          if (start === end) {
            setCursorPosition(currentCursorIndex - 1);
            const updatedValues = splitedValue.filter((_, i) => i !== currentCursorIndex - 1)
            setInput(updatedValues.join(''));
          } else {
            splitedValue.splice(start, end - start);
            setInput(splitedValue.join(''));
          }
        }
        return;
      case 'Space':
        addSpaceAtCursor();
        return;
      case 'Enter':
        setCursorPosition(inputRef.current.selectionEnd + 1);
        setInput(prevInput => prevInput + '\n')
        return;
    
      default:
        if(inputRef.current.selectionStart === input.split('').length) {
          setCursorPosition(input.split('').length + 1);
          setInput(prevInput => prevInput + key)
        } else {
          setCursorPosition(inputRef.current.selectionStart + 1);
          setInput(prevInput => {
            const v = prevInput.split('');
            v.splice(inputRef.current.selectionStart, 0, key);
            return v.join('');
          })
        }
        return;
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
      inputRef.current.focus();
    }
  }, [input]);


  const copyText = () => {
    navigator.clipboard.writeText(input);
  }


  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Arwi Keyboard</h1>
      <textarea
        onChange={handlePaste}
        onKeyUp={(e) => handleKeyboard(e.key)}
        rows={isLarge ? 7 : 3} dir="rtl" className='keyboardInput' id='keyBoardTextArea' type="text" value={input} ref={inputRef}></textarea>
        <div className='actionContainer'>
          <button onClick={copyText}>Copy Text</button>
          <button onClick={copyText}>Export</button>
          <button onClick={handleClearAll}>Clear All</button>
          <button onClick={copyText}>Undo</button>
          <button onClick={copyText}>Redo</button>
          <button onClick={handelMaximize}>{isLarge ? 'Minimize' : 'Maximize'}</button>
        </div>
      <ArabicKeyboard onKeyPress={handleKeyPress} />
    </div>
  );
};

export default App;
