const newsElement = document.querySelector("#news-content")
const newsListElement = document.querySelector("#news-content-list")
var newsData

// //Daily News
// fetch('https://saurav.tech/NewsAPI/everything/bbc-news.json') //bbc
//     .then(response => response.json())
//     .then(data => newsData = data)
//     .then(data => console.log(newsData))
//     .then(data => {
//         newsData.articles.forEach(article => {
//             let element = document.createElement('li')
//             element.innerHTML = `<h5><a href="${article.url}" target="_blank">${article.title}</a></h5>`;
//             newsListElement.append(element)
//         });
//     })
// fetch('https://saurav.tech/NewsAPI/everything/cnn.json') //bbc
//     .then(response => response.json())
//     .then(data => newsData = data)
//     .then(data => console.log(newsData))
//     .then(data => {
//         newsData.articles.forEach(article => {
//             let element = document.createElement('li')
//             element.innerHTML = `<h5><a href="${article.url}" target="_blank">${article.title}</a></h5>`;
//             newsListElement.append(element)
//         });
//     })

//Scroll
let scrollAmount = 1;
scroll()
function scroll() {
    newsElement.scrollLeft += scrollAmount;
    if (newsElement.scrollLeft >= newsElement.scrollWidth - newsElement.clientWidth) {
        newsElement.scrollLeft = 0; // Reset to the beginning
    }
}