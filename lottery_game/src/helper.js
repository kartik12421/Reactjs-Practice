function generateNum(n) {
    let arr = new Array(n);

    for(let i=0; i<n;i++){
        arr[i] = Math.floor(Math.random() * 10);
    }

    return arr;
}

function sum(arr) {
    return arr.reduce((res, el) => (res + el));
}

export {generateNum, sum}