var quotes = [
    
    {
        quote: 'One cannot think well, love well, sleep well, if one has not dined well.',
        author: 'Virginia Woolf'
        
    },
    
    {
        quote: 'I think it is all a matter of love; the more you love a memory the stronger and stranger it becomes',
        author: 'Vladimir Nabokov'
    },
    
    {
        quote: 'When I go to the press conference before the game, in my mind the game has already started.',
        author: 'José Mourinho'
    },
    
    {
        quote: 'I believe that truth has only one face: that of a violent contradiction.',
        author: 'Georges Bataille'        
    },
    
    {
        quote: "I'm always amazed that people take what I say seriously. I don't even take what I am seriously.",
        author: 'David Bowie'
    },
    
    {
        quote: 'The beginning of knowledge is the discovery of something we do not understand.',
        author: 'Frank Herbert'
    },
    
    {
        quote: 'We can only see a short distance ahead, but we can see plenty there that needs to be done.',
        author: 'Alan Turing'
    },
    
    {
        quote: "They thought I was a Surrealist, but I wasn't. I never painted dreams. I painted my own reality.",
        author: "Frida Kahlo"
    },
    
    {
        quote: "Have no fear of perfection - you'll never reach it.",
        author: "Salvador Dali"
    },
    
    {
        quote: "Birds born in cages think that flying is a disease.",
        author: "Alejandro Jodorowsky"
    }
];

var current = 0;

function ranNum(y){
    var now = Math.floor(Math.random() * y.length);
    if(now === current){
        return ranNum(y)
    } else {
        current = now;
        return current
    }
}

function quoteChoose(x) {
    var choose = ranNum(x)
    document.getElementById('thequote').innerHTML = x[choose].quote;
    document.getElementById('theauthor').innerHTML = x[choose].author;
}    

window.onload = function(){quoteChoose(quotes)};
document.getElementById('newquote').onclick = function(){quoteChoose(quotes)};