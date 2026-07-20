// 


//JS Execution Model
//There are 4 main components
//1. Call stack
//2. Web APIs
//3. Callback Queue
//4. Event Loop

//1. Call Stack: It executes one fucntion at a time

//2. Web APIs: Its an extra features provided by environments like Browser, Node.js
//runtime APIs in Node.js
//JS doesnt have built-in clock, its ask the environment its running in.
// setTimeout(),setInterval(),fetch(),addEventListener()
//there are not part of JS itself. they are provided by the runtime




//3. callback Queue: callback wait patiently until JS is ready


//4. Event Loop: The Event loop wait when Call Stack is not empty, else move the first callback from callback queue to the callstack

