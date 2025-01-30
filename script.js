function njdasjAKSJ276tdSGDU(encoded) {
    return atob(encoded);
}

function idjoisaNU45asdSbds72GDUSA(str) {
    return str.split('').reverse().join('');
}

function check(targetValue) {
    let inputField = document.getElementById("inputField");
    let inputValue = inputField.value.trim();

    return inputValue === targetValue;
}

function attemptAnswer(level, levels) {
    const revEncodedTargetValue = levels[level][0];
    const revEncodedNextPageURL = levels[level][1];
    const targetValue = njdasjAKSJ276tdSGDU(idjoisaNU45asdSbds72GDUSA(revEncodedTargetValue));
    const nextPageURL = njdasjAKSJ276tdSGDU(idjoisaNU45asdSbds72GDUSA(revEncodedNextPageURL));

    if (check(targetValue)) {
        window.location.href = nextPageURL;
    }
}

levels = [ // nextPageURL (reversed), targetValue (reversed)
    ["=02bj5yajl2c","=03MyAiOvl3e"]
]
