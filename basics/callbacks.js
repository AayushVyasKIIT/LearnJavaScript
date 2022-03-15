const myFunc = (callbackFunc) =>{
    let value = 50;
    callbackFunc(value);
};
myFunc(value => {
    console.log(value);
});