// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE

// See Lecture 52, part 2


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
(function (window) {
 var helloSpeaker = {};
 //helloSpeaker.name = "name";

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Hello";

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
helloSpeaker.speak = function (name) {
//helloSpeaker.speak();
//speak(helloSpeaker.name) {
  console.log(speakWord + " " + name);
}
window.helloSpeaker = helloSpeaker;
})(window);

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;
//console.log("helloSpeaker" + name);
//})("test");


(function (window) {
var byeSpeaker ={};
  var speakWord = "Good Bye";
byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}
window.byeSpeaker=byeSpeaker;
})(window);
