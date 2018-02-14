var song;
var button;
var volumeSlider, rateSlider, panSlider
var amp, volume, size;

function preload(){
    song = loadSound("sound/swv-weak.mp3")
}

function setup(){
    createCanvas(600,400);
    background(100,50,200)
    
    button = createButton("play");
    button.mousePressed(toggleplaying);
    button.position(20,100);
    
    
    volumeSlider = createSlider(0, 1, 0.5, .05);
    volumeSlider.position(20, 130);
    
    rateSlider = createSlider(0.5, 1.5, 1, 0.05);
    rateSlider.position(20, 160)
    
    panSlider = createSlider(-1, 1, 0, .05);
    panSlider.position(20, 190);
    
    //add Cue
    //song.addCue(3,showSquare);
    amp = new p5.Amplitude();
    
}

function draw(){
    background(0);
    volume = amp.getLevel();
    size = map(volume, 0, 1, 50, 300);
    
    song.setVolume(volumeSlider.value())
    song.rate(rateSlider.value());
    song.pan(panSlider.value())
    
    fill(90,20,95);
    rect(width/2, height/2, size, size);
}

function toggleplaying(){
    if(song.isPlaying()){
        song.pause();
         button.html("play");
    }
    else{
        song.play()
        song.jump(15);
        song.setVolume(1)
        button.html("pause");
    }
}

function showSquare(){
    fill(90,20,95);
    rect(width/2, height/2, volume, volume);
}
