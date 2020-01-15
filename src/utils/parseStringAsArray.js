module.exports = function parserStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(element => element.trim());
}