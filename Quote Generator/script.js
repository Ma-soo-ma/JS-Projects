const api_URL = "https://api.breakingbadquotes.xyz/v1/quotes";

const quote = document.getElementById("quote");
const author = document.getElementById("author");


async function getQuote(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    quote.innerText = data[0].quote; 
    author.innerText = data[0].author;  
}



getQuote(api_URL);

function postTweet() {
    window.open(
        "https://twitter.com/intent/tweet?text=" + quote.innerHTMl,
+ "by---" +  author.innerHTML ,      "Tweet Window",
        "width=600,height=300"
    );
}


 

