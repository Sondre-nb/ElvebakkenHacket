function encodeBase64(str) {
    return btoa(str);
}

function idjoisaNU45asdSbds72GDUSA(str) {
    return str.split('').reverse().join('');
}

function createScrambledBase64(str) {
    return idjoisaNU45asdSbds72GDUSA(encodeBase64(str));
}

console.log(createScrambledBase64("sick.com"));