module.exports = function getFlags(string){
    index = process.argv.indexOf(string) + 1
    return process.argv[index]
}

