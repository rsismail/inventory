import React from 'react';
import './App.css';

const arabicKeys = [
  ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '٠', 'Backspace'],
  ['ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'Enter'],
  ['ۻ', 'ص', 'ڣ', 'چ', 'ࢳ', 'ڔ', 'ࢴ', 'ڊ', 'ڍ', 'ݧ', 'ڹ'],
  ['ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك', 'ط'],
  ['ذ', 'ء', 'ؤ', 'ر', 'ى', 'ة', 'و', 'ز', 'ظ', 'د'],
  ['َ', 'ِ', 'ُ', 'ً', 'ٍ', 'ٌ', 'ْ', 'ّ', 'ٓ', 'ٰ', 'ٖ', 'ٗ', 'ࣣ'],
  ['*', '#', "&", '%', '+', '-', '=', '@', '!', '^', '/', '.'],
  ['Space']
];
const tamilKeys =  [
  ['அ', 'ஆ', 'இ', 'க்', 'ங்', 'ச்', 'ஞ்', 'ட்', 'ண்'],
  ['ஈ', 'உ', 'ஊ', 'த்', 'ந்', 'ப்', 'ம்', 'ய்', 'ர்'],
  ['எ', 'ஏ', 'ஐ', 'ல்', 'வ்', 'ழ்', 'ள்', 'ற்', 'ன்'],
  ['ஒ', 'ஓ', 'ஔ', 'ஷ்', 'ஸ்', 'ஜ்', 'ஹ்', 'க்ஷ்', 'ஃ'],
];



const ArwiKeyboard = ({ onKeyPress, isArwi }) => {
  const keys = isArwi ? arabicKeys : tamilKeys;
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