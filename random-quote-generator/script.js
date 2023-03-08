const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
  "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
];

// Set the default quote
document.getElementById("quote").innerHTML = quotes[0];

function newQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerHTML = quote;
}

document.getElementById("new-quote").addEventListener("click", newQuote);
