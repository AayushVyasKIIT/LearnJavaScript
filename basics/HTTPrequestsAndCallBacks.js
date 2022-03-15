const getTodos = (callBack) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 & request.status === 200) {
            callBack(undefined, request.responseText);
        } else if (request.readyState === 4) {
            callBack("Couldnot fetch", undefined);
        }
    });
    request.open("GET","https://jsonplaceholder.typicode.com/todos/");
    request.send();
};
getTodos((err, data) => {
    console.log('callback fired');

    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
