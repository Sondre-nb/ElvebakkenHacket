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

console.log(createScrambledBase64("0 :  {fornavn: 'Hans', etternavn: 'Mikkelsen', fodselsaar: 1989, minutter: 40} 1 :  {fornavn: 'Mikkel', etternavn: 'Hansen', fodselsaar: 2005, minutter: 9} 2 :  {fornavn: 'Eikik', etternavn: 'Lie', fodselsaar: 2006, minutter: 1}"));
console.log(decodeScrambledBase64("=03MyAiOvl3e"));