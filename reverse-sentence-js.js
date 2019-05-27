var sentence = "My name is Awais";
var words = sentence.split(" ");
var reverseSentence = "";

// Ascending
for(var i=0; i< words.length; i++){
  //console.log(words[i]);
}

// Descending
var j = words.length;
while(j--)
{
  //console.log(words[j]);
  reverseSentence+= " " + words[j];
}
console.log(reverseSentence);
