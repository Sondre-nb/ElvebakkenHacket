function njdasjAKSJ276tdSGDU(encoded) {
    return atob(encoded);
}

function idjoisaNU45asdSbds72GDUSA(str) {
    return str.split('').reverse().join('');
}

function check(targetValue) {
    let inputField = document.getElementById("inputField");
    let inputValue = inputField.value.trim();
    inputValue = inputValue.replaceAll('"', "'") //erstatter doble hermetegn med enkelte hermetegn
    return inputValue === targetValue;
}

function attemptAnswer(level) {
    let levels = [
        ["=M3a1pUZyRmbphUYBJ3bGFmc0N3aFV2bORWZtJTZkl2cvQXZrNWYI5WZrtWYiVmdsV0L", "=IXZkx2boV2YhxGc"]
    ]
    const revEncodedNextPageURL = levels[level][0];
    const revEncodedTargetValue = levels[level][1];
    const nextPageURL = njdasjAKSJ276tdSGDU(idjoisaNU45asdSbds72GDUSA(revEncodedNextPageURL));
    const targetValue = njdasjAKSJ276tdSGDU(idjoisaNU45asdSbds72GDUSA(revEncodedTargetValue));

    if (check(targetValue)) {
        const url = new URL(window.location.href);
        url.pathname = nextPageURL;
        window.location.href = url.href;
        return true;
    }

    alert("Feil!");
    return false;
}
