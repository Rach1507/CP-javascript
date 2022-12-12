var perm = (s, t) => {

    if (s.length !== t.length) return false;

    let freq = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 97]++;
    }

    for (let x = 0; x < t.length; x++) {
        freq[t.charCodeAt(x) - 97]--;
    }

    for (let i = 0; i < 26; i++) {
        if (freq[i] !== 0) return false;
    }

    return true;

};
console.log(perm("car", "rat"))