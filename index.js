function goPlayFootball (){
    console.log("Go play a football match");
}
function takeShower (){
    console.log("Shower after the match");
}
function eatSnack(){
    console.log("Eat a protein bar");
}

function Monday(){
    goPlayFootball();
    eatSnack();
}


function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function namedFunction() {
    console.log("I'm a named function!");
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("I'm an anonymous function!");
  };
}
