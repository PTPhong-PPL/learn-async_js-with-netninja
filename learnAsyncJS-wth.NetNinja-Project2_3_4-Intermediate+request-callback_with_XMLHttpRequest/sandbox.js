const getTodos = (callback) => {
    const endpoint = 'https://jsonplaceholder.typicode.com/todos';
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request, request.responseText);
            let data = JSON.parse(request.response);
            callback(undefined, data);
        }
        else if (request.readyState === 4) {
            // console.log('Could not fetch the request');
            callback('could not fetch data', undefined);
        }
    });
    request.open('GET', endpoint);
    request.send();
};
console.log(1);
console.log(2);
getTodos((err, data) => {
    console.log('callback fired');
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});
console.log(3);
console.log(4);
