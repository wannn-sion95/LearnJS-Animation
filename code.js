var arr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
var i = 0;
var ref;

function picLibrary() {
  document.images[0].src = arr[i];
  i++;
  if (i >= arr.length) i = 0;
}

function start(interval) {
  ref = setInterval(picLibrary, interval);
}

function stop() {
  clearInterval(ref);
}
