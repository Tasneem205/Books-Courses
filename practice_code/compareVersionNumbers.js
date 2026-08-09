/**
 * A leetcode problem
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let ver1 = 0, ver2 = 0;
    let i = 0, j = 0;
    while (i < version1.length || j < version2.length) {
        let ver1string = '', ver2string = '';
        while (i < version1.length && version1[i] != '.') {
            ver1string += version1[i];
            i++;
        }
        i++;
        while (j < version2.length && version2[j] != '.') {
            ver2string += version2[j];
            j++;
        }
        j++;
        ver1 = Math.max(Number(ver1string), 0);
        ver2 = Math.max(Number(ver2string), 0);
        if (ver1 < ver2) return -1;
        else if (ver1 > ver2) return 1;
    }
    return 0;
};

console.log(compareVersion(version1 = "1.0.1", version2 = "1"));//  == 1);
