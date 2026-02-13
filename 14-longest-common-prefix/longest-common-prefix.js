/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
     if (strs.length === 0) return "";

  let first = strs[0];

  for (let i = 0; i < first.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      // If mismatch OR string length exceeded
      if (i >= strs[j].length || strs[j][i] !== first[i]) {
        return first.substring(0, i);
      }
    }
  }

  return first; 
};