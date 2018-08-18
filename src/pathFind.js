function pathFind(path, object){
    path.map(p => object = object[p])
    return object
}

module.exports = { pathFind }