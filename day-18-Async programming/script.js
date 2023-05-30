//Example

let promise = new promise((resolve,reject) => {
    let result = 11;
    if(result > 11) {
        resolve(result);
        } else {
            reject('result is not greater than 10');
        }
});

// consume /execute the promise

promise

.then(result => console.log('result:', result))
.catch(result => console.log('error:', error))