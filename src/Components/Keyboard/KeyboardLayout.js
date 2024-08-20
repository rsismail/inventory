import React from 'react';
import './Keyboard.css';
import { ARABIC_KEYS, TAMIL_KEYS } from './Keyboard.constant';

const KeyboardLayout = (props) => {
    const { onKeyPress, isArwi } = props;
    const keys = isArwi ? ARABIC_KEYS : TAMIL_KEYS;
    const keysToChangeTheFontToEnglish = ['Backspace', 'Enter', 'Space']
    return (
      <div className="arabic-keyboard">
        {keys.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {row.map((key) => {
                return (
                    <button
                      key={key}
                      className={`key ${keysToChangeTheFontToEnglish.includes(key) ? 'keyEnglish' : ''}`}
                      onClick={() => onKeyPress(key)}
                    >
                      {key}
                    </button>
                  )
            })}
          </div>
        ))}
      </div>
    );
}
export default KeyboardLayout;
