

"use strict";



function wordCounter(ids, wordCount, feedback ) {
    // word count using \w metacharacter - replacing this with .* to match anything between word boundaries since it was not taking 'a' as a word.
  // this is a masterstroke - to count words with any number of hyphens as one word
  // [-?(\w+)?]+ looks for hyphen and a word (we make both optional with ?). + at the end makes it a repeated pattern
  // \b is word boundary metacharacter

  var input = document.getElementById(ids), wordCount = document.querySelector('#wordCount'), feedback = document.querySelector('#feedback');

  var words = input.value.match(/\b[-?(\w+)?]+\b/gi);   
  console.log(words);

  
  if (words) {
    wordCount.innerHTML = words.length;
    if (words.length < 100) {
        input.classList.add("is-invalid");
        feedback.innerHTML = "Less than 100 words";
        
        
      } else {
        input.classList.add("is-valid"); 
        input.classList.remove("is-invalid"); 
        feedback.innerHTML = "";
    
      }    
  } else {
    wordCount.innerHTML = 0;
    feedback.innerHTML = "";
    input.classList.remove("is-invalid"); 
    input.classList.remove("is-valid"); 

  }
  
  
}
// updating the displayed stats after every keypress
// input.addEventListener('keyup', function() {

  
  
 

  

// });



