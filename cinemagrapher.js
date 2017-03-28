var videoStartTime = 15, durationTime = 4.4;
var videoStartTime = 15, durationTime = 2;
var videoStartTime = 11, durationTime = 1.03;
var videoElement,canvasElement,context,backCanvas,backContext;
var canvasWidth,canvasHeight,timeoutID;

function stop(){
	if (!videoElement)
		return;
	videoElement.pause();
};


function loadAndPlay(){
	videoElement = videoElement||document.getElementById('videoElement');
	canvasElement = canvasElement||document.getElementById('canvasElement');
	context = context||canvasElement.getContext('2d');
	backCanvas = backCanvas||document.createElement('canvas');
	backContext = backContext||backCanvas.getContext('2d');
	var videoFileData = $('#input-file')[0].files[0];
	if (!videoFileData)
		return;	

	if (!videoElement.paused || !videoElement.ended)
		stop();		
	videoElement.muted = true;
	var blobURL = URL.createObjectURL(videoFileData);
	play(blobURL);
};

function play(url){	
	videoElement.src = url;
	var prepared = false;

	videoElement.addEventListener('play', function(){
		draw(videoElement,context,backContext,canvasWidth,canvasHeight);
   },false);

	videoElement.addEventListener('loadedmetadata', function(){
		videoElement.currentTime = videoStartTime;
		if (!prepared){
			prepared = true;
			prepareCanvas();
		}
	},false);

	videoElement.addEventListener('canplay', function(){
		videoElement.play();
	},false);

	videoElement.addEventListener('timeupdate', function(event){
		 if (videoElement.currentTime > videoStartTime + durationTime){
			window.clearTimeout(timeoutID);
			videoElement.pause();
			videoElement.currentTime = videoStartTime;
			videoElement.play();
  		}		
	},false);
	
 	
}

function prepareCanvas(){
	console.log('prepareCanvas');
	canvasWidth = videoElement.clientWidth;
	canvasHeight = videoElement.clientHeight;
	canvasElement.width = canvasWidth;
	canvasElement.height = canvasHeight;
	backCanvas.width = canvasWidth;
	backCanvas.height = canvasHeight;
};

function toGray(data) {
	for(var i = 0; i < data.length; i+=4) {
		var r = data[i];
		var g = data[i+1];
		var b = data[i+2];
		var brightness = (3*r+4*g+b)>>>3;
		data[i] = brightness;
		data[i+1] = brightness;
		data[i+2] = brightness;
	}
	return data		
};	

function draw(videoElement,context,backContext,canvasWidth,canvasHeight) {
	if (videoElement.paused || videoElement.ended){
		console.log('nodraw');	
		return;
	}
	backContext.drawImage(videoElement,0,0,canvasWidth,canvasHeight);
	var imageData = backContext.getImageData(0,0,canvasWidth,canvasHeight);
	context.putImageData(imageData,0,0);
	timeoutID = window.setTimeout(function(){ 
		draw(videoElement,context,backContext,canvasWidth,canvasHeight); 
	}, 0);
}

(function(){
})();
	