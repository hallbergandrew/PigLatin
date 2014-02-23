describe('pigLatin', function() {
  it("returns the original word with ay if the first letter is a vowel", function() {
    pigLatin("Epicodus").should.equal("epicodusay");
  });

  it("returns the word with its first letter + ay at the end if the original word starts with one consonant", function() {
    pigLatin("Bottle").should.equal("ottlebay");
  });

  it("returns the word with all of it's first consonants plus ay at the end if the original word starts with multiple consonants", function() {
    pigLatin("Blues").should.equal("uesblay");
  });

  it("return the word with all of its first consonants as well as a u plus ay at the end if the original word contains qu and u is the first vowel", function() {
    pigLatin("square").should.equal("aresquay");
  });

  it("returns the word with all of its first consonants plus ay at the end and doesn't include qu if there is a qu in the middle of the word, where the u is not the first vowel", function() {
    pigLatin("bosquare").should.equal("osquarebay");
  });  

  it("Treats y at the begining of a word as a consonant", function() {
    pigLatin("young").should.equal("oungyay");
  });

  it("Treats y not at the begining of a word as a vowel", function() {
    pigLatin("gypsy").should.equal("ypsygay");
  });
});

describe('sentenceLatin', function() {
  it("returns the sentence in pigLatin", function() {
    sentenceLatin("I love to Read").should.equal("iay ovelay otay eadray");
  });
});
