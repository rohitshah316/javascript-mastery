function createCounter(){
    let count=0;

    return function(){
        count++;
        console.log(count);
    }
}


const c1=createCounter();
c1()
c1()
c1()
c1()