import React, {useState} from "react";
import QuotesSimpsons from "./components/quotes";
import axios from 'axios';



const sampleQuote = {
  image: "test",
  character: "test",
  quote: "test",
};


const App = () => {
  const [quote, setQuote] = useState(sampleQuote);

  const getQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
      console.log(data);
        setQuote(data[0]);
      });
  };


return (
  <div >
    <h1>Random Simpson quotes</h1>
  
    <QuotesSimpsons quote={quote}/>

    <button type="button" onClick={getQuote}>Get new quotes</button>
  </div>
);
}

export default App;
