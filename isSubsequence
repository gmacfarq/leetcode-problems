//use two pointers
//track where you are in the s string and t strings, if the characters match, move forward in both
//if the characters do not match move forward in t only
//check to see if we have reached the end of s on every iteration. if we dont, return false
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if(s.length == 0) return true;
    if(s.length > t.length) return false;

    let find = 0;
    let scan = 0;

    while (scan < t.length) {
        if (s[find] == t[scan]) {
            scan++
            if (++find == s.length) return true
        } else {
            scan++
        }
    }
    return false;
};