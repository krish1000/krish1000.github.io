// document.addEventListener('DOMContentLoaded',function(event){
// array with texts to type in typewriter
// var dataText = [ "Utrecht.", "Full Service.", "Webdevelopment.", "Wij zijn Codefield!"];
var dataText = [
  "Programmer.",
  "Gamer.",
  "Full Stack Developer.",
  "Undergraduate Teaching Assistant.",
  "Computer Science Undergraduate Student.",
  "Web Designer.",
  "Made this site using React JSX",
  "Software Developer.",
];

// type one text in the typwriter
// keeps calling itself until the text is finished
function typeWriter(text, i, fnCallback) {
  // chekc if text isn't finished yet
  if (i < text.length) {
    // add next character to h1
    //  document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

    //I modified this to instead get by id and apply class rather than attribute caret to all span css
    document.getElementById("welcome-type-writer").innerHTML =
      text.substring(0, i + 1) +
      '<span class="type-writer" aria-hidden="true"></span>';

    // wait for a while and call this function again for next character
    setTimeout(function () {
      typeWriter(text, i + 1, fnCallback);
    }, 90); //NEXT CHARACTER TIMEOUT********
  }
  // text finished, call callback if there is a callback function
  else if (typeof fnCallback == "function") {
    // call callback after timeout
    setTimeout(fnCallback, 900);
  }
}
// start a typewriter animation for a text in the dataText array
export function StartTextAnimation(i) {
  if (typeof dataText[i] == "undefined") {
    setTimeout(function () {
      StartTextAnimation(0);
    }, 5000); //delays to start from index 0 againzzz
  }
  // check if dataText[i] exists
  if (i < dataText[i].length) {
    // text exists! start typewriter animation
    typeWriter(dataText[i], 0, function () {
      // after callback (and whole text has been animated), start next text
      StartTextAnimation(i + 1);
    });
  }
}
// start the text animation
// StartTextAnimation(0);
//   });
