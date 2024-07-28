console.log("welcome to spotify")

// Initialize the varibles
let sonIndex= 0;
let audioElement= new Audio('songs/1.mp3')
let masterPlay= document.getElementById("masterPlay")
let myProgressBar= document.getElementById("myProgressBar")
let gif= document.getElementById("gif")
let masterSongName= document.getElementById("masterSongName")
let songsItems= Array.from(document.getElementsByClassName("songItem"));
let songs = [
        {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "images/1.jpg"},
        {songName: "A Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "images/2.jpg"},
        {songName: "B Salam-e-Ishq", filePath: "songs/3.mp3", coverPath: "images/3.jpg"},
        {songName: "C Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "images/4.jpg"},
        {songName: "D Salam-e-Ishq", filePath: "songs/5.mp3", coverPath: "images/5.jpg"},
        {songName: "E Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "images/6.jpg"},
        {songName: "F Salam-e-Ishq", filePath: "songs/7.mp3", coverPath: "images/7.jpg"},
        {songName: "I Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "images/8.jpg"},
        {songName: "J Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "images/9.jpg"},
        {songName: "K Salam-e-Ishq", filePath: "songs/10.mp3", coverPath: "images/10.jpg"},
        
]
songsItems.forEach((element, i)=>{

        element.getElementsByTagName("img")[0].src=songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
// audioElement.play();

// handle play pause
masterPlay.addEventListener('click',()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
                audioElement.play();
                masterPlay.classList.remove('fa-circle-play')
                masterPlay.classList.add('fa-circle-pause')
                gif.style.opacity=1;
        }
        else{
                audioElement.pause();
                masterPlay.classList.remove('fa-circle-pause')
                masterPlay.classList.add('fa-circle-play')
                gif.style.opacity=0;
        }
})
// Listen to Event
audioElement.addEventListener('timeupdate',()=>{
        progress = parseInt(( audioElement.currentTime/audioElement.duration)*100);
        myProgressBar.value= progress;

})
myProgressBar.addEventListener('change', ()=>{
        audioElement.currentTime= myProgressBar.value * audioElement.duration/100       ;
        

})
const makeAllPlays= ()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
                element.classList.remove("fa-circle-pause");
                element.classList.add("fa-circle-play");
})
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.addEventListener('click',(e)=>{
                console.log(e.target);
                makeAllPlays();
                songIndex= parseInt(e.target.id)
                e.target.classList.remove("fa-circle-play")
                e.target.classList.add("fa-circle-pause")
                audioElement.src= `songs/${songIndex+1}.mp3`;
                masterSongName.innerText= songs[songIndex].songName
                audioElement.currentTime=0;
                audioElement.play();
                gif.style.opacity=1;
                masterPlay.classList.remove("fa-circle-play")
                masterPlay.classList.add("fa-circle-pause")
        })
})
document.getElementById("next").addEventListener("click",()=>{
        if(songIndex>=9){
                songIndex=0;
        }
        else{
                songIndex= songIndex+1;
        }
        audioElement.src= `songs/${songIndex+1}.mp3`;
        masterSongName.innerText= songs[songIndex].songName
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
                masterPlay.classList.remove("fa-circle-play")
                masterPlay.classList.add("fa-circle-pause")
})
document.getElementById("previous").addEventListener("click",()=>{
        if(songIndex<=0){
                songIndex=0;
        }
        else{
                songIndex= songIndex-1;
        }
        audioElement.src= `songs/${songIndex+1}.mp3`;
        masterSongName.innerText= songs[songIndex].songName
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
                masterPlay.classList.remove("fa-circle-play")
                masterPlay.classList.add("fa-circle-pause")
})