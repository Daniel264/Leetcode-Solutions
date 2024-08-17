// function reverseWords(s: string): string {
//     s = 'the sky is blue'
//     const splitted = s.split
//     console.log(splitted);

// };
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
