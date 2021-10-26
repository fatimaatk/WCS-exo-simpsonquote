import React from "react";
import axios from "axios";

function QuotesSimpsons({quote}) {
    return (
      quote && (
        <div>
          <img src={quote.image} alt="Simspon Image" />
          <ul>
            <li>Name: {quote.character}</li>
            <li>
              Quote: {quote.quote}
            </li>
          </ul>
        </div>
      )
    );
  }




export default QuotesSimpsons;