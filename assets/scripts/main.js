// main.js

// TODO

document.getElementById("volume-number").addEventListener("change", changeVolumeNumber);

function changeVolumeNumber() {
    var volumeNumberValue = document.getElementById("volume-number");
    var volumeSlider = document.getElementById("volume-slider");
    volumeSlider.value = volumeNumberValue.value;
    document.getElementById("horn-sound").volume = volumeNumberValue.value / 100.0;
    changeVolumePicture( volumeNumberValue.value );
}

document.getElementById("volume-slider").addEventListener("change", changeVolumeSlider);

function changeVolumeSlider() {
    var volumeSliderValue = document.getElementById("volume-slider");
    var volumeNumber = document.getElementById("volume-number");
    volumeNumber.value = volumeSliderValue.value;
    document.getElementById("horn-sound").volume = volumeSliderValue.value / 100.0;
    changeVolumePicture( volumeSliderValue.value );
}

function changeVolumePicture( volume ) {
    var volumeSticker = document.getElementById("volume-image");
    document.getElementById("honk-btn").disabled = false;
    if( volume >= 67 ) {
        volumeSticker.src = "./assets/media/icons/volume-level-3.svg";
    } else if( volume >= 34 ) {
        volumeSticker.src = "./assets/media/icons/volume-level-2.svg";
    } else if( volume >= 1) {
        volumeSticker.src = "./assets/media/icons/volume-level-1.svg";
    } else {
        volumeSticker.src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById("honk-btn").disabled = true;
    }
}

document.getElementById("radio-air-horn").addEventListener("click", radioNoise);
document.getElementById("radio-car-horn").addEventListener("click", carNoise);
document.getElementById("radio-party-horn").addEventListener("click", partyNoise);

function radioNoise() {
    var sound = document.getElementById("horn-sound");
    sound.src = "./assets/media/audio/air-horn.mp3";
    var image = document.getElementById("sound-image");
    image.src = './assets/media/images/air-horn.svg';
}

function carNoise() {
    var sound = document.getElementById("horn-sound");
    sound.src = "./assets/media/audio/car-horn.mp3";
    var image = document.getElementById("sound-image");
    image.src = './assets/media/images/car.svg';
}

function partyNoise() {
    var sound = document.getElementById("horn-sound");
    sound.src = "./assets/media/audio/party-horn.mp3";
    var image = document.getElementById("sound-image");
    image.src = './assets/media/images/party-horn.svg';
}

document.getElementById("honk-btn").addEventListener("click", makeNoise);

function makeNoise() {
    document.getElementById("horn-sound").play();
    alert("Sound");
}




