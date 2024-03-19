const apagada = document.getElementById('lampadaApagada');
const acesa = document.getElementById('lampadaAcesa');
const quebrada = document.getElementById('lampadaQuebrada');
const musica = document.getElementById('audioTick');
const audioBreak = document.getElementById('lampAudioBreak');

let acender = 0
let apagar = 0

apagada.addEventListener('click', function() {
    acenderLuz();
    musicaPlay();
});

acesa.addEventListener('click', function() {
    desligarLuz();
    musicaPlay();
});

function acenderLuz() {
    apagada.style.display = 'none';
    acesa.style.display = 'block';
    acender ++;
    quebrar();
}

function desligarLuz() {
    apagada.style.display = 'block';
    acesa.style.display = 'none';
    apagar ++;
    quebrar();
}

function breakLampAudio(){
    audioBreak.play();
}

function musicaPlay() {
    musica.play();
}

function quebrar(){
    if(acender >= 6){
        acesa.style.display = 'none';
        apagada.style.display = 'none';
        quebrada.style.display = 'block';
        breakLampAudio();
    }
}
