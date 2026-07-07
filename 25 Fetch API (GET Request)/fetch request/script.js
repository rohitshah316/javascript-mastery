
const btn=document.getElementById("btn");
const userList=document.getElementById("userList");

btn.addEventListener("click",async ()=>{
    
try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

console.log(response.status);
console.log(response.ok);
console.log(response.status);
console.log(response.headers.get("Content-Type"));


if(!response.ok){
    throw new Error("HTTP Error:")
}
const data=await response.json()



data.forEach(user => {
    const li=document.createElement("li");
    li.innerHTML=`<strong>${user.name}</strong> - <small>${user.email}</small>`;
    userList.appendChild(li);
});
// console.log(typeof data)  //objectt
// console.log(Array.isArray(data)) //true
// console.log(data.length)  //10
// console.log(data[0].name)  //Leanne Graham
}catch(err){
    console.error(err);
}

})

        // console.log(response) //gives response object
    



//respone body is a stream of data that still needs to be read and parsed.
//reading and parsing that JSON is also asynchronous, so we call response.json(), which also returns a Promise.

//simple explanation
// fetch() → The delivery truck arrives with the package.
// response → You now have the unopened package.
// response.json() → You open the package and take out what's inside.



// | Property              | Meaning                     | Example                     |
// | --------------------- | --------------------------- | --------------------------- |
// | `response.status`     | HTTP status code            | `200`, `404`, `500`         |
// | `response.ok`         | `true` if status is 200–299 | `true`                      |
// | `response.statusText` | Status message              | `"OK"`                      |
// | `response.headers`    | Response headers            | Content type, caching, etc. |
// | `response.json()`     | Parse the body as JSON      | Returns a Promise           |
// | `response.text()`     | Read the body as plain text | Returns a Promise           |
