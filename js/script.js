/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
const quotes = [
  {
      quote: 'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
      source:'Thomas A. Edison',
      year:'1903'  
  },
  {
      quote: 'Do not fear failure but rather fear not trying.',
      source:'Roy T. Bennett',
      citation: 'The Light in the Heart',
      year: '2020'
  },
  {
      quote: 'Life has no remote....get up and change it yourself!',
      source:'Mark A. Cooper',
      citation: 'Operation Einstein' ,
      year:'2012'
  },
  {
      quote: 'Anyone can grow into something beautiful.',
      source:' Vanessa Diffenbaugh',
      citation: 'The Language of Flowers',
      year:'2011'    
  },
  {
      quote: 'The purpose of our lives is to be happy.',
      source:'Dalai Lama',    
  }];
  
  /***
  * `getRandomQuote` function
  ***/
  function getRandomQuote() {
      var Qarraylenght = quotes.length;
      var randomNumber = Math.floor(Math.random() * Qarraylenght);
      // returning random quote object
      return quotes[randomNumber];
  
  }
  
  /***
   * `printQuote` function
  ***/
  function printQuote(){
   var quoteObj = getRandomQuote();
   var htmlString = `<p class="quote">${quoteObj.quote}</p>`;
   htmlString += `<p class="source">${quoteObj.source}`;
  
   if (quoteObj.citation) {
    htmlString+= `<span class="citation">${quoteObj.citation}</span>`;
  }
  if(quoteObj.year) {
    htmlString+= `<span class="year">${quoteObj.year}</span>`;
  }
  htmlString+= `</p>`;
  
   document.getElementById('quote-box').innerHTML = htmlString;
  
  }
  
  /***
   * click event listener for the print quote button
   * DO NOT CHANGE THE CODE BELOW!!
  ***/
  document.getElementById('load-quote').addEventListener("click", printQuote, false);
  