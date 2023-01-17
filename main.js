let btn = document.getElementById('button');
let output = document.getElementById('output');
let quotes = [
    'You are lucky and the universe loves you!',
    'The universe provides for you',
    'You are living in your highest timeline',
    'When you wakeup, you will know what to do',
    'You are lucky and everything always works out in your favor',
    'You are loved',
]

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})