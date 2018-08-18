function giveItBackLater(value, callback){
    function loadCompleted(){ 
        callback(value)
    }
    setTimeout(loadCompleted, 1000)
}

function addSomePromises(somePromise) {
    return new Promise((resolve, reject) => {
        const loadCompleted = () => {
            if(somePromise == 'foo'){
                resolve('foofoo')
            } else if(somePromise == 'bar'){
                reject('barbarbar')
            }
        }
        setTimeout(loadCompleted, 1000)
    })
}

function promiseToGiveItBackLater(value){
    return new Promise((resolve) => {
        const timer = () => {
            resolve(value)
        }
        setTimeout(timer, 1000) 
    })
}







module.exports = { 
    giveItBackLater,
    addSomePromises,
    promiseToGiveItBackLater
}