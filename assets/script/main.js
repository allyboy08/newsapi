
    

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
        <a href=${JSON.stringify(news.articles[0].url)} target="_blank" id="link">
        <img src=${JSON.stringify(news.articles[0].urlToImage)}/>
        <h2>
        ${(news.articles[0].title)}
        </h2>
        <h3>
        ${(news.articles[0].description)}
        </h3>
        <h5>
        ${(news.articles[0].publishedAt)}
        </h5>
        </a>
        </div>`;

        let art1 = 
        `<div class="data">
        <a href=${JSON.stringify(news.articles[1].url)} target="_blank" id="link">
        <img src=${JSON.stringify(news.articles[1].urlToImage)}/>
        <h2>
        ${(news.articles[1].title)}
        </h2>
        <h3>
        ${(news.articles[1].description)}
        </h3>
        <h5>
        ${(news.articles[1].publishedAt)}
        </h5>
        </a>
        </div>`;
        
        let art2 = 
        `<div class="data">
        <a href=${JSON.stringify(news.articles[2].url)} target="_blank" id="link">
        <img src=${JSON.stringify(news.articles[2].urlToImage)}/>
        <h2>
        ${(news.articles[2].title)}
        </h2>
        <h3>
        ${(news.articles[2].description)}
        </h3>
        <h5>
        ${(news.articles[2].publishedAt)}
        </h5>
        </a>
        </div>`;

        let art3 = 
        `<div class="data">
        <a href=${JSON.stringify(news.articles[3].url)} target="_blank" id="link">
        <img src=${JSON.stringify(news.articles[3].urlToImage)}/>
        <h2>
        ${(news.articles[3].title)}
        </h2>
        <h3>
        ${(news.articles[3].description)}
        </h3>
        <h5>
        ${(news.articles[3].publishedAt)}
        </h5>
        </a>
        </div>`;

        let art4 = 
        `<div class="data">
        <a href=${JSON.stringify(news.articles[4].url)} target="_blank" id="link">
        <img src=${JSON.stringify(news.articles[4].urlToImage)}/>
        <h2>
        ${(news.articles[4].title)}
        </h2>
        <h3>
        ${(news.articles[4].description)}
        </h3>
        <h5>
        ${(news.articles[4].publishedAt)}
        </h5>
        </a>
        </div>`;

        let art5 = 
        `<div class="data">
        <a href=${JSON.stringify(news.articles[5].url)} target="_blank" id="link">
        <img src=${JSON.stringify(news.articles[5].urlToImage)}/>
        <h2>
        ${(news.articles[5].title)}
        </h2>
        <h3>
        ${(news.articles[5].description)}
        </h3>
        <h5>
        ${(news.articles[5].publishedAt)}
        </h5>
        </a>
        </div>`;

        cards.innerHTML = art;
        cards1.innerHTML = art1;
        cards2.innerHTML = art2;
        cards3.innerHTML = art3;
        cards4.innerHTML = art4;
        cards5.innerHTML = art5;
    });

		





