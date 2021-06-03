// fetch("https://newsapi.org/v2/everything?q=tesla&language=en&apiKey=2cb272824c21486aaac6ccf5d55fcfe1")
//     .then(response => response.json())
//     .then((json) => {
//     console.log(json);
//     })
    

const cards = document.getElementById("card");
const cards1 = document.getElementById("card1");
const cards2 = document.getElementById("card2");
const cards3 = document.getElementById("card3");
const cards4 = document.getElementById("card4");
const cards5 = document.getElementById("card5");


	
	const apiKey = "2cb272824c21486aaac6ccf5d55fcfe1";
	const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
	console.log(url);
	const request = new Request(url);
// Fetch the data
	fetch(request)
		.then((response) => response.json())
		.then((news) => {
		console.log(news);
        console.log(url);
        let art=
        `<div class="data">
        <img src=${(news.articles[0].urlToImage)}/>
        <h1>
        ${(news.articles[0].title)}
        </h1>
        <h3>
        ${(news.articles[0].description)}
        </h3>
        <h4>
        ${(news.articles[0].publishedAt)}
        </h4>
        <a href=${(news.articles[0].url)} target="_blank" id="link">Read more...</a>
        </div>`;
        let art1 = 
        `<div class="data">
        <img src=${JSON.stringify(news.articles[1].urlToImage)}/>
        <h2>
        ${JSON.stringify(news.articles[1].title)}
        </h2>
        <h3>
        ${JSON.stringify(news.articles[1].description)}
        </h3>
        <h5>
        ${JSON.stringify(news.articles[1].publishedAt)}
        </h5>
        <a href=${(news.articles[1].url)} target="_blank" id="link">Read more...</a>
        </div>`;
        let art2 = 
        `<div class="data">
        <img src=${JSON.stringify(news.articles[2].urlToImage)}/>
        <h1>
        ${JSON.stringify(news.articles[2].title)}
        </h1>
        <h3>
        ${JSON.stringify(news.articles[0].description)}
        </h3>
        <h4>
        ${JSON.stringify(news.articles[0].publishedAt)}
        </h4>
        </div>`;
        let art3 = 
        `<div class="data">
        <img src=${JSON.stringify(news.articles[3].urlToImage)}/>
        <h1>
        ${JSON.stringify(news.articles[3].title)}
        </h1>
        <h3>
        ${JSON.stringify(news.articles[0].description)}
        </h3>
        <h4>
        ${JSON.stringify(news.articles[0].publishedAt)}
        </h4>
        </div>`;
        let art4 = 
        `<div class="data">
        <img src=${JSON.stringify(news.articles[4].urlToImage)}/>
        <h1>
        ${JSON.stringify(news.articles[4].title)}
        </h1>
        <h3>
        ${JSON.stringify(news.articles[0].description)}
        </h3>
        <h4>
        ${JSON.stringify(news.articles[0].publishedAt)}
        </h4>
        </div>`;
        let art5 = 
        `<div class="data">
        <img src=${JSON.stringify(news.articles[5].urlToImage)}/>
        <h1>
        ${JSON.stringify(news.articles[5].title)}
        </h1>
        <h3>
        ${JSON.stringify(news.articles[0].description)}
        </h3>
        <h4>
        ${JSON.stringify(news.articles[0].publishedAt)}
        </h4>
        </div>`;
        cards.innerHTML = art;
        cards1.innerHTML = art1;
        cards2.innerHTML = art2;
        cards3.innerHTML = art3;
        cards4.innerHTML = art4;
        cards5.innerHTML = art5;
    });
// }
		





