//even or odd
const EvenOddNum = document.querySelector('#EvenOddNum');
const eoresult = document.querySelector('#eoresult');

const checkeo = function () {
    let num = EvenOddNum.value
    if (num % 2 == 0) {
        eoresult.innerText = 'This Number is Even'
    } else {
        eoresult.innerText = 'This Number is odd'
    }
}



const mpNumber = document.querySelector('#mpNumber');
const mptablediv = document.querySelector('#mptablediv');

function generatemp() {
    mptablediv.innerHTML = ''
    let num = mpNumber.value;
    for (i = 1; i <= 10; i++) {
        mptablediv.innerHTML += `<p>${num} x ${i} = ` + num * i + `</p>`
    }
}

const randomgen = document.querySelector('#randomgen');
const randomnum = document.querySelector('#randomnum');

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const generaterandom = () => {
    const randomnumber = generate();
    randomnum.innerText = 'Randomly Generated Code is: ' + randomnumber;
}
const generate = () => {
    let result = ''
    for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random()*characters.length))
        
    }
    return result

};

function tryin(sss){
    form1.answer.value += sss
}

function calcs(){
    form1.answer.value = eval(form1.answer.value) 
}
function clears(){
    form1.answer.value = ' '
}

const EvenOdd = document.querySelector('#EvenOdd');

const mpTable = document.querySelector('#mpTable');

const calculator = document.querySelector('#calculator');

const randomword = document.querySelector('#randomword');

const contentgen = document.querySelector('#contg');

const allsections = document.querySelectorAll('.sections');
allsections.forEach(section =>{
    section.style.display = 'none'
 })
function tabs(name){
    allsections.forEach(section =>{
       section.style.display = 'none'
    })
    switch(name){
        case 'evenodd':
            EvenOdd.style.display = 'block';
        break
        case 'mptable':
            mpTable.style.display = 'block';
        break
        case 'calculator':
            calculator.style.display = 'block';
        break
        case 'randomword':
            randomword.style.display = 'block';
        break
        case 'contentgen':
            contentgen.style.display = 'block';
        break
    }
}
const content = document.querySelector("#contentgen");
const layout = document.querySelector(".layout");
const cgnum = document.querySelector("#cgnum");


function togglestyle(){
content.classList.toggle('stacked');
if(layout.innerText == 'Layout: Grid'){
    layout.innerText = 'Layout: Stacked'
}else{
    layout.innerText = 'Layout: Grid'
}
}

function contentgeneration(){
    let intnum = cgnum.value
    content.innerHTML = ''
for(i=1; i<=intnum; i++){
    let color = 'rgb(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ');' 
    let contentTemplate = `<div class="content">
    <div style="background:${color}"></div>
    <span><h2>Title `+ i + ` </h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p></span>
</div>`
content.innerHTML += contentTemplate
}

}