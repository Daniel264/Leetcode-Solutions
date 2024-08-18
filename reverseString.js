
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const splitted = s.split(' ').reverse().filter(Boolean).join(' ')
    console.log(splitted);

};

reverseWords(" hello good   example"
);
