let res;
console.info('hello world');
console.info(1111);
let arr = [];
res = { a: 1 };
res.b = 1;
let bbbb = Object.create(res);
console.info(bbbb);
console.info('res = ', res);
res = JSON.stringify(res);
export default res;
