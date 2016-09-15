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
        quote: 'The person with all the answers you need is you. Just trust yourself',
        author: 'Sandra Whiles'
    }
];


function quoteChoose(x) {
    var choose = Math.floor(Math.random() * x.length)
    console.log(choose)
    console.log(x[choose].quote)
    document.getElementById('thequote').innerHTML = x[choose].quote;
    document.getElementById('theauthor').innerHTML = x[choose].author;
}    

window.onload = function(){quoteChoose(quotes)};
document.getElementById('newquote').onclick = function(){quoteChoose(quotes)};