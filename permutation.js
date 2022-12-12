let perm = (str1, str2) => {

    let freq = new Array(97).fill(0);

    for (let character in str1) {
        freq[character.charCodeAt(0)]++;
    }
    for (let character in str2) {
        freq[character.charCodeAt(0)]--;
    }
    for (let i = 0; i < 97; i++) {
        if (freq[i] != 0) return false;
    }

    return true;
}

console.log(perm("hel", "leh "))