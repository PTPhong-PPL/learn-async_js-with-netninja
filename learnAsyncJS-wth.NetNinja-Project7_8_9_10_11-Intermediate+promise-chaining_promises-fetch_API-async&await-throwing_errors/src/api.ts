
// test fetch API

/*
fetch('./rsc/u1.json').then((response) => {
    console.log('resolved:  ', response);
    return response.json();
}).then((data:any) => {
    console.log(data);
}).catch((err) => {
    console.log('rejected:  ', err);
});
*/

// async and await

const getData = async () => {
    const response = await fetch('./rsc/u1.json');

    if (response.status !== 200){
        throw new Error('cant fetch the data from u1.json');
    }

    const data = await response.json();

    return data;
}

console.log(1);
console.log(2);

getData()
    .then((data) => {
        console.log('resolved:  ', data);
    })
    .catch((data) => {
        console.log('rejected:  ', data);
    });

console.log(3);
console.log(4);

// const responseText = getData();
// console.log(responseText);

