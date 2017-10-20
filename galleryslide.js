var showpostthumbnails_gal = true;
var showpostsummary_gal = false;
var random_posts = false;
function showgalleryposts(json) {
document.write('<div id="slider" class="nivoSlider">'); 
for (var i = 0; i < numposts_gal; i++) {
if (random_posts == true){
var random_int = Math.floor(Math.random()*json.feed.entry.length);
var entry_gal = json.feed.entry[random_int];
}
else{
var entry_gal = json.feed.entry[i];
}
var posttitle_gal = entry_gal.title.$t;
var posturl_gal;if (i == json.feed.entry.length) break;
for (var k = 0; k < entry_gal.link.length;k++){
if (entry_gal.link[k].rel == 'alternate') {
posturl_gal = entry_gal.link[k].href;break;
}
}
if("content"in entry_gal){
var postcontent_gal=entry_gal.content.$t;
}

s = postcontent_gal;
a = s.indexOf("<img");
b = s.indexOf("src=\"", a);
c = s.indexOf("\"", b + 5);
d = s.substr(b + 5, c - b - 5);
if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
var thumburl_gal = d;
} else var thumburl_gal = 'http://i1133.photobucket.com/albums/m596/abu-farhan/Images_no_image.gif';	

document.write('<a href="'+ posturl_gal + '"><img src="'+thumburl_gal+'" alt="" title="'+posttitle_gal+'" style=" display:none;"/></a>');

var re = /<\S[^>]*>/g; 
postcontent_gal = postcontent_gal.replace(re, "");


if (showpostsummary_gal == true) {

if (postcontent_gal.length < numchars_gal) {	
document.write(postcontent_gal);
document.write('</span>');}
else {
postcontent_gal = postcontent_gal.substring(0, numchars_gal);
var quoteEnd_gal = postcontent_gal.lastIndexOf(" ");
postcontent_gal = postcontent_gal.substring(0,quoteEnd_gal);
document.write(postcontent_gal + '...');
document.write('</span>');}
}
}document.write('</div>');

}