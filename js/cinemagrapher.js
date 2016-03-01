

// Shoutout to this jsfiddle for showing me this one.
// https://jsfiddle.net/dsbonev/cCCZ2//
function loadVideo(id)
{
var video = document.getElementById('video');
d = new Date();
console.log("pressed");
var vid = $('#pick-video')[0].files[0];
var fileURL = URL.createObjectURL(vid);
video.src = fileURL;
video.play();
console.log(fileURL);




path = vid + id + d.getTime();
console.log(path);
//
// video.load();
// video.play();
}
