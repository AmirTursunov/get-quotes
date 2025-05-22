let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.api-ninjas.com/v1/quotes";
const apiKey = "fCsau9c+YMHlAGBznJOp+Q==zm0bMCj5P4GdrHPp";
let getQuote = () => {
  btn.innerText = "Loading...";
  fetch(url, {
    headers: {
      "X-Api-Key": apiKey,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.length > 0) {
        quote.innerText = data[0].quote;
        author.innerText = data[0].author;
        btn.innerText = "Get Quote";
      } else {
        quote.innerText = "Hech qanday iqtibos topilmadi.";
        author.innerText = "";
      }
    })
    .catch((error) => {
      quote.innerText = "Xatolik yuz berdi!";
      author.innerText = "";
      console.error("Xatolik:", error);
    });
};

btn.addEventListener("click", getQuote);
