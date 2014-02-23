

var sentenceLatin = function(sentence) {
  var sentenceWords = sentence.split(" ");
  var resultWords = [];
  var resultFinal = "";

  sentenceWords.forEach(function(sentenceWord, index){
    resultWords.push(pigLatin(sentenceWord));
  });

  resultFinal = resultWords.join(" ");
  return resultFinal; 

};


var pigLatin = function(word) {

  var vowelRe = /a|e|i|o|u|y/i;
  var quRe = /q(?=u)/;
  var yRe = /^y/;
  var result = "";
  var firstVowelIndex = word.toLowerCase().indexOf(vowelRe.exec(word));
  var quIndex = word.toLowerCase().indexOf(quRe.exec(word))+2;

  if(yRe.test(word)) {
    result = word.substring(1)+"yay";
  } else if(quRe.test(word) && quIndex-1 === firstVowelIndex) {
    result = word.toLowerCase().substring(quIndex) + word.toLowerCase().substring(0, quIndex) + "ay";
  } else {
    result = word.toLowerCase().substring(firstVowelIndex) + word.toLowerCase().substring(0, firstVowelIndex) + "ay";
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




