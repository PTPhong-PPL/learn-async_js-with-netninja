const getTodos = (resource) => {
    // const endpoint:string = 'https://jsonplaceholder.typicode.com/todos';
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', resource);
        request.send();
        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState);
            if (request.readyState === 4 && request.status === 200) {
                // console.log(request, request.responseText);
                let data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if (request.readyState === 4) {
                // console.log('Could not fetch the request');
                reject('error, getting reject');
            }
            ;
        });
    });
};
// chaining promise example
getTodos('./rsc/u1.json').then((data) => {
    console.log('promise is resolved:  ', data);
    return getTodos('./rsc/u2.json');
}).then((data) => {
    console.log('promise 2 is resolved:  ', data);
    return getTodos('./rsc/u3.json');
}).then((data) => {
    console.log('promise 3 is resolved:  ', data);
}).catch((error) => {
    console.log('promise is rejected:  ', error);
});
/*
// promise example

const getData = () => {

    return new Promise((resolve, reject) => {
        // fetch some data
        resolve('some data if success');
        reject('some error if fail');
    });
}

getData().then((data) => {
    console.log('ex1:  ', data);
}, (error) => {
    console.log('ex1:  ', error);
})

getData().then((data) => {
    console.log('ex2:  ', data);
}).catch((error) => {
    console.log('ex2:  ', error);
})
*/ 
