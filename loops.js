function forLoop(array) {
for (var i = 0; i < 25; i++) {
  array.push("I am 1 strange loop" + i + ["25 time"]);
  }
  return array
}

function whileLoop(countdown){

  while (countdown > 0) {
    console.log(countdown);
    countdown -= 1;
  }
  return "done";
}
function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array) {
  do { 
    array.pop();

  } while (array.length > 2 && maybeTrue ());
     return array;
}
