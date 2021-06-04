
const card = document.getElementById("card");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");


//seaching data
function searchArticle() {
	// const cats = document.getElementById("dropdownc").value;
	const lang = document.getElementById("dropdown").value;
	const search = document.getElementsByTagName("input")[0].value;
	const apiKey = "2cb272824c21486aaac6ccf5d55fcfe1";
	const url = `https://newsapi.org/v2/everything?q=${search}&language=${lang}&apiKey=${apiKey}`;
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
			card.innerHTML = art;
			card1.innerHTML = art1;
			card2.innerHTML = art2;
			card3.innerHTML = art3;
			card4.innerHTML = art4;
			card5.innerHTML = art5;
		});
}

