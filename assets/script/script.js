// const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
// const url = `${proxyUrl}https://newsapi.org/v2/everything&apiKey=`
// // let request = request.
// fetch(url)
//     .then((response) => response.json())
//     .then((json) => {console.log(json);})



// const proxyUrl = "https://cors-anywhere.herokuapp.com/"
// const qInTitle = "tesla";
// const from = "";
// const apiKey = "2cb272824c21486aaac6ccf5d55fcfe1";
// const url = `${qInTitle}&language=en&apiKey=${apiKey}`;
// const request = new Request(url);


    
    fetch("https://newsapi.org/v2/everything?q=tesla&language=en&apiKey=2cb272824c21486aaac6ccf5d55fcfe1")
    .then(response => response.json())
    .then((json) => {
    console.log(json);
    })
    



