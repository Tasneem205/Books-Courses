/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);
    let newIntervals = [meetings[0]];
    for (let i = 1; i < meetings.length; i++) {
        let prev = newIntervals[newIntervals.length - 1];
        let curr = meetings[i];
        if (curr[0] <= prev[1]) prev[1] = Math.max(prev[1], curr[1]);
        else newIntervals.push(curr);
    }
    for (let [i, j] of newIntervals) {
        days -= j - i + 1;
    }
    return days;
};

console.log((countDays(days = 10, meetings = [[5,7],[1,3],[9,10]]))); // 2
console.log((countDays(days = 5, meetings = [[2,4],[1,3]]))); // 1
