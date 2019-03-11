window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    if (!audio) return; // Stop function from running if no audio available
    audio.play();
});