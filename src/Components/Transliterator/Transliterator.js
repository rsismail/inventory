import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import './Transliterator.css'; 

function App() {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("ta"); // Tamil
  const [targetLanguage, setTargetLanguage] = useState("arw"); // Arwi
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSwapped, setIsSwapped] = useState(false);
  const [copied, setCopied] = useState(false);
  const [dataSource, setDataSource] = useState("csv");

  const sourceTextRef = useRef(null);
  const translatedTextRef = useRef(null);

  useEffect(() => {
    if (sourceTextRef.current) {
      sourceTextRef.current.style.height = "auto";
      sourceTextRef.current.style.height = `${sourceTextRef.current.scrollHeight}px`;
    }
    if (translatedTextRef.current) {
      translatedTextRef.current.style.height = "auto";
      translatedTextRef.current.style.height = `${translatedTextRef.current.scrollHeight}px`;
    }
  }, [sourceText, translatedText]);

  const handleTranslate = async () => {
    setLoading(true);
    setError("");
    setTranslatedText("");

    try {
      const response = await axios.post(
        "https://web-production-99b2.up.railway.app/transliterate",
        {
          tamil_input: sourceText,
          data_source: dataSource,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setTranslatedText(response.data.output);
    } catch (err) {
      setError(err.message || "transliteration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSwapLanguages = () => {
    setIsSwapped(!isSwapped);
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
    setSourceText(translatedText);
    setTranslatedText("");
  };

  return (
    <div className="translate-container">
      <div className="header">
        <h1>Arwi Transliteration</h1>
      </div>
      <div className="input-output-container">
        <div className="input-area">
          <div className="language-select">
            {/* <select value={sourceLanguage} onChange={(e) => setSourceLanguage(e.target.value)}>
              <option value="ta">Tamil</option>
            </select> */}
            <h2>Tamil</h2>
          </div>
          <div className="output-box">
            <textarea
              ref={sourceTextRef}
              className="text-input"
              placeholder="Enter text"
              value={sourceText}
              onChange={(e) => setSourceText(e.target.value)}
            />
          </div>
        </div>
        <div className="output-area">
          <div className="language-select">
            {/* <select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
              <option value="arw">Arwi</option>
            </select> */}
            <h2>Arwi</h2>
          </div>
          <div className="output-box">
            <textarea
              ref={translatedTextRef}
              className="text-output arwi-transliteration-input"
              placeholder="transliteration"
              value={translatedText}
              readOnly
            />
            <button
              className={`copy-button ${copied ? "copied" : ""}`}
              onClick={() => {
                navigator.clipboard.writeText(translatedText);
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              }}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
      <div className="swap-area">
        {/* <button className="swap-button" onClick={handleSwapLanguages}>
            <i className="fas fa-exchange-alt"></i>
          </button> */}
        {/* <div className="data-source-select">
            <select value={dataSource} onChange={(e) => setDataSource(e.target.value)}>
              <option value="google_sheet">Google Sheet</option>
              <option value="csv">CSV</option>
            </select>
          </div> */}
        <div
          className="translate-button"
          onClick={handleTranslate}
          disabled={loading}
        >
          {loading ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
            "Transliterate"
          )}
        </div>
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default App;
