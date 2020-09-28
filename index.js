const container=document.querySelector('.container');
const text=document.querySelector('#text');

const totaltime=7500;
const breathetime=(totaltime/5)*2;
const holdtime=totaltime/5;

const music =document.getElementById("myAudio");
breatheAnimation()
playaudio();

function playaudio(){
    music.play();
}
function breatheAnimation(){
    text.innerText='Breathe In!';
  
    container.className='container grow';
    setTimeout(()=>{
        text.innerText='Hold'
        setTimeout(()=>{
            text.innerText='Breathe Out!'
            container.className = 'container shrink'
        },holdtime)
    },breathetime)
}

setInterval(breatheAnimation,totaltime);