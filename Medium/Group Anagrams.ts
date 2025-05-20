function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (const s of strs) {
        const freq = new Array(26).fill(0);

        for (const char of s) {
            freq[char.charCodeAt(0) - 97]++;
        };

        const key = freq.join('|');

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key)!.push(s);
    };
    return [...map.values()];
};