



var quotes =["You miss 100% of the shots you don't take." , "Do not take life too seriously. You will not get out alive.", "The best revenge is massive success.","You miss 100% of the shots you don't take.","Do not take life too seriously. You will not get out alive.","It's not what happens to you, but how you react to it that matters.","You miss 100% of the shots you don't take."];
var authors =['--Wayne Gretzy','--Elbert Hubbard','--Frank Sinatra','--Wayne Gretzy','--Elbert Hubbard','--Epictetus','--Wayne Gretzy']
var quote = document.getElementById('quote');
var author = document.getElementById('author');



function show() {
    
   var index = Math.floor(Math.random() * (quotes.length));
   
   quote.innerHTML = `"${quotes[index]}"`;
   author.innerHTML = authors[index]

}

//  