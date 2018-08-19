function giveItBackLater(value, callback){
    function loadCompleted(){ 
        callback(value)
    }
    setTimeout(loadCompleted, 1000)
}


function addSomePromises(somePromise){
    return somePromise
    .then(function(resolve,reject){ 

        if(resolve == 'foo'){
            Promise.resolved('foofoo')
        }else {
            Promise.rejected('barbarbar')
        }

              
    })
    .catch(function(reason){ 
        console.log(reason)

 
    
    })
}


console.log(addSomePromises(Promise.resolve('foo')))
addSomePromises(Promise.reject('bar'))


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