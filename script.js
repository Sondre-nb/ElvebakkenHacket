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
    inputValue = inputValue.replaceAll("{", "").replaceAll("}","") //fjerner alle krøllparantes
    return inputValue === targetValue;
}

function attemptAnswer(level) {
    let levels = [
        ["=M3a1pUZyRmbphUYBJ3bGFmc0N3aFV2bORWZtJTZkl2cvQXZrNWYI5WZrtWYiVmdsV0L", "==AM0ACI6AiclRHd15WatByJz5WYIdCIgoDIuZXYuJ3bmBSO4kTMgAiOgIXYhNHblNHZvZGIn4WZzxWZrtWaNdCIgoDIuZXYuJXZ0RXZ"],
        ["placeholder-url", "xAiOyVGd0Vnbp1GIsYDMwIDI6IXYhNHblNHZvZGIscSZpx0Jgojb2FmbyVGd0VGIscyaptWaFdCI64mdh5mcvZGIgoDIyASOgojclRHd15WatBCL1ADMyAiOyFWYzxWZzR2bmBCLn4WZz5WYIdCI64mdh5mclRHdlBCLnwWZrtWaNdCI64mdh5mcvZGIgoDIxACM0AiOyVGd0Vnbp1GIskDO5EDI6IXYhNHblNHZvZGIsciblNHblt2ap10Jgojb2FmbyVGd0VGIscycuFGSnAiOuZXYuJ3bmBCI6ACM"] //Fasit uten krøllparantes
    ]
    console.log("Noe funker ihvertfall")
    console.log(levels)
    console.log(level)
    console.log(levels[level])
    console.log(levels[level][0])
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
