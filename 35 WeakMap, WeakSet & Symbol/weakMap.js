//WeakMap

const map=new WeakMap();
const user={
    name:"Alex"
};

map.set(user,"Admin");
console.log(map.get(user))


//WeakMap only accepts objects as keys

//