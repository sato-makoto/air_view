function hello() {
  var msg = "<p div=>波浪わあるど！</p>";
  document.open();
  document.write(msg);
  document.close();
}
function pict() {
  var sumsrc = "http://192.168.9.24/thumbnail.cgi?/DCIM/108_0510/IMGP1887.JPG"
  var img = '<img src="' + sumsrc + '">'
  document.write(img);
}
function files() {
  var pict = "http://192.168.9.24/command.cgi?op=100&DIR=/DCIM/108_0510";
  var pictfiles = '<pre>' + pict + '</pre>'
  document.write(pictfiles);
}

// files();
hello();
pict();
