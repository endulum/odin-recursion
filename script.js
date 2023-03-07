let contents = [];

while (contents.length < 8) {
    contents.push(Math.floor(Math.random()*10));
}

console.log(contents);

const merge = arr => {
    // if length of array is less than 2
        // return
    // else
        // sort left half of array
        // sort right half of array
        // merge these two halves
    if (arr.length < 2) return
    else {
        let firstHalf = arr.slice(0, (arr.length / 2));
        console.log(firstHalf);
        let secondHalf = arr.slice((arr.length / 2), (arr.length));
        console.log(secondHalf);
        return [...firstHalf, ...secondHalf];
        // merge(arr.slice(0, (arr.length / 2)));
        // merge(arr.slice((arr.length / 2), (arr.length / 2)));
    }
}

console.log(merge(contents));