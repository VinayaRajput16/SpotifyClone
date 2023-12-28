console.log("welcome to Spotify");
// initialize the variable
let songIndex=0;
let audioElement= new Audio('song1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myprogressbar= document.getElementById('myprogressbar');
let songs = [
    { songName:"Seven", filePath:"song1.mp3", coverPath:"img1.png"},
    { songName:"Seven", filePath:"song2.mp3", coverPath:"img2.jpg"},
    { songName:"Seven", filePath:"song3.mp3", coverPath:"img3.webp"},
    { songName:"Seven", filePath:"song4.mp3", coverPath:"img4.jpg"},
    { songName:"Seven", filePath:"", coverPath:""},
    { songName:"Seven", filePath:"", coverPath:""},
    { songName:"Seven", filePath:"", coverPath:""},
    { songName:"Seven", filePath:"", coverPath:""},
    { songName:"Seven", filePath:"", coverPath:""},
    { songName:"Seven", filePath:"", coverPath:""},
]
// AudioElement.play();

// play/pause button
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<= 0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }

})
// listen to event
 audioElement.addEventListener('timeupdate',()=>{
 console.log('timeupdate');
//  update seek bar
 progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
 console.log(progress);
 myprogressbar.value = progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime= (audioElement.duration * myprogressbar.value)/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=> {
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        let songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
       audioElement.src=`song${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }) 
});
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=4){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`song${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex>=4){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`song${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})