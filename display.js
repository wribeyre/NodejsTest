function hello(req, res) {
    res.send("<b>hello William</b>");
}

function mult(a, b){
    return a*b;
}


module.exports = {
    hello,
    mult
};
