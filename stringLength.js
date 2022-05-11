const stringLength = (str) => {
    if (str.length < 1){
        throw new Error ("Input should not be less than 1")
    }else {
        return str.length;
    }
}

module.exports = stringLength;