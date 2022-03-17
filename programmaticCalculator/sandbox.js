let mathobj;
class MathFunctions{
    fib = new Map();
    fibonacci(number){

        if(number == 0 || number == 1){
            return number;
        }  
        if(this.fib.get(number) != null){
            return this.fib.get(number);
        }
        this.fib.set(number , this.fibonacci(number - 1) + this.fibonacci(number -2));
        return (this.fibonacci(number - 1) + this.fibonacci(number - 2));
    }
    gcd(a,b){
        if(b==0){
            return a;
        }
        return this.gcd(b,a%b);
    }
    isPrime(number){
        if(number == 0 || number == 1){
            return 
        }
        for(let i = 2; i <= Math.sqrt(number); i++){
            if(number%i ==0){
                return false;
            }
        }
        return true;
    }
    isEven(number){
        if(number%2 ==0 ){
            return true;
        }
        return false;
    }
    isPalindrome(number){
        let num = number.toString();
        const size = num.length;
        let i = 0; let j = size - 1;
        while(i<=j){
            if(num[i] != num[j]){
                return false;
            }
            i++, j--;
        }
        return true;
    }


};
const requiresInput = (operation) => {
    const singleInput = ["fibonacci", "isPrime", "isPalindrome",
                            "sort", "isEven","sqrt", "log"];
    const twoInput = ["GCD", "+", "-", "*", "/", "%", "x^y"];
    for(let i = 0 ; i <singleInput.length ;i++){
        if(singleInput[i]  == operation){
            return 1;
        }
    }
    for(let j = 0 ; j < twoInput.length ;j++){
        if(twoInput[j]  == operation){
            return 2;
        }
    }
    
    return -1;
};

requiresInput("GCD");
let firstInput = true;
const btns = document.querySelectorAll("button");
let input = "0";
const display = document.querySelector(".displayInput")
display.textContent = input;
//object initializers
const init = async()  => {
    let mathobj = new MathFunctions();

}
init();
//clearing the content of the display
const clear = () => {
    input = "";
    display.textContent = input;
}

//setting the output of the display to 0
const setZero = () => {
    input = "0";
    display.textContent = input;
}
//control decision
const decide = (operation)=>{
    switch (operation){
        case "Fibonacci" : 
            takeSecondInput();
            

    }
}
const fetchInput = (Input) => {
    const fetchedInput = parseInt(Input);
    return fetchedInput;
}
const clearBtn = document.querySelector("#clear");
const result = document.querySelector("#equals");
clearBtn.addEventListener('click', setZero());

const takeSecondInput = () => {
    let secondInputStr = "";
    const secondInput = document.querySelectorAll("#num");
    secondInput.forEach( numbtn => {
        numbtn.addEventListener('click' ,(e) => {
            secondInputStr+=numbtn.value;
        })
    });
}
//listening for onClick and appending each input to make the targetInput
btns.forEach(btn => {
    btn.addEventListener('click',(e) => {
        //if it is a numerical value then we append it to target
        btn.style.color = "white";
        btn.style.background = "black";
        setTimeout(()=>{
            btn.style.color = "black";
            btn.style.background = "white";
        },1000);
        if(btn.value >= 1 && btn.value <= 9){
            if(firstInput == true){
                firstInput = false;
                clear();
            }
            input+=btn.value;
            display.textContent = input;
        }
        //if the user pressed clear than we set the content to zero
        else if(btn.value === "clear"){
            setZero();
            firstInput = true;
        }
        else{
            decide(btn.value);
        }
    });
});





