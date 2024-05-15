// test fetch API
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const getData = () => __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch('./rsc/u1.json');
    if (response.status !== 200) {
        throw new Error('cant fetch the data from u1.json');
    }
    const data = yield response.json();
    return data;
});
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
