const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

// Show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Show new quote
function newQuote() {
  loading();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  authorText.textContent = quote.a ?? "Unknown";

  // Check quote length to determine styling
  if (quote.q.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  // Set quote, hide loader
  quoteText.textContent = quote.q;
  complete();
}

// Get Quotes From API
async function getQuotes() {
  const apiUrl =
    "https://api.allorigins.win/get?url=https://zenquotes.io/api/quotes";

  try {
    loading();
    const response = await fetch(apiUrl);

    const data = await response.json();

    // Parse the contents as JSON
    apiQuotes = JSON.parse(data.contents);
  } catch (error) {
    // Catch error here (use the local quotes instead)
    apiQuotes = localQuotes;
  } finally {
    newQuote();
  }
}

// Tweet quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuotes();
