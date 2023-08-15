import { useState } from "react";

import "./sass/style.scss";
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";

interface Quote {
  quote: string;
  author: string;
}

const transition = "all 1s";

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
};

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeColor = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
    
  };

  return (
    <div className="container" style={{ backgroundColor: randomColor, transition }}>
      <div id="quote-box">
        <div className="quote-content" style={{ color: randomColor, transition }}>
          <div className="quote">
            <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
            <h2 id="text">{quote.quote}</h2>
          </div>
          <h4 id="author">- {quote.author}</h4>
        </div>
        <div className="buttons">
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
            id="tweet-quote"
            style={{
              marginRight: "10px",
              backgroundColor: randomColor,
              transition
            }}
          >
            <FaTwitter color="white" />
          </a>
          <button
            id="new-quote"
            onClick={changeColor}
            style={{ backgroundColor: randomColor, transition }}
          >
            Change Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
