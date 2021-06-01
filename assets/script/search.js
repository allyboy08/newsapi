const search = document.getElementById("find").value;
// const find = search.getElementsByTagName("input")[0].value;
// const apiKey = "2cb272824c21486aaac6ccf5d55fcfe1";
const card = document.getElementById("card");
const card1 = document.getElementById("card1");
// const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`;
// const request = new Request(url);

function searchArticle() {
	const apiKey = "2cb272824c21486aaac6ccf5d55fcfe1";
	const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`;
	const request = new Request(url);
// Fetch the data
	fetch(request)
		.then((response) => response.json())
		.then((json) => {
		console.log(json);
		console.log(search);
			let art=
			`<h1>
			${JSON.stringify(json.articles[0].title)}
			</h1>`;
			let art1 = 
			`<h1>
			${JSON.stringify(json.articles[1].title)}
			</h1>`;
			card.innerHTML = art;
			card1.innerHTML = art1;
		});
}

