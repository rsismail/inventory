export const ARABIC_KEYS = [
  ["َ", "ِ", "ُ", "ً", "ٍ", "ٌ", "ٗ", "ࣣ", "ٰ", "ٖ", "ّ", "ْ", 'Backspace'],
  ['ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'Enter'],
  ['ۻ', 'ص', 'ڣ', 'چ', 'ࢳ', 'ڔ', 'ࢴ', 'ڊ', 'ڍ', 'ݧ', 'ڹ'],
  ['ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك', 'ط'],
  ['ذ', 'ء', 'ؤ', 'ر', 'ى', 'ة', 'و', 'ز', 'ظ', 'د'],
  ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '٠'],
  ['*', '#', "&", '%', '+', '-', '=', '@', '!', '^', '/', '.'],
  ['Space']
];

export const TAMIL_KEYS = [
  ['்', 'ா', 'ி', 'ீ', 'ு', 'ூ', 'ெ', 'ே', 'ை', 'ொ', 'ோ', 'ௌ', 'Backspace'],
  ['அ', 'ஆ', 'இ', 'க', 'ங', 'ச', 'ஞ', 'ட', 'ண', 'Enter'],
  ['ஈ', 'உ', 'ஊ', 'த', 'ந', 'ப', 'ம', 'ய', 'ர',],
  ['எ', 'ஏ', 'ஐ', 'ல', 'வ', 'ழ', 'ள', 'ற', 'ன'],
  ['ஒ', 'ஓ', 'ஔ', 'ஷ', 'ஸ', 'ஜ', 'ஹ', 'க்ஷ', 'ஃ'],
  ['Space']
];

export const SPECIAL_CHAR_KEYS = [
  "َ",
  "ِ",
  "ُ",
  "ً",
  "ٍ",
  "ٌ",
  "ٗ",
  "ࣣ",
  "ٰ",
  "ٖ",
  "ّ",
  "ْ",
]
const arabicSpecialCharactersWithIndex = {
  1: 'َ',  // Fatha
  2: 'ِ',  // Kasra
  3: 'ُ',  // Damma
  4: 'ً',  // Tanwin Fatha
  5: 'ٍ',  // Tanwin Kasra
  6: 'ٌ',  // Tanwin Damma
  7: 'ٗ',  // Damma on Alef
  8: 'ٰ',  // Superscript Alef
  9: 'ٖ',  // Kasra on Alef
  10: 'ّ', // Shadda
  11: 'ْ'  // Sukun
};

export const TAMIL_TO_ARWI_MAPPING = {
  'அ': 'اَ',
  'ஆ': 'اٰ',
  'இ': 'اِ',
  'ஈ': 'اِيْ',
  'உ': 'اُ',
  'ஊ': 'اُوْ',
  'எ': 'اࣣ',
  'ஏ': 'اࣣيْ',
  'ஐ': 'اَيْ',
  'ஒ': 'اٗ',
  'ஓ': 'اٗوْ',
  'ஔ': 'اَوْ',
  'க': 'كَ',
  'ங': 'ࢳَ',
  'ச': 'چَ',
  'ஞ': 'ݧَ',
  'ட': 'ڊَ',
  'ண': 'ڹَ',
  'த': 'تَ',
  'ந': 'نَ',
  'ப': 'ڣَ',
  'ம': 'مَ',
  'ய': 'يَ',
  'ர': 'ڔَ',
  'ல': 'لَ',
  'வ': 'وَ',
  'ழ': 'ۻَ',
  'ள': 'صَ࣭',
  'ற': 'رَ',
  'ன': 'نَ',
  'ஷ': 'شَ',
  'ஸ': 'سَ',
  'ஜ': 'جَ',
  'ஹ': 'هَ',
  '்': 'ْ',
  'ா': 'ٰ',
  'ி': 'ِ',
  'ீ': 'ِيْ',
  'ு': 'ُ',
  'ூ': 'ُوْ',
  'ெ': 'ࣣ',
  'ே': 'ࣣيْ',
  'ை': 'َيْ',
  'ொ': 'ٗ',
  'ோ': 'ٗوْ',
  'ௌ': 'َوْ',
  'ஃ': 'اَكْ',
  'க்ஷ': 'كْشَ',
};

export const KEYS_HAVE_TWO_WORDS = [
  'அ', 'ஆ', 'இ', 'ஈ', 'உ', 'எ', 'ஒ', 'ே', 'ை', 'ோ', 'ௌ', 'க', 'ங', 'ச', 'ஞ',
  'ட', 'ண', 'த', 'ந', 'ஹ', 'ப', 'ம', 'ய', 'ர', 'ல', 'வ', 'ழ', 'ற', 'ன', 'ீ', 'ூ',
   'ே', 'ை', 'ோ', 'ௌ', 'ஷ', 'ஸ', 'ஜ', 
];

export const KEYS_HAVE_FOUR_WORDS = [
  'ஃ',
  'க்ஷ',
  'ஐ',
  'ஔ',
  'ஏ',
  'ஊ',
  'ஓ',
];

export const KEYS_HAVE_THREE_WORDS = [
  'ள',
];

export const keyCodeMap = {
  8: 'Backspace',
  9: 'Tab',
  13: 'Enter',
  16: 'Shift',
  17: 'Control',
  18: 'Alt',
  19: 'Pause',
  20: 'CapsLock',
  27: 'Escape',
  32: ' ',
  33: 'PageUp',
  34: 'PageDown',
  35: 'End',
  36: 'Home',
  37: 'ArrowLeft',
  38: 'ArrowUp',
  39: 'ArrowRight',
  40: 'ArrowDown',
  45: 'Insert',
  46: 'Delete',
  48: '0',
  49: '1',
  50: '2',
  51: '3',
  52: '4',
  53: '5',
  54: '6',
  55: '7',
  56: '8',
  57: '9',
  65: 'a',
  66: 'b',
  67: 'c',
  68: 'd',
  69: 'e',
  70: 'f',
  71: 'g',
  72: 'h',
  73: 'i',
  74: 'j',
  75: 'k',
  76: 'l',
  77: 'm',
  78: 'n',
  79: 'o',
  80: 'p',
  81: 'q',
  82: 'r',
  83: 's',
  84: 't',
  85: 'u',
  86: 'v',
  87: 'w',
  88: 'x',
  89: 'y',
  90: 'z',
  91: 'Meta', // Left Windows key / Left Command key
  92: 'Meta', // Right Windows key / Right Command key
  93: 'ContextMenu',
  96: '0', // Numpad 0
  97: '1', // Numpad 1
  98: '2', // Numpad 2
  99: '3', // Numpad 3
  100: '4', // Numpad 4
  101: '5', // Numpad 5
  102: '6', // Numpad 6
  103: '7', // Numpad 7
  104: '8', // Numpad 8
  105: '9', // Numpad 9
  106: '*', // Numpad Multiply
  107: '+', // Numpad Add
  109: '-', // Numpad Subtract
  110: '.', // Numpad Decimal Point
  111: '/', // Numpad Divide
  112: 'F1',
  113: 'F2',
  114: 'F3',
  115: 'F4',
  116: 'F5',
  117: 'F6',
  118: 'F7',
  119: 'F8',
  120: 'F9',
  121: 'F10',
  122: 'F11',
  123: 'F12',
  144: 'NumLock',
  145: 'ScrollLock',
  186: ';', // Semicolon
  187: '=', // Equal Sign
  188: ',', // Comma
  189: '-', // Dash
  190: '.', // Period
  191: '/', // Forward Slash
  192: '`', // Grave Accent
  219: '[', // Open Bracket
  220: '\\', // Backslash
  221: ']', // Close Bracket
  222: '\'' // Single Quote
};
