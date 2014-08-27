function hello() {
  var msg = "<p div=>波浪わあるど！</p>";
  document.open();
  document.write(msg);
  document.close();
}
function pict() {
//  var img = '<img src="http://www.kuzuore.com/~kuzu/diary/images/20140822_01.png">'
   var sumsrc = "http://192.168.9.24/thumbnail.cgi?/DCIM/108_0510/IMGP1887.JPG"
   var img = '<img src="' + sumsrc + '">'
  document.write(img);
}
hello();
// location.href = 'http://www.kuzuore.com/~kuzu/diary/?date=20140826#p02';
pict();
