const stringLength = (str) => {
    if (str.length < 1 || str.length > 10){
        throw new Error ("Input should not be less than 1 or greater than 10")
    }else {
        return str.length;
    }
}

module.exports = stringLength;