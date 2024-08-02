import React from 'react';
import './App.css';

const keys = [
  ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '٠', 'Backspace'],
  ['ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج'],
  ['ۻ', 'ص', 'ڣ', 'چ', 'ࢳ', 'ڔ', 'ࢴ', 'ڊ', 'ڍ', 'ݧ', 'ڹ'],
  ['ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك', 'ط'],
  ['ذ', 'ء', 'ؤ', 'ر', 'ى', 'ة', 'و', 'ز', 'ظ', 'د'],
  ['َ', 'ِ', 'ُ', 'ً', 'ٍ', 'ٌ', 'ْ', 'ّ', 'ٓ', 'ٰ', 'ٖ', 'ٗ', 'ࣣ'],
];

const ArwiKeyboard = ({ onKeyPress }) => {
  return (
    <div className="arabic-keyboard">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map(key => (
            <button
              key={key}
              className="key"
              onClick={() => onKeyPress(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ArwiKeyboard;