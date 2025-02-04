function encodeBase64(str) {
    return btoa(str);
}

function idjoisaNU45asdSbds72GDUSA(str) {
    return str.split('').reverse().join('');
}

function createScrambledBase64(str) {
    return idjoisaNU45asdSbds72GDUSA(encodeBase64(str));
}

function decodeScrambledBase64(str) {
    return atob(idjoisaNU45asdSbds72GDUSA(str));
}

console.log(createScrambledBase64("/ElvebakkenHacket/side2medNoeEkstraForAaHindreJuks"));
console.log(decodeScrambledBase64("=03MyAiOvl3e"));