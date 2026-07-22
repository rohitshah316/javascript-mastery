//WeakSet

//a weakset is like a set, but it has two important rules
//1. it only stores objects(not strings, numbers, booleans,etc)
//2. Objects are held weakly, so if there are no other references to an object, JS can auotmatically remove it from the WeakSet

const ws=new WeakSet();

const user={
    name:"alex"
}

ws.add(user);
ws.add(100)
console.log(ws)
console.log(ws.has(user))