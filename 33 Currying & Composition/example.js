const products = [
    {
        name: "Phone",
        price: 1000
    },
    {
        name: "Laptop",
        price: 5000
    },
    {
        name: "Mouse",
        price: 500
    }
];

const getPrices=(products)=>{
    return products.map(product=>product.price);
}




const applyDiscount=(percent)=>{
    return (prices)=>{
        return prices.map(price=>(price-(price*percent/100)))
    }
}

const sum=(arr)=>{
    return arr.reduce((x,num)=>{
        
        return x+num},0)
}

const pipe=(...fns)=>{
    return (x)=>{
        return fns.reduce((result,fn)=>{
           return fn(result)
        },x)
    }
}

const apply20=applyDiscount(20)

const calculateTotal=pipe(getPrices,apply20,sum);

console.log(calculateTotal(products))