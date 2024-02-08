import { error, log } from 'console'
import fs from 'fs'

let data1, data2, data3;
try {
    data1 = fs.readFileSync('./1.txt', 'utf8');
    data2 = fs.readFileSync('./2.txt', 'utf8');
    data3 = fs.readFileSync('./3.txt', 'utf8');
} catch (err) {
    console.error('Error reading file:', err);
}

const searchObj = {};
let tmp1 = data1.split(" ");
let tmp2 = data2.split(" ");
let tmp3 = data3.split(" ");

const pattern = /\b[,.?-]+\s*/g;
let arr = [tmp1, tmp2, tmp3];
let file = ["1.txt", "2.txt", "3.txt"];

for (let k = 0; k < arr.length; k++) {
    for (let i = 0; i < arr[k].length; ++i) {
        arr[k][i] = arr[k][i].replace(pattern, "")

        if (searchObj[arr[k][i]] && searchObj[arr[k][i]].indexOf(file[k]) === -1) {
            searchObj[arr[k][i]].push(file[k])
        } else {
            searchObj[arr[k][i]] = [];
            searchObj[arr[k][i]].push(file[k])
        }
    }
}

console.log(searchObj["Lorem"]); // -->[ '1.txt', '2.txt', '3.txt' ]

