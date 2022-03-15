const getTodos = async() => {

    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    if(response.status !== 200){
        throw new Error("Error : status error");
    }
    const data = await response.json();

    return data;
}

getTodos()
    .then(data => console.log('resolved',data))
    .catch(err => console.log("rejected", err.message));