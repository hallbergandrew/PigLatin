var sentenceLatin = function(sentence) {
  var sentenceWords = sentence.split(" ");
  var resultWords = [];
  var resultFinal = "";

  sentenceWords.forEach(function(sentenceWord, index){
    resultWords.push(pigLatin(sentenceWord));
  });

  resultFinal = resultWords.join(" ")
  resultFinal = resultFinal.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '');
  resultFinal = resultFinal.charAt(0).toUpperCase() + resultFinal.substring(1) + "!";
  return resultFinal;

};


var pigLatin = function(word) {
  var wordLower = word.toLowerCase();
  var wordLetters = wordLower.split("");
  var vowels = ["a", "e", "i", "o", "u", "y"];
  var result = ""
  var resultIndex = [];
  var firstVowelIndex = 0;

  wordLetters.forEach(function(wordLetter, index) {
    if(vowels.indexOf(wordLetter)>=0){
      resultIndex.push(index);
    } 
  });

  firstVowelIndex = resultIndex[0];
 
  if(firstVowelIndex === 0 && wordLower[0]!= "y") {
    result = wordLower + "ay";
  } else if(wordLower[firstVowelIndex-1] === "q" && wordLower[firstVowelIndex] === "u") {
    result = wordLower.substring(firstVowelIndex+1, wordLower.length) + wordLower.substring(0, firstVowelIndex+1) + "ay";
  } else if(wordLower[0] === "y"){
    result = wordLower.substring(1,wordLower.length) + wordLower[0] + "ay";
  } else {
    result = wordLower.substring(firstVowelIndex, wordLower.length) + wordLower.substring(0, firstVowelIndex) + "ay"; 
  }

  return result;

};

$(document).ready(function() {

  $("form#pig-latin").submit(function(event){

    var userInput = $("input#sentence").val();
    var result = sentenceLatin(userInput);

    $("span.sentence").text(result);

    $("#result").show();

    event.preventDefault();
  });

});


