function getRandomLetter() {
    let string = "thisisstring";
    let  result = string.charAt(Math.floor(Math.random() * string.length));
    return result;
}
consolr.log(getRandomLetter())