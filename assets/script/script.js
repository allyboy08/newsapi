fetch("https://newsapi.org/v2/everything?q=tesla&language=en&apiKey=2cb272824c21486aaac6ccf5d55fcfe1")
    .then(response => response.json())
    .then((json) => {
    console.log(json);
    })
    



