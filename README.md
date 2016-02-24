# cinemagrapher
Wouldn't you like to make cinemagraphs IN your browser, without uploading anything to a remote server? Then share it on imgur, instagram, twitter, etc? No? Well I'm going to try and do it anyway.

## What's a Cinemagraph?
Cinemagraphs are motion pictures without most of the motion. The basic effect is accomplished by overlaying portions of a single frame over top of all the other frames in the video.

## What Are You Trying to Do?
Create a web app that will allow someone to make a cinemagraph using their browser, completely locally.

## Is This a Good Idea?
Probably not.

## Basic Use Case
1. Select local video source (could maybe do remote down the line). Will start with whatever format is easiest and go from there.
2. The video loads into a web player
3. Select region of video to be converted (limit max time to 5 seconds or whatever seems optimal). Use sliders/input field.
4. Select target static frame. 
5. Use pen-like tool (think photoshop) to select region that is to contain motion, or region that is to remain static.
6. Run (not sure how long this process will take, will need jokes).
7. Preview completed cinemagraph
8. Upload/Share to whatever API integrations make sense and work, probably will start with Imgur, then try Twitter, Instagram, Facebook, etc.

## Inputs
* Video file, maybe gif

## Outputs
* Video File (mp4 works on instagram well), or maybe gif

## Resource List
First up is to figure out if this is possible. So far it seems like it might be.

### General Reference
* http://stackoverflow.com/questions/34200068/create-mp4-video-in-javascript

### JS Image Editing
* https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas

### JS Video Control
* http://www.creativebloq.com/html5/build-custom-html5-video-player-9134473

### JS Video File Conversion
* https://bgrins.github.io/videoconverter.js/ *This looks super promising*

### Node Video Editor
* https://github.com/casatt/html5-videoEditor

## Future Plans
Assuming I actually acomplish this much and people are interested, I could add in some extra features:
* Sound support (not likely)
* More I/O formats
* Multiple regions that move and or don't move
* Image/Video filters
