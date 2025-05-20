"use strict";
function isAnagram(s, t) {
    if (s.length !== t.length)
        return false;
    const freq = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 97]++;
        freq[t.charCodeAt(i) - 97]--;
    }
    ;
    return freq.every(char => char === 0);
}
;
