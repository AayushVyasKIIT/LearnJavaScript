fetch("https://jsonplaceholder.typicode.com/todos/").then((response) => {
    console.log('resolved',response.json());
}).catch(err => console.log("error"));
