const ALPHABET_SIZE = 26;
const CHAR_CODE_A = 97;

export function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const frequency = new Int32Array(ALPHABET_SIZE);
    for (let i = 0; i < s.length; i++) {
        frequency[s.charCodeAt(i) - CHAR_CODE_A] ++;
        frequency[t.charCodeAt(i) - CHAR_CODE_A] --;
    }

    return frequency.every(count => count === 0);
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        return isAnagram(s, t);
    }
}
