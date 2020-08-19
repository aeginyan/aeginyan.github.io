const foo = () => {console.log("Arrow Hello World!")}
foo();


fetch('http://www.omdbapi.com/?i=tt0083658&apikey=20191f26').then(response => response.json()).then(data => console.log(data));


