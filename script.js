let contents = [];

while (contents.length < 12) {
    contents.push(Math.floor(Math.random()*10));
}

console.log(contents);

const merge = arr => {
    if (arr.length < 2) return;
    else {
        let firstHalf = arr.slice(0, (arr.length / 2));
        let secondHalf = arr.slice((arr.length / 2), (arr.length));

        merge(firstHalf);
        merge(secondHalf);

        let a = 0;
        let b = 0;
        let c = 0;

        while (a < firstHalf.length && b < secondHalf.length) {
            if (firstHalf[a] < secondHalf[b]) {
                arr[c] = firstHalf[a];
                a++;
                if (a == firstHalf.length) {
                    while (b < secondHalf.length) {
                        c++;
                        arr[c] = secondHalf[b];
                        b++;
                    }
                }
            } else {
                arr[c] = secondHalf[b];
                b++;
                if (b == secondHalf.length) {
                    while (a < firstHalf.length) {
                        c++;
                        arr[c] = firstHalf[a];
                        a++;
                    }
                }
            }
            c++;
        }

        return arr;
    }
}

console.log(merge(contents));