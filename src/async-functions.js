function giveItBackLater(value, callback){
    function loadCompleted(){ 
        callback(value)
    }
    setTimeout(loadCompleted, 1000)
}


function addSomePromises(somePromise){
    somePromise
    .then(resolved => resolved.repeat(2))
    .catch(rejected => rejected.repeat(3))
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