import React, { useState } from 'react'
import './RQ.css'
import X_icon from '../Assets/X-Logo.png'
import reload_icon from '../Assets/images.png'

const RandomQuote = () => {
  const quotes = [
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The government is the only institution that can take a valuable commodity, like money, and make it worthless by increasing the supply.", author: "Ludwig von Mises" },
    { text: "The most important fact about economics is that it is a human science.", author: "Friedrich Hayek" },
    { text: "Freedom is the only thing that counts, and the state is the main enemy of freedom.", author: "Murray Rothbard" },
    { text: "I'm gonna make him an offer he can't refuse.", author: "Don Vito Corleone" },
    { text: "Revenge is a dish best served cold.", author: "Don Vito Corleone" },
    { text: "Keep your friends close, but your enemies closer.", author: "Michael Corleone" },
    { text: "It's better to be feared than loved, if you cannot be both.", author: "Nicolás Maquiavelo" },
    { text: "Never make a promise you can't keep.", author: "Don Vito Corleone" },
    { text: "The value of a thing is what the buyer is willing to pay for it.", author: "Carl Menger" },
    { text: "Economics is the study of human action.", author: "Ludwig von Mises" },
    { text: "Money is not the purpose of man, but the means to achieve his ends.", author: "Ludwig von Mises" },
    { text: "The free market is the only system where individual interest can align with social interest.", author: "Friedrich Hayek" },
    { text: "Inflation is always and everywhere a monetary phenomenon.", author: "Milton Friedman" },
    { text: "The dignity of man is to be measured by the way he lives and not by the way he is treated.", author: "Pope John Paul II" },
    { text: "The best social program is a job.", author: "Ronald Reagan" },
    { text: "The problem with socialism is that you eventually run out of other people's money.", author: "Margaret Thatcher" },
    { text: "To improve is to change; to be perfect is to change often.", author: "Winston Churchill" },
  ];

  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quote.text} - ${quote.author}`)}`;


  return (
    <div id="quote-box" className='container'>
      <div className='quote-box'>
        <div id="text" className="quote">{quote.text}</div>
        <div className="line"></div>
        <div id="author" className="author">{quote.author}</div>
        <div className="icons">
          <button id="new-quote" onClick={random}>
            <img src={reload_icon} alt="Reload Quote" />
          </button>
          <a id="tweet-quote" href={twitterUrl}>
            <img src={X_icon} alt="Tweet Quote" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default RandomQuote;
