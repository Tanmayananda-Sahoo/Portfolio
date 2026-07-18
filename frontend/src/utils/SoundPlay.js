const audio = new Audio("/audios/uiclickeffect.mp3");
const audio2 = new Audio("/audios/mouseclick.mp3");

function hoverAudio() {
  console.log(audio);
  audio.currentTime = 0;
  audio.play().catch((err) => {
    console.error(err);
  });
}

function clickAudio() {
  audio2.currentTime = 0;
  audio2.play().catch((err) => {
    console.log(err);
  })  
}

export {hoverAudio, clickAudio}