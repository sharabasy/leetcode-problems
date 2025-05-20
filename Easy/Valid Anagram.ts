function isAnagram(s: string, t: string): boolean {    
    if (s.length !== t.length) return false;

    const w1 = s.split("").sort().join("");
    const w2 = t.split("").sort().join("");

    return (
        w1 === w2 ? true : false
    );
};