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

function attemptAnswer(level) { //levels var et argument her før, vet ikke om du hadde none stor plan, Trym, men tror det skal fungere uten
    const revEncodedTargetValue = levels[level][0];
    const revEncodedNextPageURL = levels[level][1];
    const targetValue = njdasjAKSJ276tdSGDU(idjoisaNU45asdSbds72GDUSA(revEncodedTargetValue));
    const nextPageURL = njdasjAKSJ276tdSGDU(idjoisaNU45asdSbds72GDUSA(revEncodedNextPageURL));

    if (check(targetValue)) {
        window.location.href = nextPageURL;
    }
}

let levels = [ // nextPageURL (reversed), targetValue (reversed)
    ["vM3a1pUZyRmbphUYBJ3bGFmc0N3aFV2bORWZtJTZkl2cvQXZrNWYI5WZrtWYiVmdsV0LvlmLiVHa0l2ZuImbtUmck52bz9yL6MHc0RHa","=IXZkx2boV2YhxGc"], //targetValue er "placeholder" bare kjørt gjennom FJERNFØRLAUNCH.js
    ["==wLndWZsxWaUlEdl5mbBV2bORWZtNTZkl2cvQXZrNWYI5WZrtWYiVmdsV0LvlmLiVHa0l2ZuImbtUmck52bz9yL6MHc0RHa","placeholder"],
    ["==wLuVGTSVVZ0RXZqdUZu5WdLVHRnlGbltmcpZVdEVGZk9mc0RTZkl2cvQXZrNWYI5WZrtWYiVmdsV0LvlmLiVHa0l2ZuImbtUmck52bz9yL6MHc0RHa", "placeholder"],
    ["vQXZEVHRyVmblpGdy9mRl5mbuVGRlRHdlp2RhFEdyFGbLJXYIVHRzlmdoVTZkl2cvQXZrNWYI5WZrtWYiVmdsV0LvlmLiVHa0l2ZuImbtUmck52bz9yL6MHc0RHa", "placeholder"],
    ["==wLlR3cpNVZExWaUV2bOFWYQVmbulmRlJXYCdWZKFWYNFWYuZTZkl2cvQXZrNWYI5WZrtWYiVmdsV0LvlmLiVHa0l2ZuImbtUmck52bz9yL6MHc0RHa", "placeholder"],
    ["==wLuVmanlkclRWaTFWYG5WZv5Ed0F2c0J3bmdTZkl2cvQXZrNWYI5WZrtWYiVmdsV0LvlmLiVHa0l2ZuImbtUmck52bz9yL6MHc0RHa", "placeholder"],
    ["=8iclVGZJJ3bG12bUFWYHFWQnlGbltmcpZlcl5mb5dWZCdWZqhTZkl2cvQXZrNWYI5WZrtWYiVmdsV0LvlmLiVHa0l2ZuImbtUmck52bz9yL6MHc0RHa", "placeholder"],
    ["=8iclxkUVFWYQVmbulmRhFEZl10ZpRmclZEdyFmbTdWZKJXRnlGblRmbllTZkl2cvQXZrNWYI5WZrtWYiVmdsV0LvlmLiVHa0l2ZuImbtUmck52bz9yL6MHc0RHa", "placeholder"],
    ["=8iblxkUVlUYyR3crVUZv5EZl1WZkl2cyVmbulmdvQXZrNWYI5WZrtWYiVmdsV0LvlmLiVHa0l2ZuImbtUmck52bz9yL6MHc0RHa", "placeholder"]
]
