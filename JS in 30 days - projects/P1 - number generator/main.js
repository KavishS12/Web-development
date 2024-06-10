const title = document.querySelector("h1")
title.style.textAlign = 'center'

document.body.style.backgroundColor = '#000'
document.body.style.color = "#FFF"

const subTitle = document.querySelector("h2")
subTitle.style.textDecoration = 'underline'
subTitle.style.textAlign = 'center'

const subTitle2 = document.querySelector("h3")
subTitle2.style.textDecoration = 'underline'
subTitle2.style.textAlign = 'center'

isPrime = (n) => {
    if(n==0 || n==1)return false;
    for(let i=2;i*i<=n;i++){
        if(n%i == 0)return false;
    }
    return true;
}

wrapper = document.getElementsByClassName("wrapper")[0];
button = document.querySelector(".generateBtn");
input = document.querySelector(".input");

button.addEventListener('click',() => {
    const p = document.querySelector('p');
    wrapper.innerHTML = '';
    p.textContent = "(Green : Even numbers , Yellow : Odd numbers , Red : Prime Numbers)";
    let limit = input.value;
    for(let i=0;i<limit;i++){
        num = document.createElement('div');
        num.textContent = i;
        num.style.padding = '10px';
        num.style.color = 'black'
        if(i%2==0){
            num.style.backgroundColor = 'green';
        }
        else {
            num.style.backgroundColor = 'yellow';
        }
        if(isPrime(i) == true){
            num.style.backgroundColor = 'red';
        }
        wrapper.appendChild(num);
    }
})

