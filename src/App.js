import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Keyboard from './Components/Keyboard';
import Transliterator from './Components/Transliterator';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="arwi-transliterator" element={<Transliterator />} />
          <Route path="arwi-keyboard" element={<Keyboard />} />
          <Route path="*" element={<Navigate to="arwi-transliterator" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
