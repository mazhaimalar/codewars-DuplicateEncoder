function duplicateEncode(userword) {
    str = "";
    countStr = [];
    let word = userword.toLowerCase();
    let len = word.length;
    let count;
    for (let i = 0; i < len; i++) {
        count = 0
        for (let j = 0; j < len; j++) {
            if (word[i] == word[j]) {
                count += 1;
            }

        }
        countStr[i] = count

    }

    function compare(counStr) {
        for (let k = 0; k < countStr.length; k++) {
            if (countStr[k] < 2) {
                str += '(';
            } else {
                str += ')';
            }
        }
    }
    compare(countStr);
    return str

}

let str = "";
let countStr = '';
duplicateEncode("din");
console.log(str);
duplicateEncode("recede");
duplicateEncode("Success");
duplicateEncode("@d@@(nkc@yb@ @@@@@");

