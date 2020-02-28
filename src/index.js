module.exports = function reverse (n) {
    let str1 = Math.abs(n);
    let str = String(str1);
    let mas = str.split("");
    let rev = mas.reverse().join("");
    res = Number(rev);
    return(res);
}
