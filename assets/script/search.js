
const card = document.getElementById("card");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");


//seaching data
function searchArticle() {
	const search = document.getElementsByTagName("input")[0].value;
	const apiKey = "2cb272824c21486aaac6ccf5d55fcfe1";
	const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`;
	console.log(url);
	const request = new Request(url);
// Fetch the data
	fetch(request)
		.then((response) => response.json())
		.then((news) => {
		console.log(news);
		console.log(search);
			let art=
			`<div class="data">
			<img src=${JSON.stringify(news.articles[0].urlToImage)}/>
			<h1>
			${JSON.stringify(news.articles[0].title)}
			</h1>
			<h3>
			${JSON.stringify(news.articles[0].description)}
			</h3>
			<h4>
			${JSON.stringify(news.articles[0].publishedAt)}
			</div>`;
			let art1 = 
			`<div class="data">
			<img src=${JSON.stringify(news.articles[1].urlToImage)}/>
			<h1>
			${JSON.stringify(news.articles[1].title)}
			</h1>
			</div>`;
			let art2 = 
			`<div class="data">
			<img src=${JSON.stringify(news.articles[2].urlToImage)}/>
			<h1>
			${JSON.stringify(news.articles[2].title)}
			</h1>
			</div>`;
			let art3 = 
			`<div class="data">
			<img src=${JSON.stringify(news.articles[3].urlToImage)}/>
			<h1>
			${JSON.stringify(news.articles[3].title)}
			</h1>
			</div>`;
			let art4 = 
			`<div class="data">
			<img src=${JSON.stringify(news.articles[4].urlToImage)}/>
			<h1>
			${JSON.stringify(news.articles[4].title)}
			</h1>
			</div>`;
			let art5 = 
			`<div class="data">
			<img src=${JSON.stringify(news.articles[5].urlToImage)}/>
			<h1>
			${JSON.stringify(news.articles[5].title)}
			</h1>
			</div>`;
			card.innerHTML = art;
			card1.innerHTML = art1;
			card2.innerHTML = art2;
			card3.innerHTML = art3;
			card4.innerHTML = art4;
			card5.innerHTML = art5;
		});
}

