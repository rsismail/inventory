import React, { useState, useRef, useEffect } from 'react';
import KeyboardLayout from './KeyboardLayout';
import './Keyboard.css';
import { KEYS_HAVE_FOUR_WORDS, KEYS_HAVE_THREE_WORDS, KEYS_HAVE_TWO_WORDS, SPECIAL_CHAR_KEYS, TAMIL_TO_ARWI_MAPPING, keyCodeMap, uu } from './Keyboard.constant';

const Keyboard = () => {

  const [input, setInput] = useState('');
  const [showAlert, setShowAlert] = useState({ show: false, type: 'success', message: '' });
  const handleAlert = (message) => {
    setShowAlert({ show: true, message })
    setTimeout(() => {
      setShowAlert({ show: false, message: '' });
    }, 2000);
  }

  const [isLarge, setIsLarge] = useState(false);
  const [isArwi, setIsArwi] = useState(true);
  const [cursorPosition, setCursorPosition] = useState(0);
  const inputRef = useRef(null);

  const handlePaste = (event) => {
    const { nativeEvent, target } = event;
    if (nativeEvent) {
      const { inputType } = nativeEvent;
      if (inputType === 'insertFromPaste') {
        setCursorPosition(inputRef.current.selectionStart);
        setInput(target.value);
      }
    }
  }

  const handleKeyboard = (event) => {
    const keysToExclude = ['Control', 'Dead', 'Alt', 'Meta', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp', 'Shift', 'Escape'];
    if (!keysToExclude.includes(event.key)) {
      handleKeyPress(event.key);
    }
  }

  // const handleTamilToArwiText = () => {
  //   let yy = '';
  //   uu.split('').forEach(element => {
  //     if (TAMIL_TO_ARWI_MAPPING[element]) {
  //       yy += TAMIL_TO_ARWI_MAPPING[element]
  //     } else {
  //       yy += element
  //     }
  //   });
  //   navigator.clipboard.writeText(yy);
  // }

  const handelMaximize = () => {
    setIsLarge(!isLarge);
  }


  const handleClearAll = () => {
    handleAlert('Text cleared!');
    setInput('');
  };

  const arwiToggle = () => {
    setIsArwi(!isArwi);
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

  const exportFile = () => {
    if (input) {
      const blob = new Blob([input], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'exported-file.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      URL.revokeObjectURL(url);
      handleAlert('Text exported!');
    } else {
      alert('Cannot export empty text');
    }
  };

  const updateSpecialChar = (key) => {
    const lastIndex = input.slice(-1);
    if(SPECIAL_CHAR_KEYS.includes(key) && SPECIAL_CHAR_KEYS.includes(lastIndex)) {
      return input.slice(0, -1)
    }
    return input
  }

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
            const updatedValues = splitedValue.filter((_, i) => i !== currentCursorIndex - 1)
            setInput(updatedValues.join(''));
            setCursorPosition(currentCursorIndex - 1);
          } else {
            splitedValue.splice(start, end - start);
            setInput(splitedValue.join(''));
            setCursorPosition(currentCursorIndex);
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
        let updatedKey = key;
        let incrementedCurser = 1;
        if (!isArwi && TAMIL_TO_ARWI_MAPPING[key]) {
          updatedKey = TAMIL_TO_ARWI_MAPPING[key];
        }
        if (KEYS_HAVE_TWO_WORDS.includes(key)) {
          incrementedCurser = 2;
        } else if (KEYS_HAVE_THREE_WORDS.includes(key)) {
          incrementedCurser = 3;
        } else if (KEYS_HAVE_FOUR_WORDS.includes(key)) {
          incrementedCurser = 4;
        }
        const updatedSpecialKeys = updateSpecialChar(updatedKey);
        if (inputRef.current.selectionStart === input.split('').length) {
          setCursorPosition(input.split('').length + incrementedCurser);
          setInput(updatedSpecialKeys + updatedKey)
        } else {
          setCursorPosition(inputRef.current.selectionStart + incrementedCurser);
          const addTextToSpecifiedIndex = updatedSpecialKeys.split('');
          addTextToSpecifiedIndex.splice(inputRef.current.selectionStart, 0, updatedKey);
          setInput(addTextToSpecifiedIndex.join(''))
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
    handleAlert('Text copied!');
    navigator.clipboard.writeText(input);
  }

  return (
    <div className="KeyboardPage">
      {showAlert.show && (<div className='alert'>{showAlert.message}</div>)}
      <h1 className='arwiHeading' style={{ textAlign: 'center' }}>Arwi Keyboard</h1>
      <textarea
        onChange={handlePaste}
        onKeyUp={(e) => handleKeyboard(e)}
        rows={isLarge ? 7 : 3}
        dir="rtl"
        className='keyboardInput'
        id='keyBoardTextArea'
        type="text"
        value={input}
        ref={inputRef}
      >
      </textarea>
      {console.log(input.split(''))}
      <div className='actionContainer'>
        <button className='switchToTamilBtn' onClick={arwiToggle}>Switch Keyboard</button>
        <button onClick={copyText}>Copy Text</button>
        <button onClick={exportFile}>Export</button>
        <button onClick={handleClearAll}>Clear All</button>
        <button onClick={copyText}>Undo</button>
        <button onClick={copyText}>Redo</button>
        <button onClick={handelMaximize}>{isLarge ? 'Minimize' : 'Maximize'}</button>
      </div>
      <KeyboardLayout isArwi={isArwi} onKeyPress={handleKeyPress} />
    </div>
  );
}

export default Keyboard