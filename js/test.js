const foo = () => console.log("Arrow Hello World!")
foo();


fetch('http://www.omdbapi.com/?i=tt0083658&apikey=2019126').then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error));

const bar = async () => {
    try {
        let response = await fetch('http://www.omdbapi.com/?i=tt0083658&apikey=20191f26');
        let data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error)
    }
}
bar();

