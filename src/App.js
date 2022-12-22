import React, { useState, useEffect, useRef} from "react";
import "./styles.css";

const App = () => {
  const [quotes, setQuotes] = useState("");
  const textRef = useRef();
  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then((data) => {
      let randNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randNum]);
    });
  };

 useEffect(() => {
   getQuote();
 }, []);

  return (
    <div className="App">
      <div className="quote">
        <p> {quotes.text} </p>
        <p>Author: {quotes.author} </p>
        <div className="btnContainer">
        <button onClick = {getQuote} className="btn" > 
        Get Quote 
        </button>
        <a href={'https://twitter.com/intent/tweet?text=$[quotes.text]'}
        target="_blank" 
        rel = "noopener noreferrer"
        className="btn">
          Tweet
        </a>
        </div>
      </div>
    </div>
  );
};

export default App;
