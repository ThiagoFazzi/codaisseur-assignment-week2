function giveItBackLater(value, callback){
    function loadCompleted(){ 
        callback(value)
    }
    setTimeout(loadCompleted, 1000)
}

function addSomePromises(somePromise){
    return new Promise((resolve,reject) => {
       // const timer = () => {
            if(somePromise == "foo"){
                //resolve(console.log(`somePromise = ${somePromise}`))
                resolve(console.log(`somePromise = ${somePromise}`))
            }else if(somePromise == "bar"){
                //reject(console.log(`somePromise = ${somePromise}`))
                reject(console.log(`somePromise = ${somePromise}`))
            }
       // }
        //setTimeout(timer, 1000)
    })
}






/*
const getAuthorPromiseWithReject = (authorId) => {
    return new Promise((resolve, reject) => {
      const loadComplete = () => {
        if(authors[authorId] !== undefined) {
          resolve(authors[authorId])
        } else {
          reject('Error: Author not found!')
        }
      }
      setTimeout(loadComplete, 1000)
    })
  }

*/






    
    
/*    
return new Promise((resolve, reject) => {
        const timer = () => {
            resolve(() => console.log(somePromise)),
            reject(err => console.log(err.mesage))
        }
        setTimeout(timer, 1000)
    })
}
*/

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