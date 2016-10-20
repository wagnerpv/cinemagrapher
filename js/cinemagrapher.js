

// Shoutout to this jsfiddle for showing me this one.
// https://jsfiddle.net/dsbonev/cCCZ2//
function loadVideo(id)
{
var video = document.getElementById('video');
    //Should get rid of globals once beyond proof of concept
     canvas = document.getElementById('c');
    var context = canvas.getContext('2d');
    ctx = context;
    var back = document.createElement('canvas');
    var backcontext = back.getContext('2d');

    var cw,ch;

    d = new Date();
    console.log("pressed");
    var vid = $('#pick-video')[0].files[0];
    var fileURL = URL.createObjectURL(vid);
    video.src = fileURL;
    // video.play();
    console.log(fileURL);




path = vid + id + d.getTime();
console.log(path);
    video.addEventListener('play', function(){
        cw = video.clientWidth;
        ch = video.clientHeight;
        canvas.width = cw;
        canvas.height = ch;
        back.width = cw;
        back.height = ch;
        draw(video,context,backcontext,cw,ch);
    },false);

     canvas.addEventListener("click", function (e) {
            findxy('move', e)
        }, false);


//
// video.load();
// video.play();
}

function findxy(res, e){
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;

            //This kind of draws a point.
                ctx.beginPath();
                ctx.fillStyle = 'black';
                ctx.fillRect(currX, currY, 2, 2);
                ctx.closePath();
            // console.log("X: "+currX+" | Y: "+currY);
}

function draw(v,c,bc,w,h) {
    if(v.paused || v.ended) return false;
    // First, draw it into the backing canvas
    bc.drawImage(v,0,0,w,h);
    // Grab the pixel data from the backing canvas
    var idata = bc.getImageData(0,0,w,h);
    var data = idata.data;
    // Loop through the pixels, turning them grayscale
    for(var i = 0; i < data.length; i+=4) {
        var r = data[i];
        var g = data[i+1];
        var b = data[i+2];
        var brightness = (3*r+4*g+b)>>>3;
        data[i] = brightness;
        data[i+1] = brightness;
        data[i+2] = brightness;
    }
    idata.data = data;
    // Draw the pixels onto the visible canvas
    c.putImageData(idata,0,0);
    // Start over!
    setTimeout(function(){ draw(v,c,bc,w,h); }, 0);
}