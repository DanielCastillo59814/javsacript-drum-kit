const keymap = {
    65: {label: 'clap', sound: 'sounds/CR8KCLAP.WAV'},
    83: {label: 'hihat', sound: 'sounds/CR8KCHAT.WAV'},
    68: {label: 'hightom', sound: 'sounds/CR8KHITM.WAV'},
    70: {label: 'openhat', sound: 'sounds/CR8KOHAT.WAV'},
    71: {label: 'bassdrum', sound: 'sounds/CR8KBASS.WAV'},
    72: {label: 'rim', sound: 'sounds/CR8KRIM.WAV'},
    74: {label: 'snare', sound: 'sounds/CR8KSNAR.WAV'},
    75: {label: 'lowtom', sound: 'sounds/CR8KLOTM.WAV'},
    76: {label: 'cowbell', sound: 'sounds/CR8KCOWB.WAV'}
}
const order = [65,83,68,70,71,72,74,75,76]
function Sound(sound) {
    this.sound = document.createElement("audio");
    this.sound.src = sound;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
window.onload = function() {
    order.forEach(key => {
        const elem = document.createElement('div')
        elem.setAttribute('class', 'keypad')
        elem.setAttribute('id', 'key'+key)
        elem.innerHTML = 
            '<kbd>'+String.fromCharCode(key)+'</kbd><br/>'
            +'<span>'+keymap[key].label+'</span>'
        elem.onclick = e => {
            const sound = new Sound(keymap[key].sound)
            sound.play()
            elem.classList.add('hitted')
            setTimeout(() => elem.classList.remove('hitted'), 150)
        }
        document.getElementById('root').appendChild(elem)
    })
}
window.addEventListener('keydown', e => {
    if (e.keyCode in keymap) {
        const sound = new Sound(keymap[e.keyCode].sound)
        sound.play()
        const elem = document.getElementById('key'+e.keyCode)
        elem.classList.add('hitted')
        setTimeout(() => elem.classList.remove('hitted'), 150)
    }
})